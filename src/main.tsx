import { RouterProvider, createRouter } from "@tanstack/react-router";
import { type ReactElement, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { useSession } from "./hooks/useSession";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  context: {
    // ref: https://tanstack.com/router/v1/docs/framework/react/guide/authenticated-routes#authentication-using-react-contexthooks
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    session: null!,
  },
});

function App(): ReactElement {
  const { session } = useSession();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return <RouterProvider context={{ session: session! }} router={router} />;
}

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
