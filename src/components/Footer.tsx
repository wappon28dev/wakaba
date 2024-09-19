import { Icon } from "@iconify/react";
import {
  useRouterState,
  type ParsedLocation,
  Link,
} from "@tanstack/react-router";
import { css } from "panda/css";
import { styled as p, HStack } from "panda/jsx";
import { type ComponentProps, type ReactElement } from "react";
import { Logo } from "./Logo";
import { getCapitalizedStr } from "@/lib/utils";

function LinkText({
  currentLoc,
  to,
}: {
  currentLoc: ParsedLocation;
  to: NonNullable<ComponentProps<typeof Link>["to"]>;
}): ReactElement {
  return (
    <Link
      data-active={currentLoc.pathname.startsWith(to)}
      resetScroll={false}
      to={to}
    >
      {getCapitalizedStr(to.slice(1))}
    </Link>
  );
}

export function Footer(): ReactElement {
  const { resolvedLocation } = useRouterState();

  return (
    <p.footer
      alignItems="center"
      bg="wkb.on-bg"
      color="wkb.bg"
      display="flex"
      flexDirection="column"
      fontSize="sm"
      gap="5"
      p="4"
    >
      <HStack gap="5">
        <a
          href="https://github.com/wappon28dev/wakaba"
          rel="noreferrer"
          target="_blank"
        >
          <Icon height="2em" icon="mdi:github" />
        </a>
        <Icon height="2em" icon="mdi:twitter" />
        <Icon height="2em" icon="mdi:instagram" />
      </HStack>
      <HStack
        className={css({
          "& > a": {
            "&:not(:has(svg))": {
              _hover: {
                bg: "wkb.bg/5",
              },
              "&[data-active='true']": {
                bg: "wkb.bg/5",
                fontWeight: "bold",
              },
            },
            p: "1",
            px: "2",
            rounded: "md",
          },
        })}
        gap="5"
        ml="5" // NOTE: 中央揃えの見た目のため, 右にずらしている
      >
        <LinkText currentLoc={resolvedLocation} to="/projects" />
        <LinkText currentLoc={resolvedLocation} to="/seeds" />
        <Link
          className={css({
            "& > *": {
              transition: "opacity 0.2s",
              display: "flex",
              _hover: {
                opacity: 0.5,
              },
            },
          })}
          resetScroll={false}
          to="/"
        >
          <Logo height="2em" refillColor="colors.wkb.bg" variant="sym" />
        </Link>
        <LinkText currentLoc={resolvedLocation} to="/overview" />
        <LinkText currentLoc={resolvedLocation} to="/contact" />
      </HStack>
      <p.p>Hack Aichi + 2024 ･ mdn Team</p.p>
    </p.footer>
  );
}
