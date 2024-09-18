import { type Session } from "@supabase/supabase-js";
import { match, P } from "ts-pattern";
import { supabase } from "@/lib/services/supabase";
import { handleToasterError } from "@/lib/utils/toast";
import { type UserMetadata } from "@/types/auth";

export class User {
  constructor(public session: Session) {}

  public metadata = this.session.user.user_metadata as UserMetadata;
  public id = this.session.user.id;

  static async signIn(): Promise<void> {
    match(
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${document.location.origin}/user/auth`,
        },
      }),
    ).with({ error: P.nonNullable }, ({ error }) => {
      handleToasterError("User.signIn", "サインインに失敗しました", error);
    });
  }

  static async signOut(): Promise<void> {
    match(await supabase.auth.signOut()).with(
      { error: P.nonNullable },
      ({ error }) => {
        handleToasterError("User.signOut", "サインアウトに失敗しました", error);
      },
    );
  }
}
