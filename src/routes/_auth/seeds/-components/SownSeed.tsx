import { Icon } from "@iconify/react";
import { styled as p, HStack } from "panda/jsx";
import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { IconText } from "@/components/IconText";
import { type Seed } from "@/lib/classes/seed";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";

export function SownSeed({ seed }: { seed: Seed }): ReactElement {
  const swrSeedAbout = useSWRImmutable(`seed-${seed.data.seed_id}`, async () =>
    (
      await seed
        .resolveRelation()
        .mapErr(notifyTableErrorInToast("swrSeedAbout"))
    )._unsafeUnwrap(),
  );

  return (
    <p.div
      alignItems="start"
      bg="wkb-neutral.0"
      display="grid"
      gap="2"
      gridRow="span 3"
      gridTemplateRows="subgrid"
      p="4"
      rounded="md"
    >
      <HStack fontSize="sm" justifyContent="space-between" w="100%">
        <IconText icon="uil:calender" iconProps={{ height: "2em" }}>
          {new Date(seed.data.created_at).toLocaleDateString()}
        </IconText>
        <Icon height="2em" icon={ICON.seed} />
      </HStack>
      <p.div
        bg="wkb-brown"
        color="wkb.bg"
        lineClamp="1"
        py="2"
        rounded="lg"
        textAlign="center"
        textOverflow="ellipsis"
        transition="background-color 0.2s"
        w="5em"
      >
        <p.p minH="1lh">
          {match(swrSeedAbout)
            .with(S.Success, ({ data: { category } }) => (
              <p.span fadeIn="5"># {category.data.name}</p.span>
            ))
            .otherwise(() => null)}
        </p.p>
      </p.div>
      <p.p fontSize="lg" lineClamp="3">
        {seed.data.description}
      </p.p>
    </p.div>
  );
}
