import { HoverCard, Portal } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { ResultAsync } from "neverthrow";
import { css } from "panda/css";
import { styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { SownSeed } from "./-components/SownSeed";
import { SownSeedInline } from "./-components/SownSeedInline";
import { ErrorScreen } from "@/components/ErrorScreen";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { GridLayout } from "@/components/cva/GridLayout";
import { ProjectCard } from "@/components/project/Card";
import { svaHoverCard } from "@/components/sva/hover-card";
import { Project } from "@/lib/classes/project";
import { type Seed } from "@/lib/classes/seed";
import { Sower } from "@/lib/classes/sower";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { type TableError, type TableResult } from "@/types/table";

function fetchProjectSeedsMap(
  seeds: Seed[],
): TableResult<Map<Project, Seed[]>> {
  // s_n と p(t) のペア (1-N)
  const seedsTerritoriesProjects = ResultAsync.combine(
    seeds.map((s) =>
      s.fetchTerritoriesProjects().map((tPs) => [s, tPs] as const),
    ),
  ).map((sTsPs) => new Map(sTsPs));

  // p(t) と, s_n とのペア (1-N)
  return seedsTerritoriesProjects.map((sTsPs) => {
    const uniqueProjects = Project.toBeDistinct(
      Array.from(sTsPs).flatMap(([, { projects }]) => projects),
    );

    const projectSeedsMap = new Map<Project, Seed[]>();
    uniqueProjects.forEach((pj) => {
      projectSeedsMap.set(
        pj,
        Array.from(sTsPs).flatMap(([seed, { projects }]) =>
          projects
            .filter(
              ({ data: { project_id } }) => project_id === pj.data.project_id,
            )
            .map(() => seed),
        ),
      );
    });

    return projectSeedsMap;
  });
}

function ProjectsBySeeds({ seeds }: { seeds: Seed[] }): ReactElement {
  const cls = svaHoverCard();

  const swrProjectSeedsPairs = useSWRImmutable(
    "project-seeds-pairs",
    async () =>
      (
        await fetchProjectSeedsMap(seeds).mapErr((e) =>
          notifyTableErrorInToast("swrProjects")({
            ...e,
            message: "芽が出た種の取得に失敗しました",
          }),
        )
      )._unsafeUnwrap(),
  );

  return match(swrProjectSeedsPairs)
    .with(S.Loading, () => <Loading>芽が出た種を読み込み中…</Loading>)
    .with(S.Success, ({ data }) => (
      <GridLayout>
        {Array.from(data).map(([pj, sd]) => (
          <HoverCard.Root
            key={pj.data.project_id}
            closeDelay={200}
            openDelay={200}
            positioning={{ placement: "right", gutter: 8 }}
          >
            <HoverCard.Trigger asChild>
              <GridLayout h="100%" textAlign="start">
                <ProjectCard project={pj} />
              </GridLayout>
            </HoverCard.Trigger>
            <Portal>
              <HoverCard.Positioner>
                <HoverCard.Content
                  className={css(svaHoverCard.raw().content, {
                    display: {
                      base: "none",
                      md: "block",
                    },
                  })}
                >
                  <HoverCard.Arrow className={cls.arrow}>
                    <HoverCard.ArrowTip className={cls.arrowTip} />
                  </HoverCard.Arrow>
                  <VStack>
                    <p.h3 fontSize="md" fontWeight="bold">
                      元となったあなたのシード
                    </p.h3>
                    <VStack
                      alignItems="start"
                      maxH="300px"
                      overflowY="auto"
                      w="300px"
                    >
                      {sd.map((s) => (
                        <SownSeedInline key={s.data.seed_id} seed={s} />
                      ))}
                    </VStack>
                  </VStack>
                </HoverCard.Content>
              </HoverCard.Positioner>
            </Portal>
          </HoverCard.Root>
        ))}
      </GridLayout>
    ))
    .otherwise(() => (
      <ErrorScreen error={swrProjectSeedsPairs} title="芽が出た種の取得" />
    ));
}

export const Route = createFileRoute("/_auth/seeds/")({
  loader: async ({ context }) => {
    const { user } = context;
    const sower = Sower.factories.fromUser(user.id);

    return (
      await sower.andThen((s) =>
        s.fetchOwnSeeds().map((seeds) => ({
          sower: s,
          seeds,
        })),
      )
    ).match(
      (s) => s,
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
        <ErrorScreen error={error} title="シードの読み込み" />
      </Expanded>
    );
  },
  pendingComponent: () => (
    <Expanded items="center">
      <Loading>
        <p.p>シードを読み込み中…</p.p>
      </Loading>
    </Expanded>
  ),
  component: () => {
    const { seeds } = Route.useLoaderData();

    return (
      <Expanded alignItems="start">
        <p.div
          background="wkb.bg"
          display="grid"
          height={{ base: "400px", md: "600px" }}
          placeItems="center"
          width="100%"
        >
          <p.div display="grid" fadeIn="5" placeItems="center">
            <p.h2
              color="wkb.text"
              fontSize="5rem"
              fontWeight="bold"
              textAlign="center"
            >
              Seeds
            </p.h2>

            <Button
              _hover={{
                background: "wkb.text",
                shadow: "md",
              }}
              background="wkb.on-bg"
              color="wkb.bg"
              fontSize="1rem"
              fontWeight="bold"
              mt="40px"
              mx="auto"
            >
              <a href="/seeds/new">新しい種を植える</a>
            </Button>
          </p.div>
        </p.div>
        <p.div px="5%">
          <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
            自分が蒔いた種
          </p.h2>
          {seeds.length === 0 ? (
            <p.p>まだ蒔いた種がありません。</p.p>
          ) : (
            <GridLayout>
              {seeds.map((s) => (
                <SownSeed key={s.data.seed_id} seed={s} />
              ))}
            </GridLayout>
          )}
          <p.div my={50}>
            <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
              芽が出た種
            </p.h2>
            <ProjectsBySeeds seeds={seeds} />
          </p.div>
        </p.div>
      </Expanded>
    );
  },
});
