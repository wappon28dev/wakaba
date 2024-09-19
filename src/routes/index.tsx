import { createFileRoute } from "@tanstack/react-router";
import { HStack, styled as p } from "panda/jsx";
import { HorizontalScrolling } from "@/components/HorizontalScrolling";
import { LogoComposite } from "@/components/Logo";
import { ProjectCard } from "@/components/project/Card";

export const Route = createFileRoute("/")({
  component: () => (
    <p.div>
      <p.div
        alignItems="center"
        display="flex"
        justifyContent="center"
        py="20"
        w="100%"
      >
        <LogoComposite
          zoom={{
            base: 2,
            smDown: 1.5,
          }}
        />
      </p.div>

      <p.div
        display="flex"
        flexDirection="column"
        height={{ base: "400px", sm: "500px" }}
        justifyContent="center"
      >
        <p.div>
          <p.h2 fontSize="200%" fontWeight="bold" textAlign="center">
            Wakabaとは
          </p.h2>
          <p.p
            fontSize="100%"
            maxWidth={{ base: "85%", sm: "70%" }}
            mt="20px"
            mx="auto"
            textAlign="center"
          >
            昔、あるところになかなか子どもが生まれない夫婦がいました。
            でも、ある時、ようやくかわいらしい男の子が産まれました。
            れどれ。あら、こぶなんてないじゃないの？」
            「おばちゃん。名前が長すぎるから、もうこぶが引っ込んじゃったよ
          </p.p>
        </p.div>
      </p.div>
      <p.div>
        <p.div pl="10%" textAlign="left">
          <p.h3 fontSize="170%" fontWeight="bold">
            現在募集中のプロジェクト
          </p.h3>
          <p.p>おすすめプロジェクト</p.p>
          <HorizontalScrolling>
            <HStack>
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
            </HStack>
          </HorizontalScrolling>
          <HorizontalScrolling>
            <HStack>
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
              <ProjectCard
                amountOfMoney={100}
                keyVisual="https://placehold.jp/250x150.png"
                location="中区周辺"
                name="タイトル"
                status="tree"
              />
            </HStack>
          </HorizontalScrolling>
        </p.div>
      </p.div>
      <p.div pl="10%" py={150} textAlign="left">
        <p.h3 fontSize="170%" fontWeight="bold">
          自分が蒔いた種
        </p.h3>
        <p.p>おすすめプロジェクト</p.p>
        <HorizontalScrolling>
          <HStack>
            <ProjectCard
              amountOfMoney={100}
              keyVisual="https://placehold.jp/250x150.png"
              location="中区周辺"
              name="タイトル"
              status="tree"
            />
            <ProjectCard
              amountOfMoney={100}
              keyVisual="https://placehold.jp/250x150.png"
              location="中区周辺"
              name="タイトル"
              status="tree"
            />
            <ProjectCard
              amountOfMoney={100}
              keyVisual="https://placehold.jp/250x150.png"
              location="中区周辺"
              name="タイトル"
              status="tree"
            />
          </HStack>
        </HorizontalScrolling>
      </p.div>
    </p.div>
  ),
});
