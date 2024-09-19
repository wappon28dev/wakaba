import { type Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { match, P } from "ts-pattern";
import { supabase } from "@/lib/services/supabase";
import { router } from "@/main";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSession() {
  const [hasAuthMounted, setHasAuthMounted] = useState(false);
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    void supabase.auth.getSession().then((s) => {
      match(s).with({ data: P.nonNullable }, ({ data }) => {
        setSession(data.session ?? undefined);
        setHasAuthMounted(true);
        void router.invalidate();
      });
    });
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      setSession(newSession ?? undefined);
      void router.invalidate();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return { hasAuthMounted, session };
}
