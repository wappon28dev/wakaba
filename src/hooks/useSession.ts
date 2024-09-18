import { type Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/services/supabase";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSession() {
  const [session, setSession] = useState<Session>();
  const isLogged = session != null;

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, _session) => {
      setSession(_session ?? undefined);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return { session, isLogged };
}
