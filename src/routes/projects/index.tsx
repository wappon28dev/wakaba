import { createFileRoute } from "@tanstack/react-router";
import { HStack } from "panda/jsx";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/")({
  component: () => {
    if (typeof window === "undefined") {
      return null;
    }
    return (
      <HStack>
        <ProjectCard
          description="
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。"
          isFinished={false}
          keyVisual="https://placehold.jp/250x150.png"
          location="中区周辺"
          name="タイトル"
          tag="カフェテリア"
          wateringPeople={1}
        />
        <ProjectCard
          description="
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。"
          isFinished={false}
          keyVisual="https://placehold.jp/250x150.png"
          location="中区一番街"
          name="タイトル"
          sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
          tag="カフェテリア"
          wateringPeople={100}
        />
        <ProjectCard
          description="
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。
          ここには生成AIが市民の意見を集約した文章が入ります。"
          isFinished
          keyVisual="https://placehold.jp/250x150.png"
          location="中区一番街"
          name="タイトル"
          sponsorIcon="https://avatars.githubusercontent.com/u/104073343?v=4"
          tag="カフェテリア"
          wateringPeople={100}
        />
      </HStack>
    );
  },
});
