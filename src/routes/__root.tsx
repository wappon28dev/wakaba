import { type Session } from "@supabase/supabase-js";
import {
  Outlet,
  createRootRouteWithContext,
  ScrollRestoration,
} from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { ErrorScreen } from "@/components/ErrorScreen";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
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
  hasAppReady: boolean;
}>()({
  component: () => {
    const { hasAppReady } = Route.useRouteContext();

    if (!hasAppReady) {
      return (
        <Expanded basedOn="screen" items="center">
          <Loading>
            <p.p>わかばの起動中...</p.p>
          </Loading>
        </Expanded>
      );
    }

    return (
      <Expanded
        basedOn="screen"
        display="grid"
        fadeIn="5"
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
    );
  },
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
