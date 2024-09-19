import { Icon } from "@iconify/react";
import { type Session } from "@supabase/supabase-js";
import { createFileRoute } from "@tanstack/react-router";
import { useSetAtom } from "jotai";
import { styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { z } from "zod";
import { IconText } from "@/components/IconText";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { useSession } from "@/hooks/useSession";
import { User } from "@/lib/classes/user";
import { $redirectTo } from "@/lib/stores/redirect";

export const Route = createFileRoute("/user/")({
  validateSearch: (s) =>
    z
      .object({
        redirectTo: z.string().optional(),
      })
      .parse(s),
  component: () => {
    const { session } = useSession();

    return session != null ? (
      <Authenticated session={session} />
    ) : (
      <NotAuthenticated />
    );
  },
});

function Authenticated({ session }: { session: Session }): ReactElement {
  const { metadata } = new User(session);

  return (
    <Expanded items="center">
      <VStack>
        <p.p>ログインしました！</p.p>
        <p.p>{metadata.name}</p.p>
      </VStack>
    </Expanded>
  );
}

function NotAuthenticated(): ReactElement {
  const { redirectTo } = Route.useSearch();
  const setRedirectTo = useSetAtom($redirectTo);

  return (
    <Expanded items="center">
      <VStack>
        <Icon height="3em" icon="mdi:human-greeting" />
        <p.p>まずはログインしてみましょう！</p.p>
        <Button
          onClick={() => {
            setRedirectTo(redirectTo);
            void User.signIn();
          }}
          variant="filled"
        >
          <IconText icon="bi:google">Google でログイン</IconText>
        </Button>
      </VStack>
    </Expanded>
  );
}
