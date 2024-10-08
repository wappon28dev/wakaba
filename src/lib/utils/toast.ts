import { createToaster } from "@ark-ui/react";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
  max: 3,
});

export function notifyErrorInToast(
  caller: string,
  title: string,
  error: Error,
): void {
  toaster.error({
    id: `handleToasterError-${title}`,
    title,
    description: error.message,
  });

  // eslint-disable-next-line no-console
  console.warn(`[${caller}]: ${title}`, error);
}
