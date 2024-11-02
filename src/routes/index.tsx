import { createFileRoute, Link } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useInView } from "react-intersection-observer";
import obi from "@/assets/svg/background/obi.svg";
import wakaba from "@/assets/svg/background/wakaba.svg";
import { LogoComposite } from "@/components/Logo";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";

export const Route = createFileRoute("/")({
  component: () => {
    const [ref1, inView1] = useInView({
      rootMargin: "-350px",
      triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
      rootMargin: "-350px",
      triggerOnce: true,
    });
    const [ref3, inView3] = useInView({
      rootMargin: "-350px",
      triggerOnce: true,
    });
    const [ref4, inView4] = useInView({
      rootMargin: "350px",
      triggerOnce: true,
    });

    return (
      <Expanded alignItems="start">
        <p.div
          bg="gray.200"
          display="grid"
          height={{ base: "400px", sm: "600px" }}
          placeItems="center"
          py="20"
          style={{
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
          height={{ base: "400px", sm: "600px" }}
          placeItems="center"
          style={{
            backgroundImage: `url(${obi})`,
            backgroundSize: "20%",
            backgroundPosition: "5% top",
            backgroundRepeat: "no-repeat",
          }}
        >
          {inView1 && (
            <p.div duration="1000" fadeIn="5" slideInY="10">
              <p.h2 fontSize="300%" fontWeight="bold" textAlign="center">
                Wakabaとは
              </p.h2>

              <p.p
                fontSize="100%"
                maxWidth={{ base: "90%", sm: "70%" }}
                mt="20px"
                mx="auto"
                textAlign="center"
              >
                アイデアの種をあつめ形にするサービスです。
                <br />
                あなたの投稿したアイデアがこの町の明日を豊かにするかも！
              </p.p>
            </p.div>
          )}
        </p.div>

        <p.div
          ref={ref4}
          background="wkb.primary"
          display="grid"
          height={{ base: "400px", sm: "600px" }}
          placeItems="center"
        >
          {inView4 && (
            <p.div
              ref={ref2}
              display="grid"
              duration="3000"
              fadeIn="5"
              height="100%"
              placeItems="center"
              style={{
                backgroundImage: `url(${wakaba})`,
                backgroundSize: "60%",
                backgroundPosition: "5% bottom",
                backgroundRepeat: "no-repeat",
              }}
              width="100%"
            >
              {inView2 && (
                <p.div
                  duration="1000"
                  fadeIn="5"
                  placeItems="center"
                  slideInY="10"
                >
                  <p.h2
                    color="wkb.bg"
                    fontSize="3rem"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    種を植える
                  </p.h2>

                  <p.p
                    color="wkb.bg"
                    fadeIn="5"
                    fontSize="1.5rem"
                    mt="20px"
                    mx="auto"
                    textAlign="center"
                  >
                    意見を投稿して、住みやすい街を
                    <br />
                    作るアイデアの種を植えよう！
                  </p.p>
                  <Link to="/seeds/new">
                    <Button
                      _hover={{
                        background: "wkb.bg",
                        shadow: "md",
                      }}
                      background="wkb.bg"
                      display="flex"
                      fontSize="150%"
                      fontWeight="bold"
                      mt="40px"
                      mx="auto"
                    >
                      実際に初めてみる
                    </Button>
                  </Link>
                </p.div>
              )}
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
            <p.div
              display="grid"
              duration="1000"
              fadeIn="5"
              placeItems="center"
              slideInY="10"
              width="100%"
            >
              <p.div width="100%">
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
                gap="20px"
                gridTemplateColumns="repeat(3, 1fr)"
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
                    # 休憩
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
                    fontWeight="bold"
                    height="100%"
                    width="100%"
                  >
                    # 施設
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
                    # 飲食
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
