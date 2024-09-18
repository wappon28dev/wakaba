import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useEffect, type ReactElement } from "react";
import { Loading } from "@/components/Loading";
import { Expanded } from "@/components/cva/Expanded";
import { useSession } from "@/hooks/useSession";
import { toaster } from "@/lib/utils/toast";

export const Route = createFileRoute("/user/auth")({
  component: () => <Page />,
});

function Page(): ReactElement {
  const { isLogged } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      void navigate({ to: "/" }).then(() => {
        toaster.success({
          title: "正常にログインしました",
        });
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
