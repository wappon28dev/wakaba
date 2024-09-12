import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { Expanded } from "@/components/panda/Expanded";

export const Route = createFileRoute("/")({
  component: () => (
    <Expanded alignItems="start">
      <p.div>Hello</p.div>
    </Expanded>
  ),
});
