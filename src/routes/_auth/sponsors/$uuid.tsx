import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/_auth/sponsors/$uuid")({
  component: () => {
    const { uuid } = Route.useParams();

    return <p.p>Hello /sponsors/$uuid! - {uuid}</p.p>;
  },
});
