import { css } from "panda/css";
import { Flex, HStack, styled as p, VStack } from "panda/jsx";
import { type ComponentProps, useState, type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { ProjectCard } from "@/components/project/Card";
import { ask } from "@/lib/services/ai";
import { fetchGeneratedImage } from "@/lib/services/image";
import { S } from "@/lib/utils/patterns";
import { notifyErrorInToast, toaster } from "@/lib/utils/toast";

type Seed = {
  category: string;
  description: string;
};

type Response = {
  category_id: string;
  description: string;
  name: string;
  prompt: string;
};

const SEEDS = [
  {
    category: "飲食",
    description: "深夜営業の健康的な食事が楽しめるカフェが欲しい",
  },
  {
    category: "飲食",
    description: "多国籍料理が楽しめるフードコートが欲しい",
  },
  {
    category: "その他",
    description: "地域の人々が集まれるコミュニティスペースが欲しい",
  },
  {
    category: "飲食",
    description: "アレルギー対応の専門レストランが欲しい",
  },
  {
    category: "飲食",
    description: "深夜営業の健康的な弁当屋が欲しい",
  },
  {
    category: "施設",
    description: "地域の特産品を販売する常設マルシェが欲しい",
  },
  {
    category: "飲食",
    description: "ビーガン向けの専門レストランが欲しい",
  },
  {
    category: "飲食",
    description: "地元の高齢者が運営する昔ながらの食堂が欲しい",
  },
  {
    category: "施設",
    description: "地域の芸術家が作品を展示・販売できるギャラリーカフェが欲しい",
  },
  {
    category: "環境",
    description: "空き家を活用したコミュニティスペースを増やしてほしい",
  },
  {
    category: "飲食",
    description: "地元の食材を使った料理教室が定期的に開かれる場所が欲しい",
  },
] as const satisfies Seed[];

const PROMPT = `
次のような意見があります. (カッコ内は category_id)

${SEEDS.map((seed) => `・${seed.description} (${seed.category})`).join("\n")}

これら複数の意見を解決する魅力的なアイデアを考え, 次の JSON Schema に従って返してください.

\`\`\`jsonschema
{
  "type": "object",
  "properties": {
    "category_id": {
      "type": "string",
      "enum": ${JSON.stringify(SEEDS.map((seed) => seed.category))},
    },
    "description": {
      "type": "string",
      "description": "どんなプロジェクトかどんなことができるか将来の展望を100文字程度で記述"
    },
    "name": { "type": "string" },
    "prompt": {
      "type": "string",
      "description": "できるだけリアルに写実的に画像生成させるプロンプト. 英数字のみで記述し, 改行無し, カンマ区切りで返す."
    }
  },
  "required": ["category_id", "description", "name", "prompt"],
  "additionalProperties": false
}
\`\`\`
`.trim();

const Textarea = p("textarea", {
  base: {
    border: "1px solid",
    fontFamily: "mono",
    fontSize: "sm",
    overflow: "auto",
    resize: "none",
    p: "2",
    rounded: "md",
    w: "100%",
    whiteSpace: "pre-wrap",
  },
});

function Asking({
  onProjectFetched,
  onImageFetched,
}: {
  onProjectFetched: (project: Response) => void;
  onImageFetched: (imageUrl: string) => void;
}): ReactElement {
  const swrProject = useSWRImmutable("project", async () => {
    const ID = "project-creation";

    function handler<T>(error: T): T {
      toaster.remove(ID);
      notifyErrorInToast(
        "swrProject",
        new Error("Failed to create project", { cause: error }),
        "プロジェクトの生成に失敗しました",
      );

      return error;
    }

    toaster.loading({
      id: ID,
      title: "プロジェクトを生成中... (1/2)",
      description: "数十秒ほど時間が掛かる場合があります ⌚",
    });

    const project = (await ask<Response>(PROMPT))
      .mapErr(handler)
      ._unsafeUnwrap();
    onProjectFetched(project);

    toaster.loading({
      id: ID,
      title: "画像を生成中... (2/2)",
      description: "数十秒ほど時間が掛かる場合があります ⌚",
    });

    const imageUrl = (
      await fetchGeneratedImage(project.prompt, {
        height: 150,
        width: 300,
      })
    )
      .mapErr(handler)
      ._unsafeUnwrap();

    toaster.update(ID, {
      type: "success",
      title: "画像の生成完了",
      description: "キービジュアル画像を生成しました 🎉",
    });

    onImageFetched(imageUrl);

    return {};
  });

  return (
    <VStack alignItems="center" w="100%">
      <Button alignSelf="center" variant="filled">
        {match(swrProject)
          .with(S.Loading, () => (
            <IconText icon="svg-spinners:ring-resize">
              Gemini から取得中...
            </IconText>
          ))
          .with(S.Validating, () => (
            <IconText icon="svg-spinners:ring-resize">
              Gemini から再取得中...
            </IconText>
          ))
          .with(S.Success, () => (
            <p.div>
              <p.div>
                <IconText
                  icon="mdi:cloud-sync"
                  onClick={() => {
                    void swrProject.mutate();
                  }}
                >
                  もう一度 Gemini に聞いてみる
                </IconText>
              </p.div>
            </p.div>
          ))
          .otherwise(() => (
            <p.div>
              <p.div>
                <IconText
                  icon="mdi:cloud-sync"
                  onClick={() => {
                    void swrProject.mutate();
                  }}
                >
                  もう一度 Gemini に聞いてみる
                </IconText>
              </p.div>
            </p.div>
          ))}
      </Button>
      <p.div />
    </VStack>
  );
}

function SeedCard({ seed }: { seed: Seed }): ReactElement {
  return (
    <p.div bg="wkb-neutral.0" p={4} rounded="md" w="100%">
      <p.p fontSize="sm" mb={2}>
        {new Date().toLocaleDateString()}
      </p.p>
      <p.p mb={2}>
        <p.span bg="wkb.secondary" color="wkb-neutral.0" p={1} rounded="md">
          {seed.category}
        </p.span>
      </p.p>
      <p.p>{seed.description}</p.p>
    </p.div>
  );
}

export function ProjectCreation(): ReactElement {
  const [prompt, setPrompt] = useState(PROMPT);

  const [project, setProject] = useState<Response>();
  const [imageUrl, setImageUrl] = useState<string>();

  const [needAsk, setNeedAsk] = useState(false);

  const projectCard = {
    amount_of_money: 0,
    key_visual: imageUrl ?? "https://placehold.jp/300x150.png",
    location: { lon: 136.886326, lat: 35.172757 },
    name: project?.name ?? "",
    status: "wakaba",
  } satisfies ComponentProps<typeof ProjectCard>;

  return (
    <Flex
      className={[
        "content",
        css({
          "& h3": { fontWeight: "semibold", w: "100%", textAlign: "start" },
        }),
      ].join(" ")}
      flexDir={{ base: "row", lgDown: "column" }}
      gap="2"
      mx="auto"
      w="100%"
    >
      <VStack flex="1">
        <p.h3>たね</p.h3>
        <VStack
          maxH={{
            base: "calc(100vh - 150px - var(--spacing-5))",
            lgDown: "300px",
          }}
          mb="5"
          overflow="auto"
          w="100%"
        >
          {SEEDS.map((seed) => (
            <SeedCard key={seed.description} seed={seed} />
          ))}
        </VStack>
      </VStack>
      <VStack flex="2" h="100%" maxH="calc(100vh - 150px)" w="100%">
        <p.h3>プロンプト</p.h3>
        <Textarea
          className={css({
            "&[data-is-modified='true']": {
              bgColor: "wkb.secondary/10",
              outlineColor: "wkb.secondary",
            },
          })}
          data-is-modified={prompt !== PROMPT}
          minH="250px"
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          value={prompt}
        />
        {needAsk ? (
          <Asking onImageFetched={setImageUrl} onProjectFetched={setProject} />
        ) : (
          <Button
            onClick={() => {
              setNeedAsk(true);
            }}
            variant="filled"
          >
            <IconText icon="mdi:cloud-sync">
              Gemini でたねからプロジェクトを生成
            </IconText>
          </Button>
        )}
        <HStack
          alignItems="start"
          mdDown={{ flexDir: "column-reverse" }}
          w="100%"
        >
          <VStack w="min-content">
            <p.h3>プロジェクト</p.h3>
            <ProjectCard {...projectCard} />
          </VStack>
          <VStack flex="1" w="100%">
            <p.h3>出力</p.h3>
            <Textarea
              h="380px"
              readOnly
              value={JSON.stringify(project, null, 2)}
            />
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
}
