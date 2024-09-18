import { Tabs } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { GridLayout } from "@/components/GridLayout";
import { ProjectCard } from "@/components/project/Card";
import { svaTabs } from "@/components/sva/tabs";

export const Route = createFileRoute("/_auth/projects/")({
  component: () => {
    const tabs = svaTabs();
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <>
        {/* <Carousel.Root className={carusel.root} loop>
          <Carousel.Viewport className={carusel.viewport}>
            <Carousel.ItemGroup className={carusel.itemGroup}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, index) => (
                <Carousel.Item
                  key={index}
                  className={carusel.item}
                  index={index}
                >
                  <ProjectCard
                    amountOfMoney={100000}
                    keyVisual="https://placehold.jp/300x150.png"
                    location="中区周辺"
                    name="タイトル"
                  />
                </Carousel.Item>
              ))}
            </Carousel.ItemGroup>
          </Carousel.Viewport>
          <Carousel.Control className={carusel.control}>
            <Carousel.PrevTrigger className={carusel.prevTrigger}>
              <Icon icon="bi:chevron-left" />
            </Carousel.PrevTrigger>
            <Carousel.NextTrigger className={carusel.nextTrigger}>
              <Icon icon="bi:chevron-right" />
            </Carousel.NextTrigger>
          </Carousel.Control>
        </Carousel.Root> */}

        <p.div
          alignItems="center"
          bg="wkb-neutral.0"
          display="flex"
          h={300}
          justifyContent="center"
          position="relative"
          rounded="md"
          w="100%"
        >
          <p.h1
            color="wkb-neutral.800"
            fontSize="4xl"
            fontWeight="bold"
            pos="absolute"
            textAlign="center"
          >
            Projects
          </p.h1>
        </p.div>

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
                />
                <ProjectCard
                  amountOfMoney={100000}
                  keyVisual="https://placehold.jp/300x150.png"
                  location="中区一番街"
                  name="タイトル"
                />
                <ProjectCard
                  amountOfMoney={100000}
                  keyVisual="https://placehold.jp/300x150.png"
                  location="中区一番街"
                  name="タイトル"
                />
              </>
            </GridLayout>
          </Tabs.Content>
          <Tabs.Content value="trending">あとで</Tabs.Content>
          <Tabs.Content value="all">つくるね</Tabs.Content>
        </Tabs.Root>
      </>
    );
  },
});
