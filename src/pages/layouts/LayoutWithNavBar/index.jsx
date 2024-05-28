import { Outlet } from "react-router-dom";
import { NavBar } from "../Components";
import { Flex, Box } from "@chakra-ui/react";

const topbarHeight = "3rem";
const pageXPad = "10";

export default function LayoutWithNavBar() {
  return (
    <>
      <NavBar px={pageXPad} />
      <Box pos="relative" flexGrow={1} px={pageXPad} overflowY="auto">
        <Box h={topbarHeight} w="full" />
        <Outlet />
      </Box>
    </>
  );
}
