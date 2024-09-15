import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/")({
  component: () => <p.p>Hello! </p.p>,
});
