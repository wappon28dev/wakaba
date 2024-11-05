import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { VStack, styled as p } from "panda/jsx";
import { ProjectCreation } from "./-components/ProjectCreation";

export const Route = createFileRoute("/demo/")({
  component: () => (
    <VStack
      alignItems="start"
      className={css({ "& > h2": { fontWeight: "bold" } })}
      p="2"
    >
      <p.h2>Gemini API Demo</p.h2>
      <ProjectCreation />
    </VStack>
  ),
});
