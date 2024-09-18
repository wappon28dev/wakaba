import { css } from "panda/css";
import { VStack, styled as p } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";
import { useAuth } from "@/hooks/useAuth";

export function Auth(): ReactElement {
  const { session, signIn, isLogged } = useAuth();

  return (
    <VStack
      alignItems="start"
      className={css({
        "& h3": {
          fontWeight: "bold",
          fontSize: "sm",
        },
      })}
    >
      <Button
        onClick={() => {
          void signIn();
        }}
        variant="outlined"
      >
        Sign in
      </Button>
      <p.h3>ログイン状態</p.h3>
      <p.p>{isLogged ? "ログイン中" : "未ログイン"}</p.p>
      <p.code>{JSON.stringify(session)}</p.code>
      <p.h3>Supabase との通信確認</p.h3>
    </VStack>
  );
}
