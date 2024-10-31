import { Tabs } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { css } from "panda/css";
import { Center, Flex, HStack, styled as p, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ErrorScreen } from "@/components/ErrorScreen";
import { GridLayout } from "@/components/GridLayout";
import { HorizontalScrolling } from "@/components/HorizontalScrolling";
import { Loading } from "@/components/Loading";
import { cvaButton } from "@/components/cva/Button";
import { ProjectCard } from "@/components/project/Card";
import { svaTabs } from "@/components/sva/tabs";
import { Project } from "@/lib/classes/project";
import { S } from "@/lib/utils/patterns";
import { notifyTableErrorInToast } from "@/lib/utils/table";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IconText } from "@/components/IconText";

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
        <Link
          key={project.data.project_id}
          to={`/projects/${project.data.project_id}`}
        >
          <ProjectCard project={project} />
        </Link>
      )),
    )
    .otherwise(() => <ErrorScreen title={`${title}の取得`} />);
}

const sideBarButton = css(cvaButton.raw(), {
  bg: "transparent",
  colorPalette: "wkb.bg",
  fontSize: "2xl",
  textAlign: "left",
  w: "full",
});

function SideBar(): ReactElement {
  return (
    <VStack
      bg="wkb-neutral.100"
      display="block"
      position="sticky"
      top="75px"
      w="400px"
      xlDown={{
        display: "none",
      }}
      xlTo2xl={{
        display: "none",
      }}
    >
      <p.div bg="wkb.primary" h="100%" p={4} w="100%">
        <p.p color="wkb-neutral.0" fontSize="3xl" fontWeight="bold">
          みんなのプロジェクト
        </p.p>
        <VStack alignItems="start" gap={10} p={10}>
          <p.a className={sideBarButton} href="#recommend">
            <IconText icon="mdi:thumb-up">おすすめ</IconText>
          </p.a>
          <p.a className={sideBarButton} href="#trending">
            <IconText icon="mdi:chart-line-variant">急上昇</IconText>
          </p.a>
          <p.a className={sideBarButton} href="#stars">
            <IconText icon="mdi:star-outline">お気に入り</IconText>
          </p.a>
        </VStack>

        <p.p color="wkb-neutral.0" fontSize="3xl" fontWeight="bold">
          フィルター
        </p.p>
        <VStack alignItems="start" p={10}>
          <p.button className={sideBarButton}>休憩</p.button>
          <p.button className={sideBarButton}>環境</p.button>
          <p.button className={sideBarButton}>飲食</p.button>
          <p.button className={sideBarButton}>施設</p.button>
          <p.button className={sideBarButton}>移動</p.button>
          <p.button className={sideBarButton}>その他</p.button>
        </VStack>
      </p.div>
    </VStack>
  );
}

function ProjectsCarousel({
  swrProjects,
}: {
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  return (
    <p.div
      display="none"
      w="100dvw"
      xlDown={{
        display: "block",
      }}
      xlTo2xl={{
        display: "block",
      }}
    >
      <Swiper
        autoplay
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
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
              <SwiperSlide key={project.data.project_id} zoom={false}>
                <Link to={`/projects/${project.data.project_id}`}>
                  <ProjectCard project={project} />
                </Link>
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
    <Flex
      display="none"
      justify="center"
      xlDown={{
        display: "block",
      }}
      xlTo2xl={{
        display: "block",
      }}
    >
      <p.div w="100%">
        <Tabs.Root className={tabs.root} defaultValue="recommend">
          <Tabs.List className={tabs.list}>
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
    </Flex>
  );
}

function PC({
  swrProjects,
}: {
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  return (
    <p.div
      display="block"
      mdDown={{
        display: "none",
      }}
      w="100%"
    >
      <p.p fontSize="5xl" fontWeight="bold" p={36} textAlign="center">
        Projects
      </p.p>

      <VStack
        display="block"
        gap="20"
        pl="20"
        mdDown={{
          display: "none",
        }}
        w="calc(100dvw - 410px)"
      >
        <HorizontalScrolling title="おすすめ">
          <HStack gap="40" id="recommend">
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="おすすめ"
            />
          </HStack>
        </HorizontalScrolling>
        <HorizontalScrolling title="急上昇">
          <HStack gap="40" id="trending">
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="急上昇"
            />
          </HStack>
        </HorizontalScrolling>
        <HorizontalScrolling title="お気に入り">
          <HStack gap="40" id="stars">
            <ProjectCardRenderer
              projectsMapper={(projects) => projects.reverse()}
              swrProjects={swrProjects}
              title="お気に入り"
            />
          </HStack>
        </HorizontalScrolling>
      </VStack>
    </p.div>
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
