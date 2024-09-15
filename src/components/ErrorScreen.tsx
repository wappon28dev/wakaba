import { Icon } from "@iconify/react";
import { HStack, styled as p, VStack } from "panda/jsx";
import { useEffect, useRef, type ReactElement } from "react";
import { IconText } from "./IconText";
import { Button } from "./cva/Button";
import { Expanded } from "./cva/Expanded";
import { type Nullable } from "@/types/utils";

export function ErrorScreen({
  title,
  error,
  componentStack,
}: {
  title?: string;
  error?: unknown;
  componentStack?: Nullable<string>;
}): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ref.current != null) {
        ref.current.style.display = "none";
      }
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Expanded bg="red.50" color="red.500" items="center">
      <VStack position="relative" w="100%">
        <Icon height="3em" icon="mdi:robot-dead" />
        <VStack gap="0">
          <p.p fontSize="1.2rem" fontWeight="bold">
            {title != null ? `${title}中に` : "不明な"}エラーが発生しました！
          </p.p>
          <p.p fontSize="sm" fontWeight="medium">
            コンソールでエラーの詳細を確認してください
          </p.p>
        </VStack>
        <p.code>{String(error)}</p.code>
        <p.code>{componentStack}</p.code>
        {title == null && (
          <HStack>
            <Button
              colorPalette="red"
              onClick={() => {
                window.location.href = "/";
              }}
              variant="outlined"
            >
              <IconText icon="mdi:backburger">ホームに戻る</IconText>
            </Button>
            <Button
              colorPalette="red"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              variant="outlined"
            >
              <IconText icon="mdi:delete-forever-outline">
                設定ファイルを削除
              </IconText>
            </Button>
          </HStack>
        )}
        <p.div
          ref={ref}
          left="50%"
          position="absolute"
          top="50%"
          transform="translate(-50%, -50%)"
          userSelect="none"
        >
          <p.img src="https://i.gyazo.com/ebdf27f6d7df60165b7711e5e44d4388.webp" />
        </p.div>
      </VStack>
    </Expanded>
  );
}
