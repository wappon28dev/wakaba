import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";

import { styled as p, HStack, VStack } from "panda/jsx";
import { type ReactElement } from "react";
import Logo from "@/assets/logo.svg";

export function Footer(): ReactElement {
  return (
    <p.footer bg="wkb.text" color="wkb-white" p="4" textAlign="center">
      <VStack alignItems="center" gap="4" justifyContent="center">
        <HStack gap="2" justify="center" justifyContent="center" pr={5}>
          <Icon height={30} icon="mdi:github" width={30} />
          <Icon height={30} icon="mdi:twitter" width={30} />
          <Icon height={30} icon="mdi:instagram" width={30} />
        </HStack>
        <HStack
          fontSize="sm"
          fontWeight="bold"
          gap="9"
          justify="center"
          justifyContent="center"
        >
          <Link to="/seeds"> Seeds </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/">
            <img alt="logo" height={60} src={Logo} width={50} />
          </Link>
          <Link to="/overview"> Overview </Link>
          <Link to="/contact"> Contact </Link>
        </HStack>
        <p.p fontSize="sm" pr={5}>
          2024 Hack Aichi team mdn
        </p.p>
      </VStack>
    </p.footer>
  );
}
