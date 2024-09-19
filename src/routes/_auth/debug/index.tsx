import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { VStack } from "panda/jsx";

export const Route = createFileRoute("/_auth/debug/")({
  component: () => <p.div>asdf</p.div>,
});
