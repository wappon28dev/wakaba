import { Link, useRouterState } from "@tanstack/react-router";
import { css } from "panda/css";
import { HStack, styled as p } from "panda/jsx";
import { type ReactElement } from "react";
import { Logo } from "./Logo";
import { Expanded } from "./cva/Expanded";
import { getCapitalizedStr } from "@/lib/utils";

export function Header(): ReactElement {
  const { resolvedLocation } = useRouterState();

  return (
    <p.header
      bg="wkb.bg-overlay"
      display="flex"
      justifyContent="space-between"
      p="4"
      position="sticky"
      top="0"
      w="100%"
      zIndex="header"
    >
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
        <Expanded items="center">
          <Logo height="1.5em" variant="sym" />
        </Expanded>
      </Link>
      <HStack gap="0">
        {["projects", "seeds", "overview", "contact"].map((t) => (
          <Link
            key={t}
            className={css({
              _hover: {
                bg: "wkb.text/5",
              },
              "&[data-active='true']": {
                bg: "wkb.text/5",
                fontWeight: "bold",
              },
              p: "1",
              px: "2",
              rounded: "md",
            })}
            data-active={resolvedLocation.pathname.startsWith(`/${t}`)}
            resetScroll={false}
            to={`/${t}`}
          >
            <p.nav>{getCapitalizedStr(t)}</p.nav>
          </Link>
        ))}
      </HStack>
    </p.header>
  );
}
