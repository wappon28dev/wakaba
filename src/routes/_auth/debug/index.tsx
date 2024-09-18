import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/_auth/debug/")({
  component: () => <p.div>asdf</p.div>,
});
