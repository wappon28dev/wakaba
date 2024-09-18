import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { VStack } from "panda/jsx";

export const Route = createFileRoute("/debug/")({
  component: () => (
    <VStack
      alignItems="start"
      className={css({ "& > h2": { fontWeight: "bold" } })}
      p="2"
    >
      asdf
    </VStack>
  ),
});
