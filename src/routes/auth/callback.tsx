import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, type ReactElement } from "react";
import { Loading } from "@/components/Loading";
import { toaster } from "@/components/Toast";
import { Expanded } from "@/components/cva/Expanded";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/auth/callback")({
  component: () => <Page />,
});

function Page(): ReactElement {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      void navigate({ to: "/" });
      toaster.success({
        title: "ログインしました",
      });
    }
  }, [isLogged]);

  return (
    <Expanded items="center">
      <Loading>
        <p.p>ログイン処理中...</p.p>
      </Loading>
    </Expanded>
  );
}
