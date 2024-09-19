import { Progress } from "@ark-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createFileRoute } from "@tanstack/react-router";
import { Flex, HStack, styled as p, VStack } from "panda/jsx";
import { ICON } from "@/assets/icon";
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
};

export const Route = createFileRoute("/_auth/projects/$uuid")({
  component: () => {
    const progress = svaProgress();

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
          body: "body",
          key_visual: "https://via.placeholder.com/150",
          report_id: "1",
          title: "title",
          created_at: "2021-09-06T00:00:00Z",
        },
      ],
      fruits: [
        {
          description: "description",
          key_visual: "https://via.placeholder.com/150",
          name: "name",
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
    };

    const leftDays = Math.floor(
      (new Date(data.deadline).getTime() - new Date().getTime()) /
        1000 /
        60 /
        60 /
        24,
    );
    const percentage =
      (data.amount_of_money / data.sponsor_data.target_amount_of_money) * 100;

    return (
      <p.div display="flex" justifyContent="center" w="100dvw">
        <p.div
          display="grid"
          gap={4}
          gridTemplateColumns="2fr 1fr"
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
                <p.span color="wkb.primary">¥ {data.amount_of_money}</p.span>
              </p.p>
            </HStack>

            <HStack mb={4}>
              {data.status !== "wakaba" && (
                <p.p fontSize="xs" ml="auto">
                  目標金額 ¥ {data.sponsor_data.target_amount_of_money}
                </p.p>
              )}
            </HStack>

            {data.status !== "wakaba" && (
              <Progress.Root className={progress.root} value={percentage}>
                <Progress.Track className={progress.track}>
                  <Progress.Range className={progress.range}>
                    {percentage >= 20 && (
                      <Progress.ValueText className={progress.valueText} />
                    )}
                  </Progress.Range>
                </Progress.Track>
              </Progress.Root>
            )}

            <p.div bg="wkb.primary" mb={4} mt={4} px={2} py={4} rounded="md">
              <HStack gap={2} justify="center">
                <Icon icon={ICON[data.status]} width="2rem" />
                <p.p color="wkb-neutral.0" fontSize="90%" fontWeight="bold">
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
              {[1, 2, 3].map((i) => (
                <p.div
                  key={i}
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
                    このプロジェクトはALL or nothing
                    であり、目標金額に満たなかった時は返金し、達した場合にのみプロジェクトの実行とリターンを約束するというものです。
                  </p.p>
                </p.div>
              ))}
            </VStack>

            <HStack
              alignContent="center"
              bg="wkb-neutral.100"
              display="flex"
              justify="center"
              mb={4}
              p={4}
              rounded="md"
            >
              {data.status !== "wakaba" ? (
                <>
                  <p.img rounded="full" src={data.sponsor_data.icon} w={50} />
                  <VStack alignItems="start" gap={0}>
                    <p.p fontWeight="bold">{data.sponsor_data.name}</p.p>
                    <p.div px={2}>
                      <p.p fontSize="xs">{data.sponsor_data.motivation}</p.p>
                    </p.div>
                  </VStack>
                </>
              ) : (
                <p.p>スポンサー募集中</p.p>
              )}
            </HStack>

            <HStack alignItems="center" bg="wkb-neutral.100" p={2} rounded="md">
              <Icon icon="material-symbols:info-outline" width={30} />
              <p.span fontSize="xx-small">
                このプロジェクトは
                <p.span color="wkb.primary" fontWeight="bold">
                  ALL or nothing
                </p.span>
                であり、目標金額に満たなかった時は返金し、達した場合にのみプロジェクトの実行とリターンを約束するというものです。
              </p.span>
            </HStack>
          </Flex>
        </p.div>
      </p.div>
    );
  },
});
