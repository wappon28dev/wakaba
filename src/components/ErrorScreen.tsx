import { Icon } from "@iconify/react";
import { HStack, styled as p, VStack } from "panda/jsx";
import { useEffect, useRef, type ReactElement } from "react";
import { Expanded } from "./panda/Expanded";

export function ErrorScreen({
  title,
  error,
}: {
  title?: string;
  error?: unknown;
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
        <p.p fontSize="1.2rem" fontWeight="bold">
          {title != null ? `${title}中に` : "不明な"}エラーが発生しました
        </p.p>
        <p.code>{String(error)}</p.code>
        {title == null && (
          <HStack>
            <p.button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <p.p>ホームに戻る</p.p>
            </p.button>
            <p.button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              <p.p>設定ファイルを削除</p.p>
            </p.button>
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
