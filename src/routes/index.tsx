import { createFileRoute, Link } from "@tanstack/react-router";
import { styled as p } from "panda/jsx";
import { useInView } from "react-intersection-observer";
import circle from "@/assets/svg/background/circle.svg";
import decorationRight from "@/assets/svg/background/decoration-right.svg";
import headerLeft from "@/assets/svg/background/header-left.svg";
import headerRight from "@/assets/svg/background/header-right.svg";
import wakaba from "@/assets/svg/background/wakaba.svg";
import wakabaIcon from "@/assets/svg/icon/wakaba.svg";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Button } from "@/components/cva/Button";
import { Expanded } from "@/components/cva/Expanded";

export const Route = createFileRoute("/")({
  component: () => {
    const [ref1, inView1] = useInView({
      rootMargin: (() => {
        if (window.innerWidth >= 1280) return "-1000px";
        if (window.innerWidth >= 640) return "-350px";
        return "-200px";
      })(),
      triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
      rootMargin: (() => {
        if (window.innerWidth >= 1280) return "-1000px";
        if (window.innerWidth >= 640) return "-350px";
        return "-200px";
      })(),
      triggerOnce: true,
    });
    const [ref3, inView3] = useInView({
      rootMargin: (() => {
        if (window.innerWidth >= 1280) return "-1000px";
        if (window.innerWidth >= 640) return "-350px";
        return "-200px";
      })(),
      triggerOnce: true,
    });
    const [ref4, inView4] = useInView({
      rootMargin: (() => {
        if (window.innerWidth >= 1280) return "-1000px";
        if (window.innerWidth >= 640) return "-350px";
        return "-200px";
      })(),
      triggerOnce: true,
    });

    const [ref5, inView5] = useInView({
      rootMargin: (() => {
        if (window.innerWidth >= 1280) return "-1000px";
        if (window.innerWidth >= 640) return "-350px";
        return "-200px";
      })(),
      triggerOnce: true,
    });

    return (
      <Expanded alignItems="start">
        <p.div
          backgroundColor="white"
          display="grid"
          duration="1000"
          height={{
            base: "50vh",
            sm: "50vh",
            lg: "50vh",
            xl: "50vh",
          }}
          slideInX="-10"
          style={{
            position: "relative",
            backgroundImage: `url("${headerLeft}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            backgroundSize: "70% auto",
          }}
        >
          <p.div
            fadeIn="8"
            position="relative"
            slideInX="20"
            style={{
              position: "relative",
              backgroundImage: `url("${headerRight}")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right top",
              backgroundSize: "70% auto",
            }}
          >
            <p.div
              bottom="0"
              height="100%"
              left="0"
              m="0 auto"
              margin="auto"
              placeItems="center"
              position="absolute"
              right="0"
              slideInX="-10"
              verticalAlign="middle"
            >
              <LogoAnimation />
            </p.div>
          </p.div>
        </p.div>

        <p.div
          ref={ref1}
          display="grid"
          fadeIn="2"
          height={{ base: "400px", sm: "600px", lg: "40vh", xl: "60vh" }}
          placeItems="center"
          slideInX="100"
          style={{
            backgroundImage: `url("${wakabaIcon}"), url("${decorationRight}")`,
            backgroundSize: "auto 15%, auto 15%",
            backgroundPosition: "5% bottom , 85% bottom",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <p.div fadeIn="2" slideInX="100">
            {inView1 && (
              <p.div duration="1000" fadeIn="5" slideInY="10">
                <p.h2 fontSize="3rem" fontWeight="bold" textAlign="center">
                  Wakabaとは
                </p.h2>

                <p.p fontSize="1rem" mt="20px" mx="auto" textAlign="center">
                  アイデアの種をあつめ形にするサービスです。
                  <br />
                  あなたの投稿したアイデアがこの町の明日を豊かにするかも！
                </p.p>
              </p.div>
            )}
          </p.div>
        </p.div>

        <p.div
          ref={ref4}
          background="wkb.primary"
          display="grid"
          fadeIn="2"
          height={{ base: "400px", sm: "600px", xl: "60vh" }}
          placeItems="center"
          style={{
            backgroundImage: `url("${wakaba}"), url("${circle}")`,
            backgroundSize: "auto 0%, auto 95%",
            backgroundPosition: "5% bottom , 50% 50%",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          {inView4 && (
            <p.div
              ref={ref2}
              display="grid"
              fadeIn="5"
              height="100%"
              placeItems="center"
              width="100%"
            >
              {inView2 && (
                <p.div duration="1000" placeItems="center" slideInY="10">
                  <p.h2
                    color="wkb.bg"
                    fadeIn="5"
                    fontSize="3rem"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    種を植える
                  </p.h2>

                  <p.p
                    color="wkb.bg"
                    fadeIn="5"
                    fontSize="1rem"
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
                      duration="3000"
                      fadeIn="5"
                      fontSize="150%"
                      fontWeight="bold"
                      mt="40px"
                      mx="auto"
                      slideInY="10"
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
          height={{ base: "500px", sm: "800px", xl: "60vh" }}
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
        <p.div
          ref={ref5}
          backgroundColor="white"
          display="grid"
          height={{ base: "500px", sm: "800px", xl: "60vh" }}
          placeItems="center"
          width={{ base: "100%", sm: "100%" }}
        >
          {inView5 && (
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
                  Overview
                </p.h2>
                <p.p
                  color="wkb.text"
                  fontSize="100%"
                  maxWidth={{ base: "85%", sm: "70%" }}
                  mt="20px"
                  mx="auto"
                  textAlign="center"
                >
                  マップ上から近くのプロジェクトを探してみる
                </p.p>
              </p.div>
              <p.div display="grid">
                <Link to="/overview">
                  <Button
                    _hover={{
                      background: "wkb.primary",
                      shadow: "md",
                    }}
                    background="wkb.primary"
                    color="wkb.bg"
                    display="flex"
                    duration="3000"
                    fadeIn="5"
                    mt="40px"
                    size="lg"
                    slideInY="10"
                  >
                    近くのプロジェクトを探す
                  </Button>
                </Link>
              </p.div>
            </p.div>
          )}
        </p.div>
      </Expanded>
    );
  },
});
