import { Grid, styled as p, VStack } from "panda/jsx";
import { useState, type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { ProjectCard } from "@/components/project/Card";
import { ask } from "@/lib/services/ai";
import { S } from "@/lib/utils/patterns";

type Project = {
  category_id: string;
  created_at: string;
  deadline: string;
  description: string;
  key_visual: string | null;
  name: string;
  project_id: string;
  territory_id: string;
} & {
  seed_id: number[];
};

async function askProjectData(): Promise<Project> {
  return await ask<Project>(`
いくつかのカテゴリ分けされたプレーンテキストの意見を渡します｡
複数の意見を解決する魅力的なアイデアを以下の 型に従って一つのデータを返してください。
example:
休憩 静かに読書できる屋外ブックカフェが欲しい
飲食 人工芝の広がる施設でピクニックがしたい
→ 憩いの丘 人工芝の広場にカフェを併設した公園
descriptionにはどんなプロジェクトかどんなことができるか将来の展望を100文字程度で記述
    \`\`\`jsonschema
{
  "type": "object",
  "properties": {
    "category_id": { "type": "string", "enum": ["休憩", "環境", "飲食", "施設", "移動", "その他"] },
    "created_at": { "type": "string", "enum": ["2024-09-22T00:00:00Z"] },
    "deadline": { "type": "string", "enum": ["2024-10-22T00:00:00Z"] },
    "description": { "type": "string" },
    "key_visual": { "type": "null" },
    "name": { "type": "string" },
    "project_id": { "type": "string" },
    "territory_id": { "type": "string","enum": ["1"] },
    "seed_id": {
      "type": "array",
      "items": { "type": "number" }
    }
  },
  "required": [
    "category_id",
    "created_at",
    "deadline",
    "description",
    "key_visual",
    "name",
    "project_id",
    "territory_id",
    "seed_id"
  ],
  "additionalProperties": false
}

飲食 深夜営業の健康的な食事が楽しめるカフェが欲しい
飲食 多国籍料理が楽しめるフードコートが欲しい
その他 地域の人々が集まれるコミュニティスペースが欲しい
飲食 アレルギー対応の専門レストランが欲しい
飲食 深夜営業の健康的な弁当屋が欲しい
施設 地域の特産品を販売する常設マルシェが欲しい
飲食 ビーガン向けの専門レストランが欲しい
飲食 地元の高齢者が運営する昔ながらの食堂が欲しい
施設 地域の芸術家が作品を展示・販売できるギャラリーカフェが欲しい
環境 空き家を活用したコミュニティスペースを増やしてほしい
飲食 地元の食材を使った料理教室が定期的に開かれる場所が欲しい
  \`\`\`
    `).match(
    (res) => res,
    (e) => {
      throw new Error("運勢の取得中にエラーが発生しました", { cause: e });
    },
  );
}

function Asking(): ReactElement {
  const result = useSWRImmutable("fortune", askProjectData);
  return (
    <VStack alignItems="center" w="100%">
      <Button alignSelf="center" variant="outlined">
        {match(result)
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
          .otherwise(() => (
            <p.div>
              <p.div>
                <IconText
                  icon="mdi:cloud-sync"
                  onClick={() => {
                    void result.mutate();
                  }}
                >
                  もう一度 Gemini に聞いてみる
                </IconText>
              </p.div>
            </p.div>
          ))}
      </Button>
      <p.div>
        {match(result)
          .with(S.Success, ({ data }) => (
            <VStack alignItems="center" gap="10">
              <p.ul borderColor="wkb.text/50" borderLeft="3px solid" pl="2">
                {JSON.stringify(data)}
              </p.ul>
              <ProjectCard
                amountOfMoney={0}
                keyVisual="https://placehold.jp/300x150.png"
                location={data.territory_id}
                name={data.name}
                status="wakaba"
              />
            </VStack>
          ))
          .with(S.Error, ({ error }) => {
            // eslint-disable-next-line no-console
            console.error(error);
            return <p.p>運勢の取得中にエラーが発生しました</p.p>;
          })
          .otherwise(() => null)}
      </p.div>
    </VStack>
  );
}

export function GeminiDemo2(): ReactElement {
  const [shouldAsk, setShouldAsk] = useState(false);

  return (
    <Grid gridTemplateColumns="1fr 2fr" w="100%">
      <VStack alignItems="center">
        <p.p>Seeds</p.p>
        {[
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "深夜営業の健康的な食事が楽しめるカフェが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "多国籍料理が楽しめるフードコートが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "その他",
            description: "地域の人々が集まれるコミュニティスペースが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "アレルギー対応の専門レストランが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "深夜営業の健康的な弁当屋が欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "施設",
            description: "地域の特産品を販売する常設マルシェが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "ビーガン向けの専門レストランが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description: "地元の高齢者が運営する昔ながらの食堂が欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "施設",
            description:
              "地域の芸術家が作品を展示・販売できるギャラリーカフェが欲しい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "環境",
            description: "空き家を活用したコミュニティスペースを増やしてほしい",
          },
          {
            createdAt: "2024-09-22T00:00:00Z",
            category: "飲食",
            description:
              "地元の食材を使った料理教室が定期的に開かれる場所が欲しい",
          },
        ].map((seed) => (
          <p.div
            key={seed.description}
            bg="wkb-neutral.0"
            p={4}
            rounded="md"
            w="400px"
          >
            <p.p fontSize="sm" mb={2}>
              {seed.createdAt}
            </p.p>
            <p.p mb={2}>
              <p.span
                bg="wkb.secondary"
                color="wkb-neutral.0"
                p={1}
                rounded="md"
              >
                {seed.category}
              </p.span>
            </p.p>
            <p.p>{seed.description}</p.p>
          </p.div>
        ))}
      </VStack>
      <VStack alignItems="center">
        <p.p>ProjectをSeedsから生成する!</p.p>
        {shouldAsk ? (
          <Asking />
        ) : (
          <Button
            onClick={() => {
              setShouldAsk(true);
            }}
            variant="outlined"
          >
            <IconText icon="mdi:cloud-sync">Gemini に聞いてみる</IconText>
          </Button>
        )}
      </VStack>
    </Grid>
  );
}
