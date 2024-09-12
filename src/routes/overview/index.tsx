import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/overview/")({
  component: () => <p.p>Hello /overview/!</p.p>,
});
