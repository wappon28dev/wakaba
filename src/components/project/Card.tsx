import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { ResultAsync } from "neverthrow";
import { css } from "panda/css";
import { styled as p, HStack, Grid } from "panda/jsx";
import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { IconText } from "@/components/IconText";
import { Project } from "@/lib/classes/project";
import { Pledge } from "@/lib/classes/project/pledge";
import { addr2str, fetchAddressFromLocation } from "@/lib/services/address";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { notifyErrorInToast } from "@/lib/utils/toast";

export function ProjectCard({ project }: { project: Project }): ReactElement {
  const { name, key_visual } = project.data;
  const key = `project-${project.data.project_id}`;

  const swrProjectAbout = useSWRImmutable(key, async () =>
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
    swrProjectAbout.data?.referenced.sponsorData != null
      ? `project-${key}-addr`
      : null,
    async () => {
      const loc = swrProjectAbout.data?.referenced.sponsorData;
      if (loc == null) return undefined;
      const [lon, lat] = loc.data.location.coordinates;

      return (
        await fetchAddressFromLocation({ lat, lon }).mapErr((e) => {
          notifyErrorInToast(
            "swrAddr",
            new Error("Failed to fetch addr", { cause: e }),
            "住所の取得中にエラーが発生しました",
          );
          return e;
        })
      )._unsafeUnwrap();
    },
  );

  return (
    <Link
      params={{ uuid: project.data.project_id }}
      style={{
        // NOTE: 親の Grid display を子に通す.
        display: "contents",
      }}
      to="/projects/$uuid"
    >
      <Grid
        _hover={{ shadow: "md" }}
        alignItems="start"
        bg="wkb-neutral.0"
        className="project-card"
        gap="1"
        gridRow="span 5"
        gridTemplateRows="subgrid"
        p="4"
        rounded="md"
        transition="box-shadow 0.1s"
      >
        <p.img
          alt="Placeholder"
          objectFit="cover"
          rounded="md"
          src={key_visual ?? ""}
          w="100%"
        />
        <p.div
          className={css({
            "& > div": {
              gap: "0",
              "& > svg": {
                height: "1.2em",
                width: "1.2em",
              },
            },
          })}
          minH="1lh"
          pt="2"
          w="100%"
        >
          {match(swrAddr)
            .with(S.Loading, () => (
              <IconText icon="svg-spinners:ring-resize">
                <p.p>住所を取得中...</p.p>
              </IconText>
            ))
            .with(S.Success, ({ data: { Feature } }) => {
              const addr = Feature.at(0)?.Property.AddressElement;
              const referenced = swrProjectAbout.data?.referenced;
              if (addr == null || referenced == null) return null;

              return (
                <IconText icon="mdi:map-marker-outline">
                  <p.p>{addr2str(addr, Project.calcStatus(referenced))}</p.p>
                </IconText>
              );
            })
            .with(S.Error, () => (
              <p.p color="wkb.secondary">
                住所の取得中にエラーが発生しました
              </p.p>
            ))
            .otherwise(() => null)}
        </p.div>
        <p.p fontSize="2xl" fontWeight="bold" lineClamp="2" minH="1lh">
          {name}
        </p.p>
        <p.p fontSize="md">
          現在金額 ￥
          {match(swrProjectAbout)
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
            {match(swrProjectAbout)
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
      </Grid>
    </Link>
  );
}
