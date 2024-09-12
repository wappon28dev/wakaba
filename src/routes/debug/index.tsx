import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/debug/")({
  component: () => <div>Hello /debug/!</div>,
});
