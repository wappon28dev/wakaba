import { Icon } from "@iconify/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { css } from "panda/css";
import { HStack, styled as p } from "panda/jsx";
import { type ReactElement } from "react";

function getCapitalizedStr(s: string): string {
  const s0 = s.at(0);
  if (s0 == null) {
    throw new Error("Expected a string with a length of at least 1 character");
  }

  return s0.toUpperCase() + s.slice(1);
}

export function Header(): ReactElement {
  const { resolvedLocation } = useRouterState();

  return (
    <p.header
      bg="white"
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
            _hover: {
              opacity: 0.5,
            },
          },
        })}
        to="/"
      >
        <Icon height="1.5em" icon="mdi:leaf" />
      </Link>
      <HStack gap="0">
        {["about", "projects", "seeds", "overview", "contact"].map((t) => (
          <Link
            key={t}
            className={css({
              _hover: {
                bg: "gray.100",
              },
              "&[data-active='true']": {
                bg: "gray.100",
                fontWeight: "bold",
              },
              p: "1",
              px: "2",
              rounded: "md",
            })}
            data-active={resolvedLocation.pathname.startsWith(`/${t}`)}
            to={`/${t}`}
          >
            <p.nav>{getCapitalizedStr(t)}</p.nav>
          </Link>
        ))}
      </HStack>
    </p.header>
  );
}
