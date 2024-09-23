import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { styled as p } from "panda/jsx";
import { useEffect, type ReactElement } from "react";
import { Loading } from "@/components/Loading";
import { Expanded } from "@/components/cva/Expanded";
import { $redirectTo } from "@/lib/stores/redirect";
import { toaster } from "@/lib/utils/toast";

export const Route = createFileRoute("/user/auth")({
  component: () => <Page />,
});

function Page(): ReactElement {
  const { session, hasAppReady } = Route.useRouteContext();
  const navigate = useNavigate();
  const [redirectTo, setRedirectTo] = useAtom($redirectTo);

  useEffect(() => {
    if (hasAppReady && session != null && redirectTo != null) {
      void navigate({ to: redirectTo }).then(() => {
        toaster.success({
          id: "login-success",
          title: "正常にログインしました",
          description:
            redirectTo !== "/" ? `${redirectTo} へ遷移しました` : undefined,
          duration: 5000,
        });
        setRedirectTo(undefined);
      });
    }
  }, [redirectTo]);

  return (
    <Expanded items="center">
      <Loading>
        <p.p>ログイン処理中...</p.p>
      </Loading>
    </Expanded>
  );
}
