import { Tabs } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { createFileRoute } from "@tanstack/react-router";
import { css } from "panda/css";
import { Center, HStack, styled as p, VStack } from "panda/jsx";
import { useEffect, useState, type ReactElement } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ICON } from "@/assets/icon";
import { ErrorScreen } from "@/components/ErrorScreen";
import { IconText } from "@/components/IconText";
import { Loading } from "@/components/Loading";
import { cvaButton } from "@/components/cva/Button";
import { GridLayout } from "@/components/cva/GridLayout";
import { ProjectCard } from "@/components/project/Card";
import { svaTabs } from "@/components/sva/tabs";
import { Project } from "@/lib/classes/project";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProjectCardRenderer({
  swrProjects,
  projectsMapper = (projects) => projects,
  title = "プロジェクト",
}: {
  swrProjects: SWRResponse<Project[]>;
  projectsMapper?: (projects: Project[]) => Project[];
  title?: string;
}): ReactElement | ReactElement[] {
  return match(swrProjects)
    .with(S.Loading, () => (
      <Center py="50rem" w="100%">
        <Loading>
          <p.p>{title}を読み込み中…</p.p>
        </Loading>
      </Center>
    ))
    .with(S.Success, ({ data }) =>
      projectsMapper(data).map((project) => (
        <ProjectCard key={project.data.project_id} project={project} />
      )),
    )
    .otherwise(() => <ErrorScreen title={`${title}の取得`} />);
}

const sideBarButton = css(cvaButton.raw(), {
  bg: "transparent",
  colorPalette: "wkb.bg",
  fontSize: "xl",
  textAlign: "left",
  w: "full",
  fontWeight: "extrabold",
});

function SideBar(): ReactElement {
  return (
    <VStack
      bg="wkb-neutral.100"
      display={{
        base: "none",
        xl: "block",
      }}
      h="calc(100vh - 75px)"
      minW="400px"
      position="sticky"
      top="75px"
    >
      <p.div
        bg="wkb.primary"
        h="100%"
        overflow="hidden"
        p={4}
        position="relative"
      >
        <p.div
          bottom="0"
          display="flex"
          justifyContent="center"
          left="-30"
          overflow="hidden"
          position="absolute"
          transform="rotate(300deg)"
          zIndex="0"
        >
          <Icon color="#75B726" height="100dvh" icon={ICON.tsubomi} />
        </p.div>

        <p.div position="absolute" zIndex="10">
          <VStack alignItems="start" gap={4} p={4} zIndex="10">
            <p.a className={sideBarButton} href="#recommend">
              <IconText icon="mdi:thumb-up">おすすめのプロジェクト</IconText>
            </p.a>
            <p.a className={sideBarButton} href="#trending">
              <IconText icon="mdi:chart-line-variant">
                急上昇のプロジェクト
              </IconText>
            </p.a>
            <p.a className={sideBarButton} href="#stars">
              <IconText icon="mdi:star-outline">お気に入り</IconText>
            </p.a>
          </VStack>

          <p.p color="wkb-neutral.0" fontSize="xl" fontWeight="bold" px={5}>
            フィルター
          </p.p>
          <VStack alignItems="start" px={10}>
            <p.button className={sideBarButton} fontSize="1.1rem">
              休憩
            </p.button>
            <p.button className={sideBarButton} fontSize="1.1rem">
              環境
            </p.button>
            <p.button className={sideBarButton} fontSize="1.1rem">
              飲食
            </p.button>
            <p.button className={sideBarButton} fontSize="1.1rem">
              施設
            </p.button>
            <p.button className={sideBarButton} fontSize="1.1rem">
              移動
            </p.button>
            <p.button className={sideBarButton} fontSize="1.1rem">
              その他
            </p.button>
          </VStack>
        </p.div>
      </p.div>
    </VStack>
  );
}

function ProjectsCarousel({
  swrProjects,
}: {
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.body.clientWidth);
    window.addEventListener("resize", () => {
      setWidth(document.body.clientWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(document.body.clientWidth);
      });
    };
  }, []);

  return (
    <p.div
      display={{
        base: "block",
        xl: "none",
      }}
      style={{ width }}
      w="100vw"
    >
      <Swiper
        autoplay
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
        loop
        modules={[Navigation]}
        navigation
      >
        {match(swrProjects)
          .with(S.Loading, () => (
            <Center py="40" w="100%">
              <Loading>
                <p.p>プロジェクトを読み込み中…</p.p>
              </Loading>
            </Center>
          ))
          .with(S.Success, ({ data }) =>
            data.map((project) => (
              <SwiperSlide
                key={project.data.project_id}
                className={css({
                  paddingInline: "10px",
                  display: "grid!",
                  h: "unset!",
                })}
                zoom={false}
              >
                <ProjectCard project={project} />
              </SwiperSlide>
            )),
          )
          .otherwise(() => (
            <ErrorScreen title="プロジェクトの取得" />
          ))}
      </Swiper>
    </p.div>
  );
}

function ProjectsTabs({
  swrProjects,
}: {
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  const tabs = svaTabs();

  return (
    <p.div
      display={{
        base: "block",
        xl: "none",
      }}
    >
      <Tabs.Root className={tabs.root} defaultValue="recommend">
        <Tabs.List
          className={css(svaTabs.raw().list, {
            pb: "20px",
          })}
        >
          <Tabs.Trigger className={tabs.trigger} value="recommend">
            <p.p fontWeight="bold">おすすめ</p.p>
          </Tabs.Trigger>
          <Tabs.Trigger className={tabs.trigger} value="trending">
            <p.p fontWeight="bold">急上昇</p.p>
          </Tabs.Trigger>
          <Tabs.Trigger className={tabs.trigger} value="stared">
            <p.p fontWeight="bold">すべて</p.p>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="recommend">
          <GridLayout>
            <ProjectCardRenderer
              projectsMapper={
                // TODO: .sort(async (a, b) => await b.data.amount_of_money - a.data.amount_of_money)
                (projects) => projects
              }
              swrProjects={swrProjects}
            />
          </GridLayout>
        </Tabs.Content>
        <Tabs.Content value="trending">
          <GridLayout>
            <ProjectCardRenderer
              projectsMapper={
                // TODO: .sort((a, b) => Number(a.category_id) - Number(b.category_id))
                (projects) => projects
              }
              swrProjects={swrProjects}
            />
          </GridLayout>
        </Tabs.Content>
        <Tabs.Content value="stared">
          <GridLayout>
            <ProjectCardRenderer
              projectsMapper={
                // TODO: .sort((a, b) => Number(a.category_id) - Number(b.category_id))
                (projects) => projects
              }
              swrProjects={swrProjects}
            />
          </GridLayout>
        </Tabs.Content>
      </Tabs.Root>
    </p.div>
  );
}

const cardContainerStyle = css({
  gap: "20",
  "& > div": {
    ml: "100px",
    mdDown: {
      display: "none",
    },
    alignItems: "start",
    maxW: "100%",
    "& > h2": {
      fontSize: "2xl",
      fontWeight: "bold",
    },
    // wrapper
    "& > div": {
      display: "grid",
      gap: "10",
      overflowX: "auto",
      maxW: "calc(98dvw - 500px)",
      gridAutoFlow: "column",
      "& .project-card": {
        w: "400px",
      },
    },
  },
});

function PC({
  swrProjects,
}: {
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  return (
    <VStack
      display={{
        base: "none",
        xl: "block",
      }}
      gap="20"
      w="100%"
    >
      <p.p fontSize="5xl" fontWeight="bold" p="36" textAlign="center" w="100%">
        Projects
      </p.p>

      <VStack className={cardContainerStyle}>
        <VStack id="recommend">
          <p.h2>おすすめ</p.h2>
          <p.div>
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="おすすめ"
            />
          </p.div>
        </VStack>
        <VStack id="trending">
          <p.h2>急上昇</p.h2>
          <p.div>
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="急上昇"
            />
          </p.div>
        </VStack>
        <VStack id="stars">
          <p.h2>お気に入り</p.h2>
          <p.div>
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="お気に入り"
            />
          </p.div>
        </VStack>
      </VStack>
    </VStack>
  );
}

export const Route = createFileRoute("/projects/")({
  component: () => {
    const swrProjects = useSWRImmutable("projects", async () =>
      (
        await Project.factories
          .fetchAll()
          .mapErr(notifyTableErrorInToast("swrProjects"))
      )._unsafeUnwrap(),
    );

    return (
      <HStack alignItems="start" w="full">
        <SideBar />

        <VStack alignItems="center" w="auto">
          {/* スマホビュー */}
          <ProjectsCarousel swrProjects={swrProjects} />

          <ProjectsTabs swrProjects={swrProjects} />

          {/* PCビュー */}
          <PC swrProjects={swrProjects} />
        </VStack>
      </HStack>
    );
  },
});
