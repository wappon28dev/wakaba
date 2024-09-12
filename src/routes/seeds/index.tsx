import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/seeds/")({
  component: () => <p.p>Hello /seeds/!</p.p>,
});
