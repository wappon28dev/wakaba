import { Icon } from "@iconify/react";
import { ResultAsync } from "neverthrow";
import { styled as p, HStack, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { type Project } from "@/lib/classes/project";
import { Pledge } from "@/lib/classes/project/pledge";
import { fetchAddressFromLocation } from "@/lib/services/address";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { notifyErrorInToast } from "@/lib/utils/toast";

export function ProjectCard({ project }: { project: Project }): ReactElement {
  const { name, key_visual } = project.data;
  const key = `project-${project.data.project_id}`;

  const swrAbout = useSWRImmutable(key, async () =>
    (
      await ResultAsync.combine([
        project.resolveRelations(),
        project.resolveReferenced(),
      ])
        .map(([resolved, referenced]) => ({
          resolved,
          referenced,
        }))
        .mapErr(notifyTableErrorInToast("swrProjectAbout"))
    )._unsafeUnwrap(),
  );

  const swrAddr = useSWRImmutable(
    swrAbout.data?.referenced.sponsorData != null ? `${key}-addr` : null,
    async () => {
      const loc = swrAbout.data?.referenced.sponsorData;
      if (loc == null) return undefined;
      const [lon, lat] = loc.data.location.coordinates;

      return (
        await fetchAddressFromLocation({ lat, lon }).mapErr((e) => {
          notifyErrorInToast(
            "swrLocation",
            new Error("Failed to fetch addr", { cause: e }),
            "住所の取得中にエラーが発生しました",
          );
          return e;
        })
      )._unsafeUnwrap();
    },
  );

  return (
    <VStack
      alignItems="start"
      bg="wkb-neutral.0"
      fontSize="sm"
      m={4}
      mdDown={{ minW: "90%" }}
      minH={300}
      minW={600}
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
          src={key_visual ?? ""}
          w="100%"
        />
      </p.div>
      <HStack gap="1">
        {match(swrAddr)
          .with(S.Loading, () => (
            <>
              <Icon icon="svg-spinners:ring-resize" />
              <p.p>住所を取得中...</p.p>
            </>
          ))
          .with(S.Success, ({ data: { Feature } }) => {
            const addr = Feature.at(0)?.Property.AddressElement;
            const referenced = swrAbout.data?.referenced;

            if (referenced == null) return null;
            const addrStr = match(project.calcStatus(referenced))
              .with("wakaba", () => `${addr?.at(2)?.Name}周辺`)
              .otherwise(() => addr?.at(2)?.Name ?? addr?.at(3)?.Name ?? "");
            return (
              <>
                <Icon icon="bi:geo-alt-fill" />
                <p.p>{addrStr}</p.p>
              </>
            );
          })
          .with(S.Error, ({ error }) => {
            notifyErrorInToast(
              "swrLocation",
              new Error(error as string),
              "住所の取得中にエラーが発生しました",
            );
            return (
              <p.p color="wkb.secondary">
                住所の取得中にエラーが発生しました
              </p.p>
            );
          })
          .otherwise(() => null)}
      </HStack>
      <p.p flex="1" fontSize="2xl" minH="3em">
        {name}
      </p.p>
      <p.p fontSize="md">
        現在金額 ￥
        {match(swrAbout)
          .with(S.Success, ({ data: { referenced } }) =>
            Pledge.calcTotalAmountOfMoney(referenced.pledges),
          )
          .otherwise(() => "---")}
      </p.p>
      <HStack justifyContent="space-between" w="100%">
        <HStack>
          <Icon height="1.5em" icon="mdi:star-outline" />
          <Icon height="1.5em" icon="mdi:share-variant" />
        </HStack>
        <p.div alignItems="baseline" ml="auto">
          {match(swrAbout)
            .with(S.Success, ({ data: { referenced } }) => {
              const status = project.calcStatus(referenced);
              return (
                <Icon
                  height={status === "hana" ? "2rem" : "1.5rem"}
                  icon={ICON[status]}
                />
              );
            })
            .otherwise(() => null)}
        </p.div>
      </HStack>
    </VStack>
  );
}
