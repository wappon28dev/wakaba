import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/_auth/projects/$uuid")({
  component: () => {
    const { uuid } = Route.useParams();

    return <p.p>Hello /projects/$uuid! - {uuid}</p.p>;
  },
});
