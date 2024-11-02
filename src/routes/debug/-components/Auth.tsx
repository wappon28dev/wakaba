import { VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";
import { useAuth } from "@/hooks/useAuth";

export function Auth(): ReactElement {
  const { signIn } = useAuth();

  return (
    <VStack alignItems="start">
      <Button
        onClick={() => {
          void signIn();
        }}
        variant="outlined"
      >
        Sign in
      </Button>
    </VStack>
  );
}
