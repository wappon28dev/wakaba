import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/debug/")({
  component: () => <p.div>Hello /debug/!</p.div>,
});
