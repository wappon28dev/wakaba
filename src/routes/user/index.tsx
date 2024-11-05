import { Icon } from "@iconify/react";
import { type Session } from "@supabase/supabase-js";
import { createFileRoute } from "@tanstack/react-router";
import { useSetAtom } from "jotai";
import { Grid, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { z } from "zod";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { useSession } from "@/hooks/useSession";
import { User } from "@/lib/classes/user";
import { $redirectTo } from "@/lib/stores/redirect";

export const Route = createFileRoute("/user/")({
  validateSearch: (s) =>
    z
      .object({
        redirectTo: z.string().optional(),
      })
      .parse(s),
  component: () => {
    const { session } = useSession();

    return session != null ? (
      <Authenticated session={session} />
    ) : (
      <NotAuthenticated />
    );
  },
});

function Authenticated({ session }: { session: Session }): ReactElement {
  const { metadata } = new User(session);

  return (
    <Expanded items="center">
      <p.p>{metadata.name}</p.p>
      <VStack gap="10" p="10">
        <p.span fontSize="xl" fontWeight="bold">
          アカウントタイプを選択して下さい
        </p.span>
        <Grid
          gap="4"
          gridTemplate={{ base: "1fr", md: "1fr / repeat(2, 1fr)" }}
        >
          <Button h="300px" variant="outlined" w="300px">
            <VStack gap="2">
              <IconText icon="bi:person-circle" iconProps={{ height: "3em" }}>
                <p.p fontSize="lg" fontWeight="bold">
                  市民としてログイン
                </p.p>
              </IconText>
              <p.p fontSize="xs">
                スマートシティーに住む住人として意見を発言､プロジェクトの支援のためにこのサービスを使う
              </p.p>
            </VStack>
          </Button>
          <Button h="300px" variant="outlined" w="300px">
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
            setRedirectTo(redirectTo ?? "/");
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
