import { createToaster } from "@ark-ui/react";
import { type Nullable } from "@/types/utils";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
  max: 3,
});

export function notifyErrorInToast(
  caller: string,
  error: Error,
  title: string,
  hint?: Nullable<string>,
): void {
  toaster.error({
    id: `handleToasterError-${title}`,
    title,
    description: hint,
  });

  // eslint-disable-next-line no-console
  console.error(`[${caller}]: ${title}`, error, error.cause);
}
