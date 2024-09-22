import { Grid, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";

export function ReportCard({
  body,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  title,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  report_id,
}: {
  body: string;
  title: string;
  created_at: string;
  report_id: string;
}): ReactElement {
  // 2000/09/06の形式にしたい
  const date = new Date(created_at);
  return (
    <p.div
      bg="wkb-neutral.0"
      fontSize="sm"
      m={4}
      mdDown={{ minW: "90%" }}
      p={4}
      rounded="md"
    >
      <p.div position="relative">
        <p.span color="wkb-neutral.700" fontSize="xl">
          {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
        </p.span>
      </p.div>
      <Grid>
        <p.span />
        <p.p color="wkb-neutral.700" fontSize="3xl" fontWeight="bold" mb={2}>
          {title}
        </p.p>
        <p.p color="wkb-neutral.700" fontSize="md">
          {body}
        </p.p>
        <VStack>
          <Button
            onClick={() => {
              window.location.href = `/report/${report_id}`;
            }}
          />
        </VStack>
      </Grid>
    </p.div>
  );
}
