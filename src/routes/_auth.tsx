import { createFileRoute, redirect } from "@tanstack/react-router";
import { User } from "@/lib/classes/user";
import { toaster } from "@/lib/utils/toast";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context, location }) => {
    if (context.session == null) {
      toaster.create({
        id: "login-required",
        title: "ログインしてください",
        description: "このページにアクセスするにはログインが必要です",
        type: "error",
      });

      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw redirect({
        to: "/user",
        search: {
          redirectTo: location.href,
        },
      });
    }

    return {
      session: context.session,
      user: new User(context.session),
    };
  },
});
