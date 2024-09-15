import { createFileRoute } from "@tanstack/react-router";
import { LogoComposite } from "@/components/Logo";

export const Route = createFileRoute("/")({
  component: () => <LogoComposite />,
});
