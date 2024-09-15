import { styled as p, VStack } from "panda/jsx";
import { useState, type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { ask } from "@/lib/services/ai";
import { S } from "@/lib/utils/patterns";

type FortuneRes = {
  fortune: "大吉" | "中吉" | "小吉" | "吉" | "凶" | "大凶";
  luckyItems: string[];
};

async function askFortuneAndLuckyItems(): Promise<FortuneRes> {
  return await ask<FortuneRes>(`
    今日のかに座の運勢を次の JSON スキーマに従って返してください.
    \`\`\`jsonschema
    {
      "type": "object",
      "properties": {
        "fortune": {
          "type": "string",
          "enum": ["大吉", "中吉", "小吉", "吉", "凶", "大凶"]
        },
        "luckyItems": {
          "type": "array",
          "items": { "type": "string" },
          "minItems": 3,
        },
      },
      "required": ["fortune", "luckyItems"],
      "additionalProperties": false,
    }
    \`\`\`
    `).match(
    (res) => res,
    (e) => {
      throw new Error("運勢の取得中にエラーが発生しました", { cause: e });
    },
  );
}

function Asking(): ReactElement {
  const result = useSWRImmutable("fortune", askFortuneAndLuckyItems);
  return (
    <VStack alignItems="start">
      <Button variant="outlined">
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
            <IconText
              icon="mdi:cloud-sync"
              onClick={() => {
                void result.mutate();
              }}
            >
              もう一度 Gemini に聞いてみる
            </IconText>
          ))}
      </Button>
      <p.div borderColor="wkb.text/50" borderLeft="3px solid" pl="2">
        {match(result)
          .with(S.Success, ({ data }) => (
            <VStack alignItems="start" gap="0">
              <p.p>運勢: {data.fortune}</p.p>
              <p.p>ラッキーアイテム</p.p>
              <p.ul>
                {data.luckyItems.map((item) => (
                  <p.li key={item}>{item}</p.li>
                ))}
              </p.ul>
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

export function GeminiDemo(): ReactElement {
  const [shouldAsk, setShouldAsk] = useState(false);

  return (
    <VStack alignItems="start">
      <p.p>今日のカニ座 🦀 の運勢とラッキーアイテム！</p.p>
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
  );
}
