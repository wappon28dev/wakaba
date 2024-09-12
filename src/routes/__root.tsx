import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ErrorScreen } from "@/components/ErrorScreen";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotFoundScreen } from "@/components/NotFound";
import { Expanded } from "@/components/panda/Expanded";

import "@/styles/fonts.css";
import "@/styles/global.css";

export const Route = createRootRoute({
  component: () => (
    <Expanded
      display="grid"
      gridTemplateColumns="100%"
      gridTemplateRows="auto 1fr auto"
      size="screen"
    >
      <Header />
      <Outlet />
      <Footer />
    </Expanded>
  ),
  errorComponent: ({ error }) => (
    <Expanded size="screen">
      <ErrorScreen error={error} />
    </Expanded>
  ),
  notFoundComponent: () => (
    <Expanded items="center">
      <NotFoundScreen />
    </Expanded>
  ),
});
