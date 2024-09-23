import { createFileRoute, Link } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { SownSeed } from "./-components/SownSeed";
import { seedsData, projectsData } from "@/assets/data";
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
          {seedsData.map((seed) => (
            <SownSeed
              key={seed.seed_id}
              category={seed.category_id}
              createdAt={seed.created_at}
              description={seed.description ?? ""}
            />
          ))}
        </p.div>
        <p.div my={50}>
          <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
            目が出た種
          </p.h2>
          <GridLayout>
            <>
              {projectsData
                .sort((a, b) => b.created_at.localeCompare(a.created_at))
                .map((_) => (
                  <Link key={_.project_id} to={`/projects/${_.project_id}`}>
                    <ProjectCard
                      description={projectsData.description}
                      name={_.name}
                      status={_.status}
                    />
                  </Link>
                ))}
            </>
          </GridLayout>
        </p.div>
      </p.div>
    </Expanded>
  ),
});
