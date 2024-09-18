import { Tabs } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { GridLayout } from "@/components/GridLayout";
import { ProjectCard } from "@/components/project/Card";
import { svaTabs } from "@/components/sva/tabs";

export const Route = createFileRoute("/projects/")({
  component: () => {
    const cls = svaTabs();
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <Tabs.Root className={cls.root} defaultValue="recommend">
        <Tabs.List className={cls.list}>
          <Tabs.Trigger className={cls.trigger} value="recommend">
            おすすめ
          </Tabs.Trigger>
          <Tabs.Trigger className={cls.trigger} value="trending">
            急上昇
          </Tabs.Trigger>
          <Tabs.Trigger className={cls.trigger} value="all">
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
    );
  },
});
