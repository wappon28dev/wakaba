import { Icon } from "@iconify/react";
import { styled as p, HStack, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { IconText } from "@/components/IconText";
import { type Seed } from "@/lib/classes/seed";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";

export function SownSeedInline({ seed }: { seed: Seed }): ReactElement {
  const swrSeedAbout = useSWRImmutable(`seed-${seed.data.seed_id}`, async () =>
    (
      await seed
        .resolveRelations()
        .mapErr(notifyTableErrorInToast("swrSeedAbout"))
    )._unsafeUnwrap(),
  );

  return (
    <VStack
      alignItems="start"
      bg="wkb-neutral.0"
      gap="1"
      p="2"
      rounded="md"
      w="100%"
    >
      <HStack fontSize="sm" justifyContent="space-between" w="100%">
        <p.div
          bg="wkb-brown"
          color="wkb.bg"
          lineClamp="1"
          rounded="lg"
          textAlign="center"
          textOverflow="ellipsis"
          transition="background-color 0.2s"
          px="2"
          py="1"
          fontSize="sm"
        >
          <p.p minH="1lh">
            {match(swrSeedAbout)
              .with(S.Success, ({ data: { category } }) => (
                <p.span fadeIn="5"># {category.data.name}</p.span>
              ))
              .otherwise(() => null)}
          </p.p>
        </p.div>
        <IconText
          icon="uil:calender"
          iconProps={{ height: "1em" }}
          containerProps={{ gap: "1" }}
        >
          {new Date(seed.data.created_at).toLocaleDateString()}
        </IconText>
      </HStack>
      <p.p fontSize="lg" lineClamp="3">
        {seed.data.description}
      </p.p>
    </VStack>
  );
}
