import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/projects/")({
  component: () => <p.p>Hello /projects/!</p.p>,
});
