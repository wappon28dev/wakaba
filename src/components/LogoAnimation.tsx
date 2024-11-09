import { VStack } from "panda/jsx";
import { type ReactElement } from "react";
import LottiePlayer from "./LottiePlayer";
import logoAnimation from "@/assets/animations/logoAnimation.json";

export function LogoAnimation(): ReactElement {
  return (
    <VStack>
      <LottiePlayer
        autoplay
        speed={0.7}
        src={logoAnimation}
        stopAtEnd
        style={{
          height: "40dvh",
          maxWidth: "70dvw",
        }}
      />
    </VStack>
  );
}
