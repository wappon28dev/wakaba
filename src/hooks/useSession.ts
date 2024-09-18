import { type Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/services/supabase";
import { router } from "@/main";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSession() {
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
      setSession(newSession ?? undefined);
      void router.invalidate();
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return { session };
}
