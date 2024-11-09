import { Player, type PlayerEvent } from "@lottiefiles/react-lottie-player";
import { type AnimationItem } from "lottie-web";
import { styled as p } from "panda/jsx";
import {
  type ComponentProps,
  useState,
  useEffect,
  type ReactElement,
} from "react";

export default function LottiePlayer({
  reverseLoop,
  stopAtEnd,
  ...props
}: {
  reverseLoop?: boolean;
  stopAtEnd?: boolean;
} & ComponentProps<typeof Player>): ReactElement {
  const [lottieState, setLottieState] = useState<AnimationItem>();

  let isForward = true;
  const _reverseLoop = reverseLoop ?? false;
  const _stopAtEnd = stopAtEnd ?? false;

  useEffect(() => {
    if (_stopAtEnd && lottieState) {
      const lastFrame = lottieState.totalFrames - 1;

      lottieState.addEventListener("complete", () => {
        lottieState.goToAndStop(lastFrame, true);
      });
    }
  }, [lottieState, _stopAtEnd]);

  const eventHandler = (e: PlayerEvent): void => {
    if (e === "loop" && _reverseLoop) {
      isForward = !isForward;
      lottieState?.setDirection(isForward ? 1 : -1);
      const startFrame = isForward ? 0 : (lottieState?.totalFrames ?? 0) - 1;
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
        loop={!_stopAtEnd}
        style={{
          height: "100%",
        }}
        {...props}
      />
    </p.div>
  );
}
