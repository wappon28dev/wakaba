import { Tabs } from "@ark-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flex, HStack, styled as p } from "panda/jsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from "@/assets/data";
import { GridLayout } from "@/components/GridLayout";
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
      <>
        <p.div w="100dvw">
          <Swiper
            autoplay
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 5,
              },
              1792: {
                slidesPerView: 6,
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

        <Flex justify="center">
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
                        (a, b) => Number(a.category_id) - Number(b.category_id),
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
                      <Link key={_.project_id} to={`/projects/${_.project_id}`}>
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
      </>
    );
  },
});
