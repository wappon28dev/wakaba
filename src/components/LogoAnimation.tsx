import { VStack } from "panda/jsx";
import { type ReactElement } from "react";
import LottiePlayer from "./LottiePlayer";
import logoAnimation from "@/assets/animations/logoAnimation.json";

export function LogoAnimation(): ReactElement {
  return (
    <VStack>
      <LottiePlayer
        autoplay
        stopAtEnd={true}
        src={logoAnimation}
        style={{
          height: "40dvh",
          maxWidth: "70dvw",
        }}
        speed={0.7}
      />
    </VStack>
  );
}
