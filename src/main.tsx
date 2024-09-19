import { RouterProvider, createRouter } from "@tanstack/react-router";
import { type ReactElement, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { useSession } from "./hooks/useSession";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {
    session: null,
    hasAppReady: false,
  },
});

function App(): ReactElement {
  const { session, hasAuthMounted } = useSession();
  const hasAppReady = hasAuthMounted;

  return <RouterProvider context={{ session, hasAppReady }} router={router} />;
}

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
    <App />
  </StrictMode>,
);
