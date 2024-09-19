import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/_auth/seeds/$uuid")({
  component: () => {
    const { uuid } = Route.useParams();

    return <p.p>Hello /seeds/$uuid! - {uuid}</p.p>;
  },
});
