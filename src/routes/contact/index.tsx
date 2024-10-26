import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";

export const Route = createFileRoute("/contact/")({
  component: () => {
    const { uuid } = Route.useParams<{ uuid: string }>();

    return (
      <p.div>
        <p.h1>Contact</p.h1>
        <p.p>Hello /contact/! - {uuid}</p.p>
      </p.div>
    );
  },
});
