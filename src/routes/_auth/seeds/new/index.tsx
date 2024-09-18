import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/_auth/seeds/new/")({
  component: () => <p.p>Hello /seeds/new/!</p.p>,
});
