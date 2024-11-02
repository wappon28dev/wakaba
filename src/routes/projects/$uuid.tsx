import { Dialog, Portal, Progress } from "@ark-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createFileRoute } from "@tanstack/react-router";
import { ResultAsync } from "neverthrow";
import { Flex, Grid, HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement, useEffect, useMemo, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { FruitCard } from "./-components/Fruit";
import { ReportCard } from "./-components/Report";
import { ICON } from "@/assets/icon";
import { ErrorScreen } from "@/components/ErrorScreen";
import { IconText } from "@/components/IconText";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { svaDialog } from "@/components/sva/dialog";
import { svaProgress } from "@/components/sva/progress";
import { Project } from "@/lib/classes/project";
import { Pledge } from "@/lib/classes/project/pledge";
import { type SponsorData } from "@/lib/classes/project/sponsor-data";
import { type Territory } from "@/lib/classes/territory";
import { getCapitalizedStr, waitMs } from "@/lib/utils";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import {
  type TableBrandedId,
  type TableError,
  type TableSchemaReferencedOf,
  type TableSchemaResolvedOf,
} from "@/types/table";
import { type Nullable } from "@/types/utils";
import { addr2str, fetchAddressFromLocation } from "@/lib/services/address";
import { notifyErrorInToast } from "@/lib/utils/toast";

type ProjectData<T = Project> = {
  project: T;
  resolved: TableSchemaResolvedOf<T>;
  referenced: TableSchemaReferencedOf<T>;
};
type ProjectStatus = ReturnType<Project["calcStatus"]>;

function calcLeftDays(deadline: Date): string {
  const now = new Date();

  const rtf = new Intl.RelativeTimeFormat("jp", { style: "short" });
  return rtf.format(
    Math.floor((deadline.getTime() - now.getTime()) / 1000 / 60 / 60 / 24),
    "day",
  );
}

function ReferencedSeedsInfo({
  territory,
}: {
  territory: Territory;
}): ReactElement {
  const swrSeeds = useSWRImmutable(
    `territory-${territory.data.territory_id}-seeds`,
    async () =>
      (
        await territory
          .fetchSeedsInZone()
          .mapErr(notifyTableErrorInToast("swrSeeds"))
      )._unsafeUnwrap(),
  );

  return match(swrSeeds)
    .with(S.Loading, () => (
      <Expanded bg="wkb-neutral.100" items="center">
        <Loading>
          <p.p>参照されたシードを取得中…</p.p>
        </Loading>
      </Expanded>
    ))
    .with(S.Success, ({ data }) => (
      <VStack gap="4" w="100%">
        {data.map((seed) => (
          <p.div
            key={seed.data.seed_id}
            _even={{ ml: "auto", flexDirection: "row-reverse" }}
            _odd={{ mr: "auto", flexDirection: "row" }}
            alignItems="center"
            bg="wkb-neutral.100"
            display="flex"
            p={2}
            rounded="md"
          >
            <Icon icon="material-symbols:account-circle" width={30} />
            <p.p
              fontSize="xs"
              lineClamp={3}
              maxW={200}
              overflow="hidden"
              px={2}
              textOverflow="ellipsis"
              w="100%"
            >
              {seed.data.description}
            </p.p>
          </p.div>
        ))}
      </VStack>
    ))
    .otherwise(({ error }) => (
      <ErrorScreen error={error} title="参照されたシードの取得" />
    ));
}

function SponsorInfo({
  projectStatus,
  sponsorData,
}: {
  projectStatus: ProjectStatus;
  sponsorData: Nullable<SponsorData>;
}): ReactElement {
  const dialog = svaDialog();

  const swrSponsor = useSWRImmutable(
    sponsorData != null ? `sponsor-${sponsorData.data.sponsor_id}` : null,
    async () => {
      if (sponsorData == null) return undefined;
      return (
        await sponsorData
          .resolveRelations()
          .mapErr(notifyTableErrorInToast("swrSponsor"))
      )._unsafeUnwrap();
    },
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className={dialog.trigger}
        disabled={projectStatus === "wakaba"}
        asChild
      >
        <Button
          alignContent="center"
          bg="wkb-neutral.100"
          display="flex"
          mb={4}
          p={2}
          rounded="md"
          w="full"
        >
          {projectStatus !== "wakaba" && sponsorData != null ? (
            match(swrSponsor)
              .with(S.Loading, () => (
                <p.div p="4" textAlign="center">
                  スポンサー情報を取得中…
                </p.div>
              ))
              .with(S.Success, ({ data: { sponsor } }) => (
                <HStack>
                  <p.img rounded="full" src={sponsor.data.icon} w={50} />
                  <VStack alignItems="start" gap={0}>
                    <p.p fontWeight="bold">{sponsor.data.name}</p.p>
                    <p.div px={2}>
                      <p.p
                        fontSize="xs"
                        h="100%"
                        lineClamp={3}
                        maxH={100}
                        overflow="hidden"
                        textOverflow="ellipsis"
                      >
                        {sponsorData.data.motivation}
                      </p.p>
                    </p.div>
                  </VStack>
                </HStack>
              ))
              .otherwise(() => null)
          ) : (
            <p.p>スポンサー募集中</p.p>
          )}
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className={dialog.backdrop} />
        <Dialog.Positioner>
          <Dialog.Content className={dialog.content}>
            {sponsorData != null &&
              match(swrSponsor)
                .with(S.Success, ({ data: { sponsor } }) => (
                  <HStack
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.1s",
                    }}
                    alignContent="center"
                    display="flex"
                    justify="center"
                    maxW={1000}
                    minW={300}
                    rounded="md"
                  >
                    <p.img rounded="full" src={sponsor.data.icon} w={50} />
                    <VStack alignItems="start" gap={0}>
                      <p.p fontWeight="bold">{sponsor.data.name}</p.p>
                      <p.div px={2}>
                        <p.p fontSize="xs">{sponsorData.data.motivation}</p.p>
                      </p.div>
                    </VStack>
                  </HStack>
                ))
                .otherwise(() => null)}
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

function GridDetailInfo({
  projectData,
}: {
  projectData: ProjectData;
}): ReactElement {
  const { project, resolved, referenced } = projectData;
  const progress = svaProgress();

  const swrAddr = useSWRImmutable(
    referenced.sponsorData != null
      ? `project-${project.data.project_id}-addr`
      : null,
    async () => {
      const loc = referenced.sponsorData?.data.location;
      if (loc == null) return undefined;
      const [lon, lat] = loc.coordinates;

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

  const leftDaysStr = useMemo(
    () => calcLeftDays(new Date(project.data.deadline)),
    [project.data.deadline],
  );
  const projectStatus = useMemo(
    () => project.calcStatus(referenced),
    [project, referenced],
  );
  const targetAmountOfMoney = useMemo(
    () => referenced.sponsorData?.data.target_amount_of_money ?? 0,
    [referenced.sponsorData],
  );
  const totalAmountOfMoney = useMemo(
    () => Pledge.calcTotalAmountOfMoney(referenced.pledges),
    [project],
  );
  const rateOfProgress = useMemo(
    () => totalAmountOfMoney / targetAmountOfMoney,
    [totalAmountOfMoney, targetAmountOfMoney],
  );

  return (
    <VStack w="100%">
      <Grid
        gap={4}
        gridTemplateColumns="2fr 1.4fr"
        mdDown={{ gridTemplateColumns: "1fr" }}
        p={4}
        maxW="1200px"
      >
        <VStack>
          <img
            alt={project.data.name}
            src={project.data.key_visual ?? ""}
            width="100%"
          />
          <Flex direction="column" gap={4}>
            <HStack mt={4}>
              <HStack alignItems="baseline" gap={2}>
                <p.p fontSize={30} fontWeight="bold">
                  {project.data.name}
                </p.p>
                <p.span fontSize={10} fontWeight="normal">
                  {leftDaysStr}
                </p.span>
              </HStack>
              <p.div ml="auto">
                <Icon
                  height={projectStatus === "hana" ? "2rem" : "1.5rem"}
                  icon={ICON[projectStatus]}
                />
              </p.div>
            </HStack>
            <HStack>
              <Icon icon="mdi:star-outline" width={30} />
              <Icon icon="mdi:share-variant" width={30} />
            </HStack>
            <p.p>{project.data.description}</p.p>
          </Flex>
        </VStack>

        <Flex bg="wkb-neutral.0" direction="column" p={4} rounded="md">
          <HStack>
            {match(swrAddr)
              .with(S.Loading, () => (
                <>
                  <Icon icon="svg-spinners:ring-resize" />
                  <p.p>住所を取得中...</p.p>
                </>
              ))
              .with(S.Success, ({ data: { Feature } }) => {
                const addr = Feature.at(0)?.Property.AddressElement;
                if (addr == null) return null;

                return (
                  <>
                    <Icon icon="bi:geo-alt-fill" />
                    <p.p>{addr2str(addr, Project.calcStatus(referenced))}</p.p>
                  </>
                );
              })
              .with(S.Error, () => {
                return (
                  <p.p color="wkb.secondary">
                    住所の取得中にエラーが発生しました
                  </p.p>
                );
              })
              .otherwise(() => null)}
          </HStack>

          <HStack>
            <p.p fontSize="2xl" fontWeight="bold">
              支援進捗
            </p.p>
            <p.p fontSize="3xl" fontWeight="bold" ml="auto">
              <p.span color="wkb.primary">
                ¥ {totalAmountOfMoney.toLocaleString()}
              </p.span>
            </p.p>
          </HStack>

          <HStack mb={4}>
            {projectStatus !== "wakaba" && referenced.sponsorData != null && (
              <p.p fontSize="xs" ml="auto">
                目標金額 ¥ {targetAmountOfMoney.toLocaleString()}
              </p.p>
            )}
          </HStack>

          {projectStatus !== "wakaba" && (
            <Progress.Root
              className={progress.root}
              value={Math.min(rateOfProgress * 100, 100)}
            >
              <Progress.Track className={progress.track}>
                <Progress.Range className={progress.range}>
                  {rateOfProgress >= 0.2 && (
                    <Progress.ValueText className={progress.valueText}>
                      {rateOfProgress * 100}%
                    </Progress.ValueText>
                  )}
                </Progress.Range>
              </Progress.Track>
            </Progress.Root>
          )}
          <p.a href="#pledge" w="100%">
            <Button my="4" variant="filled" w="100%">
              <IconText
                containerProps={{
                  fontSize: "lg",
                  fontWeight: "bold",
                  justifyContent: "center",
                }}
                icon={ICON[projectStatus]}
              >
                この {getCapitalizedStr(projectStatus)} を支援する
              </IconText>
            </Button>
          </p.a>
          <p.p fontSize="xs" fontWeight="bold" mb={4}>
            以下の意見が集まって生成されました
          </p.p>
          <p.div h="300px" overflowY="auto" py="5">
            <ReferencedSeedsInfo territory={resolved.territory} />
          </p.div>
          <SponsorInfo
            projectStatus={projectStatus}
            sponsorData={referenced.sponsorData}
          />
          <HStack alignItems="center" bg="wkb-neutral.100" p={2} rounded="md">
            <Icon icon="material-symbols:info-outline" width={30} />
            <p.p fontSize="xx-small">
              このプロジェクトは
              <p.span color="wkb.primary" fontWeight="bold">
                All or Nothing
              </p.span>
              であり、目標金額に満たなかった時は返金し、達した場合にのみプロジェクトの実行とリターンを約束するというものです。
            </p.p>
          </HStack>
        </Flex>
      </Grid>
    </VStack>
  );
}

export const Route = createFileRoute("/projects/$uuid")({
  loader: async ({ params }): Promise<ProjectData> => {
    const { uuid } = params;
    const projectId = uuid as TableBrandedId<Project>;

    const project = Project.factories.from(projectId);
    return (
      await project.andThen((pj) =>
        ResultAsync.combine([
          pj.resolveRelations(),
          pj.resolveReferenced(),
        ]).map(([resolved, referenced]) => ({
          project: pj,
          resolved,
          referenced,
        })),
      )
    ).match(
      (d) => d,
      (e) => {
        throw new Error(e.message, { cause: e });
      },
    );
  },
  errorComponent: ({ error }) => {
    const { cause } = error as Error & { cause: TableError };
    // eslint-disable-next-line no-console
    console.error(cause);

    return (
      <Expanded items="center">
        <ErrorScreen error={error} title="プロジェクトの読み込み" />
      </Expanded>
    );
  },
  pendingComponent: () => (
    <Expanded items="center">
      <Loading>プロジェクトを読み込み中…</Loading>
    </Expanded>
  ),
  component: () => {
    const projectData = Route.useLoaderData();
    const { referenced } = projectData;
    return (
      <p.div>
        <GridDetailInfo projectData={projectData} />

        <p.div bg="wkb.primary" display="flex" justifyContent="center" w="100%">
          <VStack alignItems="center" w="100%" maxW="1200px">
            <p.p
              color="wkb-neutral.0"
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              mt={20}
              id="pledge"
            >
              支援する
            </p.p>
            <Grid
              gap={4}
              gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              justifyContent="center"
              p={4}
              w="100%"
            >
              {referenced.fruits.length !== 0
                ? referenced.fruits.map(({ data }, index) => (
                    <FruitCard
                      key={data.name}
                      description={data.description}
                      index={index}
                      key_visual={data.key_visual ?? ""}
                      name={data.name}
                    />
                  ))
                : [1, 2, 3].map((f, index) => (
                    <FruitCard
                      key={f}
                      description=""
                      index={index}
                      key_visual=""
                      name={`支援${f}`}
                    />
                  ))}
            </Grid>

            {referenced.reports.length !== 0 && (
              <p.div display="flex" justifyContent="center" mb={10} w="100%">
                <VStack alignItems="center" w={1200}>
                  <p.p
                    color="wkb-neutral.0"
                    fontSize="2xl"
                    fontWeight="bold"
                    mb={4}
                    mt={20}
                  >
                    レポート
                  </p.p>
                  {referenced.reports.map(({ data }) => (
                    <p.div key={data.report_id}>
                      <ReportCard
                        body={data.body}
                        created_at={data.created_at}
                        report_id={data.report_id}
                        title={data.title}
                      />
                    </p.div>
                  ))}
                </VStack>
              </p.div>
            )}
          </VStack>
        </p.div>
      </p.div>
    );
  },
});
