import { createToaster } from "@ark-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
  max: 3,
});

export function handleToasterError(
  caller: string,
  title: string,
  error: Error,
): void {
  toaster.error({
    title,
    description: error.message,
  });

  // eslint-disable-next-line no-console
  console.warn(`[${caller}]: ${title}`, error);
}
