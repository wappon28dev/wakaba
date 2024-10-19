import { Tabs } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flex, HStack, styled as p, VStack } from "panda/jsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from "@/assets/data";
import { GridLayout } from "@/components/GridLayout";
import { Button } from "@/components/cva/Button";
import { ProjectCard } from "@/components/project/Card";
import { svaTabs } from "@/components/sva/tabs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Route = createFileRoute("/_auth/projects/")({
  component: () => {
    const tabs = svaTabs();

    if (typeof window === "undefined") {
      return null;
    }

    return (
      <HStack alignItems="start">
        <VStack
          bg="wkb-neutral.100"
          display="block"
          h="100vh"
          w="500px"
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
              <Button color="wkb-neutral.0" fontSize="2xl" w="full">
                <HStack>
                  <Icon icon="akar-icons:heart" />
                  おすすめ
                </HStack>
              </Button>
              <Button color="wkb-neutral.0" fontSize="2xl" w="full">
                <HStack>
                  <Icon icon="akar-icons:fire" />
                  急上昇
                </HStack>
              </Button>
              <Button color="wkb-neutral.0" fontSize="2xl" w="full">
                <HStack>
                  <Icon icon="akar-icons:star" />
                  置き二位入り
                </HStack>
              </Button>
            </VStack>
          </p.div>
        </VStack>

        <VStack alignItems="center" w="100%">
          <p.div maxW="1200px" w="100dvw">
            <Swiper
              autoplay
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides
              loop
              modules={[Navigation]}
              navigation
            >
              <HStack>
                {projectsData.map((_) => (
                  <SwiperSlide key={_.project_id} zoom={false}>
                    <Link to={`/projects/${_.project_id}`}>
                      <ProjectCard
                        amount_of_money={_.amount_of_money}
                        key_visual={_.key_visual ?? ""}
                        location={_.location}
                        name={_.name}
                        status={
                          // eslint-disable-next-line
                          _.project_id === "1"
                            ? "tsubomi"
                            : _.project_id === "7"
                              ? "hana"
                              : "wakaba"
                        }
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </HStack>
            </Swiper>
          </p.div>

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
            <p.div maxW="1200px" w="100%">
              <Tabs.Root className={tabs.root} defaultValue="recommend">
                <Tabs.List className={tabs.list}>
                  <Tabs.Trigger className={tabs.trigger} value="recommend">
                    <p.p fontWeight="bold">おすすめ</p.p>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabs.trigger} value="trending">
                    <p.p fontWeight="bold">急上昇</p.p>
                  </Tabs.Trigger>
                  <Tabs.Trigger className={tabs.trigger} value="all">
                    <p.p fontWeight="bold">すべて</p.p>
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="recommend">
                  <GridLayout>
                    <>
                      {projectsData
                        .sort((a, b) => b.amount_of_money - a.amount_of_money)
                        .map((_) => (
                          <Link
                            key={_.project_id}
                            to={`/projects/${_.project_id}`}
                          >
                            <ProjectCard
                              amount_of_money={_.amount_of_money}
                              key_visual={_.key_visual ?? ""}
                              location={_.location}
                              name={_.name}
                              status={
                                // eslint-disable-next-line
                                _.project_id === "1"
                                  ? "tsubomi"
                                  : _.project_id === "7"
                                    ? "hana"
                                    : "wakaba"
                              }
                            />
                          </Link>
                        ))}
                    </>
                  </GridLayout>
                </Tabs.Content>
                <Tabs.Content value="trending">
                  <GridLayout>
                    <>
                      {projectsData
                        .sort(
                          (a, b) =>
                            Number(a.category_id) - Number(b.category_id),
                        )
                        .map((_) => (
                          <Link
                            key={_.project_id}
                            to={`/projects/${_.project_id}`}
                          >
                            <ProjectCard
                              key={_.project_id}
                              amount_of_money={_.amount_of_money}
                              key_visual={_.key_visual ?? ""}
                              location={_.location}
                              name={_.name}
                              status={
                                // eslint-disable-next-line
                                _.project_id === "1"
                                  ? "tsubomi"
                                  : _.project_id === "7"
                                    ? "hana"
                                    : "wakaba"
                              }
                            />
                          </Link>
                        ))}
                    </>
                  </GridLayout>
                </Tabs.Content>
                <Tabs.Content value="all">
                  <GridLayout>
                    <>
                      {projectsData.reverse().map((_) => (
                        <Link
                          key={_.project_id}
                          to={`/projects/${_.project_id}`}
                        >
                          <ProjectCard
                            amount_of_money={_.amount_of_money}
                            key_visual={_.key_visual ?? ""}
                            location={_.location}
                            name={_.name}
                            status={
                              // eslint-disable-next-line
                              _.project_id === "1"
                                ? "tsubomi"
                                : _.project_id === "7"
                                  ? "hana"
                                  : "wakaba"
                            }
                          />
                        </Link>
                      ))}
                    </>
                  </GridLayout>
                </Tabs.Content>
              </Tabs.Root>
            </p.div>
          </Flex>
        </VStack>
      </HStack>
    );
  },
});
