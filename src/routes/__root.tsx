import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Expanded } from "@/components/panda/Expanded";

import "@/styles/fonts.css";
import "@/styles/global.css";

export const Route = createRootRoute({
  component: () => (
    <Expanded size="screen">
      <Outlet />
    </Expanded>
  ),
});
