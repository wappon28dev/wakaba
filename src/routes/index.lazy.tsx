import { createLazyFileRoute } from "@tanstack/react-router";
import { p } from "@/components/panda/_p";

export const Route = createLazyFileRoute("/")({
  component: () => <p.p>へい</p.p>,
});
