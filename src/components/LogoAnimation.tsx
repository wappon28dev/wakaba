import { VStack } from "panda/jsx";
import { type ReactElement } from "react";
import LottiePlayer from "./LottiePlayer";
import loading from "@/assets/animations/loading.json";

export function LogoAnimation(): ReactElement {
  return (
    <VStack>
      <LottiePlayer
        autoplay
        src={loading}
        style={{
          height: "250px",
          margin: "-50px",
        }}
      />
    </VStack>
  );
}
