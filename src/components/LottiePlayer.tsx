import { Player, type PlayerEvent } from "@lottiefiles/react-lottie-player";
import { type AnimationItem } from "lottie-web";
import { styled as p } from "panda/jsx";
import { type ComponentProps, useState, type ReactElement } from "react";

export default function LottiePlayer({
  reverseLoop,
  ...props
}: {
  reverseLoop?: boolean;
} & ComponentProps<typeof Player>): ReactElement {
  const [lottieState, setLottieState] = useState<AnimationItem>();

  let isForward = true;
  const _reverseLoop = reverseLoop ?? false;

  const eventHandler = (e: PlayerEvent): void => {
    if (e === "loop" && _reverseLoop) {
      isForward = !isForward;
      lottieState?.setDirection(isForward ? 1 : -1);
      const startFrame = isForward ? 0 : lottieState?.totalFrames ?? 0;
      lottieState?.goToAndPlay(startFrame, true);
    }
  };

  return (
    <p.div h="100%" overflow="hidden" w="auto">
      <Player
        lottieRef={(instance) => {
          setLottieState(instance);
        }}
        onEvent={eventHandler}
        style={{
          height: "100%",
        }}
        {...props}
      />
    </p.div>
  );
}
