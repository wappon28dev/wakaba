import { createFileRoute } from "@tanstack/react-router";
import { HStack } from "panda/jsx";
import { HorizontalScrolling } from "@/components/HorizontalScrolling";
import { ProjectCard } from "@/components/project/Card";

export const Route = createFileRoute("/projects/")({
  component: () => {
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <>
        <HorizontalScrolling title="新着プロジェクト">
          <HStack>
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区周辺"
              name="タイトル"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
          </HStack>
        </HorizontalScrolling>
        <HorizontalScrolling title="達成したプロジェクト">
          <HStack>
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区周辺"
              name="タイトル"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
          </HStack>
        </HorizontalScrolling>
        <HorizontalScrolling title="おすすめのプロジェクト">
          <HStack>
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区周辺"
              name="タイトル"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished={false}
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
            <ProjectCard
              amountOfMoney={100000}
              isFinished
              keyVisual="https://placehold.jp/300x150.png"
              location="中区一番街"
              name="タイトル"
              sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
            />
          </HStack>
        </HorizontalScrolling>
      </>
    );
  },
});
