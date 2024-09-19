import { type Session } from "@supabase/supabase-js";
import {
  Outlet,
  createRootRouteWithContext,
  ScrollRestoration,
} from "@tanstack/react-router";
import { ErrorScreen } from "@/components/ErrorScreen";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotFoundScreen } from "@/components/NotFound";
import { StyledToast } from "@/components/Toast";
import { Expanded } from "@/components/cva/Expanded";
import { type Nullable } from "@/types/utils";

import "@/styles/global.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource-variable/jetbrains-mono";

export const Route = createRootRouteWithContext<{
  session: Nullable<Session>;
}>()({
  component: () => (
    <Expanded
      basedOn="screen"
      display="grid"
      gridTemplateColumns="100%"
      gridTemplateRows="auto 1fr auto"
      h="unset"
      minH={["100dvh", "100vh"]}
    >
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Header />
      <Outlet />
      <Footer />
      <StyledToast />
    </Expanded>
  ),
  errorComponent: ({ error, info }) => (
    <Expanded basedOn="screen">
      <ErrorScreen componentStack={info?.componentStack} error={error} />
    </Expanded>
  ),
  notFoundComponent: () => (
    <Expanded items="center">
      <NotFoundScreen />
    </Expanded>
  ),
});
