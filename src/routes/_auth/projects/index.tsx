import { Tabs } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { Flex, HStack, styled as p } from "panda/jsx";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
              {[...Array(9)].map((_) => (
                <SwiperSlide key={_} zoom={false}>
                  <ProjectCard
                    amountOfMoney={100000}
                    keyVisual="https://placehold.jp/300x150.png"
                    location="中区周辺"
                    name="タイトル"
                    status="wakaba"
                  />
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
                  おすすめ
                </Tabs.Trigger>
                <Tabs.Trigger className={tabs.trigger} value="trending">
                  急上昇
                </Tabs.Trigger>
                <Tabs.Trigger className={tabs.trigger} value="all">
                  すべて
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="recommend">
                <GridLayout>
                  <>
                    {/* //!いずれ mapでループさせる */}
                    <ProjectCard
                      amountOfMoney={100000}
                      keyVisual="https://placehold.jp/300x150.png"
                      location="中区周辺"
                      name="タイトル"
                      status="wakaba"
                    />
                    <ProjectCard
                      amountOfMoney={100000}
                      keyVisual="https://placehold.jp/300x150.png"
                      location="中区一番街"
                      name="タイトル"
                      status="tree"
                    />
                    <ProjectCard
                      amountOfMoney={100000}
                      keyVisual="https://placehold.jp/300x150.png"
                      location="中区一番街"
                      name="タイトル"
                      status="seed"
                    />
                  </>
                </GridLayout>
              </Tabs.Content>
              <Tabs.Content value="trending">あとで</Tabs.Content>
              <Tabs.Content value="all">つくるね</Tabs.Content>
            </Tabs.Root>
          </p.div>
        </Flex>
      </>
    );
  },
});
