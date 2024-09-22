import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { VStack, styled as p } from "panda/jsx"; // NOTE: この行のスニペット: `pd` → Tab
// import { PopoverSample } from "./-components/CheckBox";
// import { GeminiDemo } from "./-components/GeminiTest";
import { useEffect } from "react";
import { GeminiDemo2 } from "./-components/GeminiTest2";
import { fetchAddressFromLocation } from "@/lib/services/address";
// import { Logo, LogoComposite } from "@/components/Logo";

export const Route = createFileRoute("/demo/")({
  component: () => {
    useEffect(() => {
      void fetchAddressFromLocation({ lat: 35.681236, lon: 139.767125 }).then(
        (res) => {
          // eslint-disable-next-line no-console
          console.log(res);
        },
      );
    }, []);

    return (
      <VStack
        alignItems="start"
        className={css({ "& > h2": { fontWeight: "bold" } })}
        p="2"
      >
        {/* <p.h2>
        Ark UI + Atomic Slot Recipe (<p.code>sva</p.code>) demo
      </p.h2>
      <PopoverSample />
      <p.h2>Logo</p.h2>
      <HStack>
        <p.p>シンボルロゴ</p.p>
        <Logo variant="sym" />
      </HStack>
      <HStack>
        <p.p>タイトルロゴ</p.p>
        <Logo variant="title" />
      </HStack>
      <HStack>
        <p.p>複合 (4:1) ロゴ</p.p>
        <LogoComposite />
      </HStack> */}
        <p.h2>Gemini API Demo</p.h2>
        {/* <GeminiDemo /> */}
        <GeminiDemo2 />
      </VStack>
    );
  },
});
