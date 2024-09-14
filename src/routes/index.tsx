import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import mainVisual from "@/assets/logo/svg/mainVisual.svg";
import { Expanded } from "@/components/panda/Expanded";

export const Route = createFileRoute("/")({
  component: () => (
    <Expanded alignItems="start">
      <p.div bg="gray.200" height="600px">
        <p.img
          alt="mainVisual"
          maxWidth={300}
          mx="auto"
          py={150}
          src={mainVisual}
          width="30vw"
        />
      </p.div>
      <p.div height="800" p="10%">
        <p.div>
          <p.h2 fontSize="200%" fontWeight="bold" textAlign="center">
            Wakabaとは
          </p.h2>
          <p.p
            fontSize="100%"
            maxWidth="60%"
            mt="40px"
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
        </p.div>

        <p.div
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          my="100px"
          p="10%"
        >
          <p.p>a</p.p>
        </p.div>
      </p.div>
      <p.div pl="10%" textAlign="left">
        <p.h3 fontSize="170%" fontWeight="bold">
          自分が蒔いた種
        </p.h3>
        <p.p>おすすめプロジェクト</p.p>
      </p.div>

      <p.div
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        my="100px"
        p="10%"
      >
        <p.p>a</p.p>
      </p.div>
    </Expanded>
  ),
});
