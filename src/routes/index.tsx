import { createFileRoute } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useInView } from "react-intersection-observer";
import { LogoComposite } from "@/components/Logo";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";

export const Route = createFileRoute("/")({
  component: () => {
    const [ref1, inView1] = useInView({
      rootMargin: "-500px",
      triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
      rootMargin: "-500px",
      triggerOnce: true,
    });
    const [ref3, inView3] = useInView({
      rootMargin: "-500px",
      triggerOnce: true,
    });

    return (
      <Expanded alignItems="start">
        <p.div
          bg="gray.200"
          display="grid"
          placeItems="center"
          py="20"
          style={{
            height: "60vh",
            position: "relative",
          }}
          w="100%"
        >
          <LogoComposite
            style={{
              zIndex: 1,
              position: "relative",
            }}
            zoom={{
              base: 2,
              smDown: 1.5,
            }}
          />
        </p.div>

        <p.div
          ref={ref1}
          display="grid"
          height={{ base: "400px", sm: "700px" }}
          placeItems="center"
        >
          {inView1 && (
            <p.div fadeIn="5">
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
              </p.p>
            </p.div>
          )}
        </p.div>

        <p.div
          ref={ref2}
          background="wkb.primary"
          display="grid"
          height={{ base: "500px", sm: "800px" }}
          placeItems="center"
        >
          {inView2 && (
            <p.div display="grid" fadeIn="5" placeItems="center">
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
                fadeIn="5"
                fontSize="100%"
                maxWidth={{ base: "85%", sm: "70%" }}
                mt="20px"
                mx="auto"
                textAlign="center"
              >
                昔、あるところになかなか子どもが生まれない夫婦がいました。
                でも、ある時、ようやくかわいらしい男の子が産まれました。
                れどれ。あら、こぶなんてないじゃないの？」
              </p.p>

              <Button
                _hover={{
                  background: "wkb.bg",
                  shadow: "md",
                }}
                background="wkb.bg"
                fontSize="150%"
                fontWeight="bold"
                mt="40px"
                mx="auto"
              >
                実際に初めてみる
              </Button>
            </p.div>
          )}
        </p.div>

        <p.div
          ref={ref3}
          background="wkb.bg"
          display="grid"
          height={{ base: "500px", sm: "800px" }}
          placeItems="center"
          width={{ base: "100%", sm: "100%" }}
        >
          {inView3 && (
            <p.div display="grid" fadeIn="5" placeItems="center" width="100%">
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
              <p.div
                display="grid"
                gap="20px" // ボタン間の余白を調整
                gridTemplateColumns="repeat(3, 1fr)" // 3列構成に
                pt={150}
                px="5%"
                width="100%"
              >
                <p.a height={100} href="/projects?q=cafe" width="100%">
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
                <p.a height={100} href="/projects?q=library" width="100%">
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
                </p.a>
                <p.a height={100} href="/projects?q=gym" width="100%">
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
              </p.div>
            </p.div>
          )}
        </p.div>
      </Expanded>
    );
  },
});
