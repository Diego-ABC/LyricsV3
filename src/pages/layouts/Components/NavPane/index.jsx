import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { VStack, Text, HStack, Box, Fade } from "@chakra-ui/react";
import StyledNavLink from "./StyledNavLink";
const Paths = [
  { name: "Dashboard", href: "" },
  { name: "Cases", href: "cases" },
  { name: "Directory", href: "directory" },
  { name: "Supervision", href: "supervision" },
  { name: "Organization", href: "org" },
];

const NavBar = ({ pages = Paths, ...props }) => {
  return (
    <VStack p={3} {...props} gap={4}>
      <Box p="5" w="full" mb={8}>
        <Box bg="white" mt="5" h="3.1rem" />
      </Box>
      {pages.map((page) => {
        return (
          <StyledNavLink
            key={page.name}
            w="full"
            to={page.href}
            activeColor="#3fbdee"
          >
            <Text py={0.5}>{page.name}</Text>
          </StyledNavLink>
        );
      })}
    </VStack>
  );
};

export default NavBar;
