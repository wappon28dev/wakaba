import { createFileRoute, Link } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { SownSeed } from "./-components/SownSeed";
import { seedsData, projectsData } from "@/assets/data";
import { GridLayout } from "@/components/GridLayout";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";
import { ProjectCard } from "@/components/project/Card";
import { useSession } from "@/hooks/useSession";
import { User } from "@/lib/classes/user";

type CategoryType = "休憩" | "環境" | "飲食" | "施設" | "移動" | "その他";

const convertCategory = (categoryId: string): CategoryType | undefined => {
  const categoryMap: Record<string, CategoryType> = {
    1: "休憩",
    2: "環境",
    3: "飲食",
    4: "施設",
    5: "移動",
    6: "その他",
  };
  return categoryId in categoryMap ? categoryMap[categoryId] : undefined;
};

const formatCreatedAt = (createdAt: string): string =>
  new Date(createdAt).toLocaleDateString("ja-JP");

export const Route = createFileRoute("/_auth/seeds/")({
  component: () => {
    const { session } = useSession();
    if (session == null) return undefined;
    const user = new User(session);
    const mySeedData = seedsData.filter((seed) => seed.sower_id === user.id);

    return (
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
          {mySeedData.length === 0 ? (
            <p.p>まだ蒔いた種がありません。</p.p>
          ) : (
            <p.div display="flex" my={5} overflowX="auto" width="100%">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                  {mySeedData
                    .filter((_, index) => index % 2 !== 0)
                    .map((seed) => {
                      const category = convertCategory(seed.category_id);
                      if (category === undefined) return null;

                      return (
                        <p.div key={seed.seed_id} minW={400} p={4} width="1/3">
                          <SownSeed
                            category={category}
                            createdAt={formatCreatedAt(seed.created_at)}
                            description={seed.description ?? ""}
                          />
                        </p.div>
                      );
                    })}
                </div>
                <div style={{ display: "flex" }}>
                  {mySeedData
                    .filter((_, index) => index % 2 === 0)
                    .map((seed) => {
                      const category = convertCategory(seed.category_id);
                      if (category === undefined) return null;

                      return (
                        <p.div key={seed.seed_id} minW={400} p={4} width="1/3">
                          <Link to={`/projects/${seed.seed_id}`}>
                            <SownSeed
                              category={category}
                              createdAt={formatCreatedAt(seed.created_at)}
                              description={seed.description ?? ""}
                            />
                          </Link>
                        </p.div>
                      );
                    })}
                </div>
              </div>
            </p.div>
          )}

          <p.div my={50}>
            <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
              芽が出た種
            </p.h2>
            <GridLayout>
              <>
                {projectsData
                  .sort((a, b) => b.created_at.localeCompare(a.created_at))
                  .map((_) => (
                    <Link key={_.project_id} to={`/projects/${_.project_id}`}>
                      <ProjectCard
                        amount_of_money={_.amount_of_money}
                        key_visual={_.key_visual ?? ""}
                        location={_.location}
                        name={_.name}
                        status="wakaba"
                      />
                    </Link>
                  ))}
              </>
            </GridLayout>
          </p.div>
        </p.div>
      </Expanded>
    );
  },
});
