import { Field, NumberInput } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useSetAtom } from "jotai";
import { Grid, styled as p, VStack } from "panda/jsx";
import { useState, type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { z } from "zod";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { svaNumberInput } from "@/components/sva/numberInput";
import { svaTextArea } from "@/components/sva/textArea";
import { User } from "@/lib/classes/user";
import { $redirectTo } from "@/lib/stores/redirect";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { toaster } from "@/lib/utils/toast";

export const Route = createFileRoute("/user/")({
  validateSearch: (s) =>
    z
      .object({
        redirectTo: z.string().optional(),
      })
      .parse(s),
  component: () => {
    const { session } = Route.useRouteContext();

    if (session == null) return <NotAuthenticated />;
    const user = new User(session);

    return session != null ? (
      <Authenticated user={user} />
    ) : (
      <NotAuthenticated />
    );
  },
});

function Authenticated({ user }: { user: User }): ReactElement {
  const [age, setAge] = useState(0);
  const [selected, setSelected] = useState<"sower" | "sponsor" | null>(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const numberInput = svaNumberInput();
  const textArea = svaTextArea();

  const swrUserKindOf = useSWRImmutable("userKindOf", async () =>
    (
      await user.fetchKindOf().mapErr(notifyTableErrorInToast("swrUserKindOf"))
    )._unsafeUnwrap(),
  );

  return (
    <Expanded items="center">
      <VStack gap="10" p="10">
        {swrUserKindOf.data?.type === "UNKNOWN" ? (
          <>
            <p.span fontSize="xl" fontWeight="bold">
              アカウントタイプを選択して下さい
            </p.span>
            <Grid
              gap="4"
              gridTemplate={{ base: "1fr", md: "1fr / repeat(2, 1fr)" }}
            >
              <Button
                h="300px"
                onClick={() => {
                  setSelected("sower");
                }}
                variant="outlined"
                w="300px"
              >
                <VStack gap="2">
                  <IconText
                    icon="bi:person-circle"
                    iconProps={{ height: "3em" }}
                  >
                    <p.p fontSize="lg" fontWeight="bold">
                      市民としてログイン
                    </p.p>
                  </IconText>
                  <p.p fontSize="xs">
                    スマートシティーに住む住人として意見を発言､プロジェクトの支援のためにこのサービスを使う
                  </p.p>
                </VStack>
              </Button>
              <Button
                h="300px"
                onClick={() => {
                  setSelected("sponsor");
                }}
                variant="outlined"
                w="300px"
              >
                <VStack gap="2">
                  <IconText icon="bi:building" iconProps={{ height: "3em" }}>
                    <p.p fontSize="lg" fontWeight="bold">
                      企業としてログイン
                    </p.p>
                  </IconText>
                  <p.p fontSize="xs">
                    スマートシティーに企業として参入するためにこのサービスを使う
                  </p.p>
                </VStack>
              </Button>
            </Grid>
          </>
        ) : (
          <VStack gap="10">
            <Button
              onClick={() => {
                void navigate({ to: "/" });
              }}
              variant="outlined"
              w="auto"
            >
              <VStack gap="2">
                <IconText
                  icon="bi:arrow-left-circle"
                  iconProps={{ height: "3em" }}
                >
                  <p.p fontSize="lg" fontWeight="bold">
                    トップページに戻る
                  </p.p>
                </IconText>
              </VStack>
            </Button>
            <Button
              onClick={() => {
                void navigate({ to: "/projects" });
              }}
              variant="outlined"
              w="auto"
            >
              <VStack gap="2">
                <IconText
                  icon="bi:arrow-return-right"
                  iconProps={{ height: "3em" }}
                >
                  <p.p fontSize="lg" fontWeight="bold">
                    プロジェクト一覧を見る
                  </p.p>
                </IconText>
              </VStack>
            </Button>
          </VStack>
        )}
        {selected === "sower" && (
          <>
            <p.span>年齢を入力して下さい</p.span>
            <p.div h="100px" w="300px">
              <NumberInput.Root
                allowMouseWheel
                className={numberInput.root}
                max={200}
                min={0}
              >
                <NumberInput.Input
                  className={numberInput.input}
                  onChange={(e) => {
                    setAge(Number(e.target.value));
                  }}
                />
                <NumberInput.Control className={numberInput.control}>
                  <NumberInput.IncrementTrigger
                    className={numberInput.decrementTrigger}
                    onClick={() => {
                      setAge((prev) => prev + 1);
                    }}
                  >
                    <Icon
                      icon="material-symbols:keyboard-arrow-up-rounded"
                      width="30px"
                    />
                  </NumberInput.IncrementTrigger>
                  <NumberInput.DecrementTrigger
                    className={numberInput.incrementTrigger}
                    onClick={() => {
                      setAge((prev) => prev - 1);
                    }}
                  >
                    <Icon
                      icon="material-symbols:keyboard-arrow-down-rounded"
                      width="30px"
                    />
                  </NumberInput.DecrementTrigger>
                </NumberInput.Control>
              </NumberInput.Root>
            </p.div>
            <Button
              h="100px"
              onClick={() => {
                void user
                  .registerAsASower({
                    user_id: user.id,
                    name: user.metadata.name ?? "名無し",
                    birthday: `${new Date().getFullYear() - age}-10-05T14:48:00.000Z`,
                  })
                  .mapErr(notifyTableErrorInToast("User.registerAsASower"))
                  .andTee(() => {
                    void navigate({ to: "/" });
                  });
                toaster.success({
                  id: "register-as-sower",
                  title: "市民としてログインしました",
                  description: "ようこそ！",
                });
              }}
              variant="outlined"
              w="300px"
            >
              <VStack gap="2">
                <IconText icon="bi:person-circle" iconProps={{ height: "3em" }}>
                  <p.p fontSize="lg" fontWeight="bold">
                    市民としてログイン
                  </p.p>
                </IconText>
              </VStack>
            </Button>
          </>
        )}
        {selected === "sponsor" && (
          <>
            <p.span>企業の説明を入力して下さい</p.span>
            <Field.Root className={textArea.root}>
              <Field.Textarea
                className={textArea.textarea}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </Field.Root>
            <Button
              h="100px"
              onClick={() => {
                void user
                  .registerAsASponsor({
                    user_id: user.id,
                    name: user.metadata.name,
                    icon: user.metadata.picture,
                    description,
                  })
                  .mapErr(notifyTableErrorInToast("Button.企業としてログイン"))
                  .andTee(() => {
                    void navigate({ to: "/" });
                  });
                toaster.success({
                  id: "register-as-sponsor",
                  title: "企業としてログインしました",
                  description: "ようこそ！",
                });
              }}
              variant="outlined"
              w="300px"
            >
              <VStack gap="2">
                <IconText icon="bi:building" iconProps={{ height: "3em" }}>
                  <p.p fontSize="lg" fontWeight="bold">
                    企業としてログイン
                  </p.p>
                </IconText>
              </VStack>
            </Button>
          </>
        )}
      </VStack>
    </Expanded>
  );
}

function NotAuthenticated(): ReactElement {
  const { redirectTo } = Route.useSearch();
  const setRedirectTo = useSetAtom($redirectTo);

  return (
    <Expanded items="center">
      <VStack>
        <Icon height="3em" icon="mdi:human-greeting" />
        <p.p>まずはログインしてみましょう！</p.p>
        <Button
          onClick={() => {
            setRedirectTo(redirectTo ?? "/user");
            void User.signIn();
          }}
          variant="filled"
        >
          <IconText icon="bi:google">Google でログイン</IconText>
        </Button>
      </VStack>
    </Expanded>
  );
}
