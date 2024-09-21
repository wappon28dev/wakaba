import { HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Button } from "@/components/cva/Button";

export function ReportCard({
  body,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  key_visual,
  title,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at,
  report_id,
}: {
  body: string;
  key_visual: string;
  title: string;
  created_at: string;
  report_id: string;
}): ReactElement {
  return (
    <p.div
      bg="wkb-neutral.0"
      fontSize="sm"
      m={4}
      mdDown={{ minW: "90%" }}
      minH={300}
      minW={300}
      p={4}
      rounded="md"
      w="20%"
    >
      <p.div position="relative">
        <p.img
          alt="Placeholder"
          h="1/2"
          objectFit="cover"
          rounded="md"
          src={key_visual}
          w="100%"
        />
      </p.div>
      <p.div h="1/2" pt={4}>
        <p.span>
          <HStack gap="-1">{created_at}</HStack>
        </p.span>
        <p.p fontSize="3xl">{title}</p.p>
        <p.p fontSize="md">{body}</p.p>
        <VStack>
          <Button
            onClick={() => {
              window.location.href = `/report/${report_id}`;
            }}
          />
        </VStack>
      </p.div>
    </p.div>
  );
}
