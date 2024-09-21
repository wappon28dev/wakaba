import { Dialog, Portal, Progress } from "@ark-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createFileRoute } from "@tanstack/react-router";
import { Flex, Grid, HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement, useRef } from "react";
import { FruitCard } from "./-components/Fruit";
import { ReportCard } from "./-components/Report";
import { ICON } from "@/assets/icon";
import { svaDialog } from "@/components/sva/dialog";
import { svaProgress } from "@/components/sva/progress";

type needs = {
  amount_of_money: number;
  created_at: string;
  deadline: string;
  key_visual: string;
  name: string;
  project_id: string;
  status: "wakaba" | "seed" | "tree";
  sponsor_data_id: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  sponsor_data: {
    name: string;
    icon: string;
    target_amount_of_money: number;
    location: {
      lat: number;
      lng: number;
    };
    motivation: string;
  };
  reports: Array<{
    body: string;
    key_visual: string;
    report_id: string;
    title: string;
    created_at: string;
  }>;
  fruits: Array<{
    description: string;
    key_visual: string;
    name: string;
  }>;
  comments: Array<{
    body: string;
    comment_id: string;
    created_at: string;
    user_id: string;
  }>;
  seeds: Array<{
    category_ids: string[];
    created_at: string;
    description: string | null;
    location: unknown;
    seed_id: string;
    sower_id: string;
  }>;
};

function GridDetailInfo({
  data,
  leftDays,
  percentage,
  scrollRef,
}: {
  data: needs;
  leftDays: number;
  percentage: number;
  scrollRef: React.RefObject<HTMLDivElement>;
}): ReactElement {
  const progress = svaProgress();
  const dialog = svaDialog();

  const scrollFruits = (): void => {
    scrollRef?.current?.scrollIntoView();
  };

  return (
    <p.div display="flex" justifyContent="center" w="100dvw">
      <Grid
        gap={4}
        gridTemplateColumns="2fr 1.4fr"
        mdDown={{ gridTemplateColumns: "1fr" }}
        p={4}
        w="1200px"
      >
        <VStack>
          <img alt={data?.name} src={data?.key_visual} width="100%" />
          <Flex direction="column" gap={4}>
            <HStack mt={4}>
              <HStack alignItems="baseline" gap={2}>
                <p.p fontSize={30} fontWeight="bold">
                  {data?.name}
                </p.p>
                <p.span fontSize={10} fontWeight="normal">
                  残り{leftDays}日
                </p.span>
              </HStack>
              <p.div ml="auto">
                <Icon
                  height={data?.status === "tree" ? "2rem" : "1.5rem"}
                  icon={ICON[data?.status]}
                />
              </p.div>
            </HStack>
            <HStack>
              <Icon icon="mdi:star-outline" width={30} />
              <Icon icon="mdi:share-variant" width={30} />
            </HStack>
            <p.p>{data.description}</p.p>
          </Flex>
        </VStack>

        <Flex bg="wkb-neutral.0" direction="column" p={4} rounded="md">
          <HStack mb={4}>
            <Icon icon="bi:geo-alt-fill" />
            <p.span fontSize="md">緯度経度算出住所</p.span>
          </HStack>

          <HStack>
            <p.p fontSize="2xl" fontWeight="bold">
              支援進捗
            </p.p>
            <p.p fontSize="3xl" fontWeight="bold" ml="auto">
              <p.span color="wkb.primary">
                ¥ {data.amount_of_money.toLocaleString()}
              </p.span>
            </p.p>
          </HStack>

          <HStack mb={4}>
            {data.status !== "wakaba" && (
              <p.p fontSize="xs" ml="auto">
                目標金額 ¥
                {data.sponsor_data.target_amount_of_money.toLocaleString()}
              </p.p>
            )}
          </HStack>

          {data.status !== "wakaba" && (
            <Progress.Root
              className={progress.root}
              max={percentage >= 100 ? percentage : 100}
              value={percentage}
            >
              <Progress.Track className={progress.track}>
                <Progress.Range className={progress.range}>
                  {percentage >= 20 && (
                    <Progress.ValueText className={progress.valueText}>
                      {percentage}%
                    </Progress.ValueText>
                  )}
                </Progress.Range>
              </Progress.Track>
            </Progress.Root>
          )}

          <p.div
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.1s",
            }}
            bg="wkb.primary"
            mb={4}
            mt={4}
            onClick={() => {
              scrollFruits();
            }}
            px={2}
            py={4}
            rounded="md"
          >
            <HStack gap={2} justify="center">
              <Icon icon={ICON[data.status]} width="2rem" />
              <p.p color="wkb-neutral.0" fontSize="95%" fontWeight="bold">
                {data.status === "wakaba" && "このWakabaを支援する"}
                {data.status === "seed" && "このSeedを支援する"}
                {data.status === "tree" && "このTreeを支援する"}
              </p.p>
            </HStack>
          </p.div>

          <p.p fontSize="xs" fontWeight="bold" mb={4}>
            以下の意見が集まって生成されました
          </p.p>
          <VStack gap={4} mb={4} w="full">
            {data.seeds.map((s) => (
              <p.div
                key={s.seed_id}
                _even={{ ml: "auto", flexDirection: "row-reverse" }}
                _odd={{ mr: "auto", flexDirection: "row" }}
                alignItems="center"
                bg="wkb-neutral.100"
                display="flex"
                p={2}
                rounded="md"
              >
                <Icon icon="material-symbols:account-circle" width={30} />
                <p.p
                  fontSize="xs"
                  lineClamp={3}
                  maxW={200}
                  overflow="hidden"
                  px={2}
                  textOverflow="ellipsis"
                  w="100%"
                >
                  {s.description}
                </p.p>
              </p.div>
            ))}
          </VStack>

          <Dialog.Root>
            <Dialog.Trigger
              className={dialog.trigger}
              disabled={data.status === "wakaba"}
            >
              <HStack
                _hover={{
                  transform: "scale(1.05)",
                  transition: "transform 0.1s",
                }}
                alignContent="center"
                bg="wkb-neutral.100"
                display="flex"
                justify="center"
                mb={4}
                p={2}
                rounded="md"
              >
                {data.status !== "wakaba" ? (
                  <>
                    <p.img rounded="full" src={data.sponsor_data.icon} w={50} />
                    <VStack alignItems="start" gap={0}>
                      <p.p fontWeight="bold">{data.sponsor_data.name}</p.p>
                      <p.div px={2}>
                        <p.p
                          fontSize="xs"
                          h="100%"
                          lineClamp={3}
                          maxH={100}
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          {data.sponsor_data.motivation}
                        </p.p>
                      </p.div>
                    </VStack>
                  </>
                ) : (
                  <p.p>スポンサー募集中</p.p>
                )}
              </HStack>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop className={dialog.backdrop} />
              <Dialog.Positioner>
                <Dialog.Content className={dialog.content}>
                  <HStack
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.1s",
                    }}
                    alignContent="center"
                    display="flex"
                    justify="center"
                    maxW={1000}
                    minW={300}
                    rounded="md"
                  >
                    <p.img rounded="full" src={data.sponsor_data.icon} w={50} />
                    <VStack alignItems="start" gap={0}>
                      <p.p fontWeight="bold">{data.sponsor_data.name}</p.p>
                      <p.div px={2}>
                        <p.p fontSize="xs">{data.sponsor_data.motivation}</p.p>
                      </p.div>
                    </VStack>
                  </HStack>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>

          <HStack alignItems="center" bg="wkb-neutral.100" p={2} rounded="md">
            <Icon icon="material-symbols:info-outline" width={30} />
            <p.p fontSize="xx-small">
              このプロジェクトは
              <p.span color="wkb.primary" fontWeight="bold">
                ALL or nothing
              </p.span>
              であり、目標金額に満たなかった時は返金し、達した場合にのみプロジェクトの実行とリターンを約束するというものです。
            </p.p>
          </HStack>
        </Flex>
      </Grid>
    </p.div>
  );
}

export const Route = createFileRoute("/_auth/projects/$uuid")({
  component: () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const data: needs = {
      amount_of_money: 200,
      created_at: "2021-09-06T00:00:00Z",
      deadline: "2024-09-24T00:00:00Z",
      key_visual: "https://via.placeholder.com/300x150",
      name: "Project 1",
      project_id: "1",
      sponsor_data_id: "1",
      status: "tree",
      description:
        "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",
      location: { lat: 35.688, lng: 139.69 },
      sponsor_data: {
        name: "DKKI",
        icon: "https://via.placeholder.com/150",
        target_amount_of_money: 1000,
        location: { lat: 35.688, lng: 139.69 },
        motivation:
          "企業さんになぜこのプロジェクトを実行することにしたのかモチベーション､意気込みを書いてもらう場所",
      },
      reports: [
        {
          body: "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",
          key_visual: "https://via.placeholder.com/150",
          report_id: "1",
          title: "タイトル",
          created_at: "2021-09-06T00:00:00Z",
        },
        {
          body: "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",
          key_visual: "https://via.placeholder.com/150",
          report_id: "2",
          title: "title",
          created_at: "2021-09-06T00:00:00Z",
        },
      ],
      fruits: [
        {
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",

          key_visual: "https://via.placeholder.com/300x150",
          name: "name",
        },
        {
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",

          key_visual: "https://via.placeholder.com/300x150",
          name: "name2",
        },
        {
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",

          key_visual: "https://via.placeholder.com/300x150",
          name: "name3",
        },
      ],
      comments: [
        {
          body: "body",
          comment_id: "1",
          created_at: "2021-09-06T00:00:00Z",
          user_id: "1",
        },
      ],
      seeds: [
        {
          category_ids: ["1"],
          created_at: "2021-09-06T00:00:00Z",
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",
          location: { lat: 35.688, lng: 139.69 },
          seed_id: "1",
          sower_id: "1",
        },
        {
          category_ids: ["1"],
          created_at: "2021-09-06T00:00:00Z",
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",

          location: { lat: 35.688, lng: 139.69 },
          seed_id: "2",
          sower_id: "2",
        },
        {
          category_ids: ["1"],
          created_at: "2021-09-06T00:00:00Z",
          description:
            "昔、あるところになかなか子どもが生まれない夫婦がいました。でも、ある時、ようやくかわいらしい男の子が産まれました。れどれ。あら、こぶなんてないじゃないの？」「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ",
          location: { lat: 35.688, lng: 139.69 },
          seed_id: "3",
          sower_id: "3",
        },
      ],
    };

    const leftDays = Math.floor(
      (new Date(data.deadline).getTime() - new Date().getTime()) /
        1000 /
        60 /
        60 /
        24,
    );
    const percentage = Math.floor(
      (data.amount_of_money / data.sponsor_data.target_amount_of_money) * 100,
    );

    return (
      <p.div>
        <GridDetailInfo
          data={data}
          leftDays={leftDays}
          percentage={percentage}
          scrollRef={scrollRef}
        />

        <p.div
          bg="wkb.primary"
          display="flex"
          justifyContent="center"
          w="100dvw"
        >
          <VStack ref={scrollRef} alignItems="center" maxW="100%" w={1200}>
            <p.p
              color="wkb-neutral.0"
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              mt={20}
            >
              支援する
            </p.p>
            <Grid
              gap={4}
              gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              justifyContent="center"
              p={4}
            >
              {data.fruits.map((f, index) => (
                <FruitCard
                  key={f.name}
                  description={f.description}
                  index={index}
                  key_visual={f.key_visual}
                  name={f.name}
                />
              ))}
            </Grid>

            <p.div display="flex" justifyContent="center" mb={10} w="100%">
              <VStack alignItems="center" w={1200}>
                <p.p
                  color="wkb-neutral.0"
                  fontSize="2xl"
                  fontWeight="bold"
                  mb={4}
                  mt={20}
                >
                  レポート
                </p.p>
                {data.reports.map((r) => (
                  <p.div key={r.report_id}>
                    <ReportCard
                      body={r.body}
                      created_at={r.created_at}
                      report_id={r.report_id}
                      title={r.title}
                    />
                  </p.div>
                ))}
              </VStack>
            </p.div>
          </VStack>
        </p.div>
      </p.div>
    );
  },
});
