import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { styled as p, VStack } from "panda/jsx";
import { Auth } from "./-components/Auth";

export const Route = createFileRoute("/debug/")({
  component: () => (
    <VStack
      alignItems="start"
      className={css({ "& > h2": { fontWeight: "bold" } })}
      p="2"
    >
      <p.h2>Google アカウントログイン</p.h2>
      <Auth />
    </VStack>
  ),
});
