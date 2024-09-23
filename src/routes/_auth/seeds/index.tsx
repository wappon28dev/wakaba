import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { SownSeed } from "./-components/SownSeed";
import { GridLayout } from "@/components/GridLayout";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { ProjectCard } from "@/components/project/Card";

export const Route = createFileRoute("/_auth/seeds/")({
  component: () => (
    <Expanded alignItems="start">
      <p.div
        background="wkb.bg"
        display="grid"
        height={{ base: "400px", md: "600px" }}
        placeItems="center"
        width="100%"
      >
        <p.div display="grid" fadeIn="5" placeItems="center">
          <p.h2
            color="wkb.text"
            fontSize="5rem"
            fontWeight="bold"
            textAlign="center"
          >
            Seeds
          </p.h2>

          <Button
            _hover={{
              background: "wkb.text",
              shadow: "md",
            }}
            background="wkb.on-bg"
            color="wkb.bg"
            fontSize="1rem"
            fontWeight="bold"
            mt="40px"
            mx="auto"
          >
            <a href="/seeds/new">新しい種を植える</a>
          </Button>
        </p.div>
      </p.div>
      <p.div px="5%">
        <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
          自分が蒔いた種
        </p.h2>
        <p.div display="flex" flexWrap="nowrap" gap={4} overflowX="auto">
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
        </p.div>
        <p.div display="flex" flexWrap="nowrap" gap={4} overflowX="auto">
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
          <SownSeed
            category="花"
            createdAt="2021.10.10"
            description="これはテストです。"
          />
        </p.div>
        <p.div my={50}>
          <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
            目が出た種
          </p.h2>
          <GridLayout>
            <>
              <ProjectCard
                amountOfMoney={100000}
                key_visual="https://placehold.jp/300x150.png"
                location="中区周辺"
                name="タイトル"
                status="wakaba"
              />
              <ProjectCard
                amountOfMoney={100000}
                key_visual="https://placehold.jp/300x150.png"
                location="中区周辺"
                name="タイトル"
                status="wakaba"
              />{" "}
              <ProjectCard
                amountOfMoney={100000}
                key_visual="https://placehold.jp/300x150.png"
                location="中区周辺"
                name="タイトル"
                status="wakaba"
              />{" "}
              <ProjectCard
                amountOfMoney={100000}
                key_visual="https://placehold.jp/300x150.png"
                location="中区周辺"
                name="タイトル"
                status="wakaba"
              />{" "}
              <ProjectCard
                amountOfMoney={100000}
                key_visual="https://placehold.jp/300x150.png"
                location="中区周辺"
                name="タイトル"
                status="wakaba"
              />
            </>
          </GridLayout>
        </p.div>
      </p.div>
    </Expanded>
  ),
});
