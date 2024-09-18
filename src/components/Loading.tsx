import { VStack } from "panda/jsx";
import { type ReactElement } from "react";
import LottiePlayer from "./LottiePlayer";
import loading from "@/assets/animations/loading.json";

export function Loading({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <VStack>
      <LottiePlayer
        autoplay
        loop
        src={loading}
        style={{
          height: "250px",
          margin: "-50px",
        }}
      />
      {children}
    </VStack>
  );
}
