import { type Session } from "@supabase/supabase-js";
import { type UseNavigateResult } from "@tanstack/react-router";
import { ResultAsync } from "neverthrow";
import { match } from "ts-pattern";
import { Sower } from "./sower";
import { Sponsor } from "./sponsor";
import { supabase } from "@/lib/services/supabase";
import { S } from "@/lib/utils/patterns";
import { Table } from "@/lib/utils/table";
import { notifyErrorInToast, toaster } from "@/lib/utils/toast";
import { type UserMetadata } from "@/types/auth";
import { type TablesInsert } from "@/types/supabase.gen";
import {
  type UserId,
  type TableSchemaOf,
  type TableConfig,
  type TableError,
} from "@/types/table";
import { type OmitStrict } from "@/types/utils";

const config = {
  className: "User",
  // NOTE: Public Table に users は存在しない
  tableName: "seeds",
  primaryKeyName: "user_id",
  displayName: "ユーザー",
} as const satisfies TableConfig;

export class User {
  public id: UserId;
  public metadata: UserMetadata;

  constructor(public session: Session) {
    this.metadata = this.session.user.user_metadata as UserMetadata;
    this.id = this.session.user.id as typeof this.id;
  }

  static async signIn(): Promise<void> {
    match(
      await supabase.auth.signInWithPassword({
        email: "user01@example.com",
        password: "password",
      }),
    ).with(S.Error, ({ error }) => {
      notifyErrorInToast("User.signIn", error, "サインインに失敗しました");
    });
  }

  static async signOut(navigate: UseNavigateResult<string>): Promise<void> {
    match(await supabase.auth.signOut()).with(S.Error, ({ error }) => {
      notifyErrorInToast("User.signOut", error, "サインアウトに失敗しました");
    });
    await navigate({ to: "/" });
    toaster.success({
      id: "sign-out",
      title: "正常にサインアウトしました",
      description: "またね～～～ 👋",
    });
  }

  public registerAsASower(
    sowerData: OmitStrict<TablesInsert<"sowers">, "user_id">,
  ): ResultAsync<Sower, TableError> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("sowers")
        .insert({
          user_id: this.id,
          ...sowerData,
        })
        .select()
        .single(),
    )
      .andThen(Table.transform)
      .map((data) => new Sower(data as TableSchemaOf<Sower>))
      .mapErr((error) =>
        Table.transformError(config, "registerAsASower", error),
      );
  }

  public registerAsASponsor(
    sponsorData: OmitStrict<TablesInsert<"sponsors">, "user_id">,
  ): ResultAsync<Sponsor, TableError> {
    return ResultAsync.fromSafePromise(
      supabase
        .from("sponsors")
        .insert({
          user_id: this.id,
          ...sponsorData,
        })
        .select()
        .single(),
    )
      .andThen(Table.transform)
      .map((data) => new Sponsor(data as TableSchemaOf<Sponsor>))
      .mapErr((error) =>
        Table.transformError(config, "registerAsASponsor", error),
      );
  }
}
