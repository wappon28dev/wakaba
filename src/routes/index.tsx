import { createFileRoute } from "@tanstack/react-router";
import { HStack, styled as p } from "panda/jsx";
import { LogoComposite } from "@/components/Logo";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";

export const Route = createFileRoute("/")({
  component: () => (
    <Expanded alignItems="start">
      <p.div
        alignItems="center"
        bg="gray.200"
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
        height={{ base: "400px", sm: "700px" }}
        justifyContent="center"
      >
        <p.div>
          <p.h2
            background="wkb.bg"
            fontSize="300%"
            fontWeight="bold"
            textAlign="center"
          >
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

      <p.div
        background="wkb.primary"
        display="flex"
        flexDirection="column"
        height={{ base: "500px", sm: "800px" }}
        justifyContent="center"
      >
        <p.div>
          <p.h2
            color="wkb.bg"
            fontSize="300%"
            fontWeight="bold"
            textAlign="center"
          >
            種を植える
          </p.h2>
          <p.p
            color="wkb.bg"
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
        <Button
          _hover={{
            background: "wkb.bg",
            shadow: "md",
          }}
          background="wkb.bg"
          fontSize="150%"
          fontWeight="bold"
          mt="50px"
          mx="auto"
          p="10px 20px"
        >
          実際に初めてみる
        </Button>
      </p.div>
      <p.div
        background="wkb.bg"
        display="flex"
        flexDirection="column"
        height={{ base: "500px", sm: "800px" }}
        justifyContent="center"
      >
        <p.div>
          <p.h2
            color="wkb.text"
            fontSize="300%"
            fontWeight="bold"
            textAlign="center"
          >
            Projects
          </p.h2>
          <p.p
            color="wkb.text"
            fontSize="100%"
            maxWidth={{ base: "85%", sm: "70%" }}
            mt="20px"
            mx="auto"
            textAlign="center"
          >
            試しに好きなジャンルのプロジェクトを調べてみる
          </p.p>
        </p.div>
        <HStack pt={150} px="5%">
          <p.a
            height={100}
            href="/projects?q=cafe"
            mt="50px"
            mx="auto"
            width={{ base: "200", md: "300" }}
          >
            <Button
              _hover={{
                background: "wkb.primary",
                shadow: "md",
              }}
              background="wkb.primary"
              color="wkb.bg"
              fontSize="150%"
              fontWeight="bold"
              height="100%"
              width="100%"
            >
              # カフェ
            </Button>
          </p.a>
          <p.a
            fontWeight="bold"
            height={100}
            href="/projects?q=cafe"
            mt="50px"
            mx="auto"
            width={{ base: "200", md: "300" }}
          >
            <Button
              _hover={{
                background: "wkb.primary",
                shadow: "md",
              }}
              background="wkb.primary"
              color="wkb.bg"
              fontSize="150%"
              height="100%"
              width="100%"
            >
              # 図書館
            </Button>
          </p.a>{" "}
          <p.a
            height={100}
            href="/projects?q=gym"
            mt="50px"
            mx="auto"
            width={{ base: "200", md: "300" }}
          >
            <Button
              _hover={{
                background: "wkb.primary",
                shadow: "md",
              }}
              background="wkb.primary"
              color="wkb.bg"
              fontSize="150%"
              fontWeight="bold"
              height="100%"
              width="100%"
            >
              # 運動施設
            </Button>
          </p.a>
        </HStack>
      </p.div>
    </Expanded>
  ),
});
