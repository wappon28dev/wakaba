import { type Session } from "@supabase/supabase-js";
import { type UseNavigateResult } from "@tanstack/react-router";
import { match, P } from "ts-pattern";
import { supabase } from "@/lib/services/supabase";
import { notifyErrorInToast, toaster } from "@/lib/utils/toast";
import { type UserMetadata } from "@/types/auth";

export class User {
  public metadata: UserMetadata;
  public id: string;

  constructor(public session: Session) {
    this.metadata = this.session.user.user_metadata as UserMetadata;
    this.id = this.session.user.id;
  }

  static async signIn(): Promise<void> {
    match(
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${document.location.origin}/user/auth`,
        },
      }),
    ).with({ error: P.nonNullable }, ({ error }) => {
      notifyErrorInToast("User.signIn", "サインインに失敗しました", error);
    });
  }

  static async signOut(navigate: UseNavigateResult<string>): Promise<void> {
    match(await supabase.auth.signOut()).with(
      { error: P.nonNullable },
      ({ error }) => {
        notifyErrorInToast("User.signOut", "サインアウトに失敗しました", error);
      },
    );
    await navigate({ to: "/" });
    toaster.success({
      id: "sign-out",
      title: "正常にサインアウトしました",
      description: "またね～～～ 👋",
    });
  }
}
