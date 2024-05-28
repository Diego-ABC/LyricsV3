import { Outlet } from "react-router-dom";
import { NavBar, NavPane, HUDBar } from "../Components";
import { Flex, Box } from "@chakra-ui/react";

const topbarHeight = "3rem";

export default function LayoutWithNavPane() {
  return (
    <>
      <NavPane
        w="14.6rem"
        h="100%"
        bg="midnight_green.DEFAULT"
        borderRightRadius="3xl"
      />
      <Box
        pos="relative"
        flexGrow={1}
        direction="column"
        px="2.85rem"
        overflowY="auto"
      >
        <HUDBar h={topbarHeight} px="2.85rem" />
        <Box h={topbarHeight} w="full" />
        <Outlet />
      </Box>
    </>
  );
}
