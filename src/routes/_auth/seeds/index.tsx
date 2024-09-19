import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useInView } from "react-intersection-observer";
import { SownSeed } from "./-components/sownSeed";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";

export const Route = createFileRoute("/_auth/seeds/")({
  component: () => {
    const [ref1, inView1] = useInView({
      rootMargin: "-500px",
      triggerOnce: true,
    });

    return (
      <Expanded alignItems="start">
        <SownSeed
          category="花"
          createdAt="2021.10.10"
          description="これはテストです。"
        />
        <p.div
          ref={ref1}
          background="wkb.bg"
          display="grid"
          height={{ base: "400px", sm: "600px" }}
          placeItems="center"
          width="100%"
        >
          {inView1 && (
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
                新しい種を植える
              </Button>
            </p.div>
          )}
        </p.div>
        <p.div px="5%">
          <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
            自分が蒔いた種
          </p.h2>
          <p.div>
            <p.p height={500}>ここには自分が蒔いた種が表示されます。</p.p>
          </p.div>{" "}
          <p.h2 fontSize="1rem" fontWeight="bold" my={10} textAlign="left">
            目が出た種
          </p.h2>
          <p.div>
            <p.p height={500}>ここには自分が蒔いた種が表示されます。</p.p>
          </p.div>
        </p.div>
      </Expanded>
    );
  },
});
