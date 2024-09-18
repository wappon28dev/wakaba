import { Popover } from "@ark-ui/react";
import { Icon } from "@iconify/react";
import { Link, useRouterState } from "@tanstack/react-router";
import { css } from "panda/css";
import { Divider, HStack, styled as p, VStack } from "panda/jsx";
import { vstack } from "panda/patterns/vstack";
import { type ReactElement } from "react";
import { IconText } from "./IconText";
import { Logo } from "./Logo";
import { Button } from "./cva/Button";
import { Expanded } from "./cva/Expanded";
import { svaPopover } from "./sva/popover";
import { useSession } from "@/hooks/useSession";
import { User } from "@/lib/classes/user";
import { getCapitalizedStr } from "@/lib/utils";

function UserIndicator(): ReactElement {
  const { session } = useSession();

  if (session == null) {
    return (
      <Link to="/user">
        <Button size="sm" variant="filled">
          ログイン
        </Button>
      </Link>
    );
  }

  const cls = svaPopover();
  const user = new User(session);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <p.img
          alt={user.metadata.name}
          cursor="pointer"
          h="8"
          rounded="full"
          src={user.metadata.avatar_url}
          w="8"
        />
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content
          className={[
            cls.content,
            vstack({
              alignItems: "start",
            }),
          ].join(" ")}
        >
          <Popover.Arrow className={cls.arrow}>
            <Popover.ArrowTip className={cls.arrowTip} />
          </Popover.Arrow>
          <HStack justify="space-between" w="100%">
            <Popover.Title className={cls.title}>
              やあ, {user.metadata.full_name} さん
            </Popover.Title>
            <Popover.CloseTrigger className={cls.closeTrigger}>
              <Icon icon="mdi:close" />
            </Popover.CloseTrigger>
          </HStack>
          <Divider />
          <VStack alignItems="start" fontSize="sm" w="100%">
            <IconText fontFamily="mono" icon="mdi:email">
              {user.metadata.email}
            </IconText>
            <IconText fontFamily="mono" icon="mdi:identifier">
              {user.id}
            </IconText>
          </VStack>
          <Button
            colorPalette="wkb.text"
            onClick={() => {
              void User.signOut();
            }}
            size="sm"
            variant="outlined"
          >
            ログアウト
          </Button>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}

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
      <HStack gap="2">
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
        <UserIndicator />
      </HStack>
    </p.header>
  );
}
