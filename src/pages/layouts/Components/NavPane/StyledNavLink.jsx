import { NavLink } from "react-router-dom";
import { Link, Box, HStack } from "@chakra-ui/react";

const StyledNavLink = ({ to, activeColor = "#3fbdee", children, ...props }) => {
  return (
    <Link
      as={NavLink}
      to={to}
      fontSize="1.42rem"
      fontWeight="bold"
      borderRadius={"0.3rem"}
      color="white"
      _activeLink={{
        color: activeColor,
        // _hover: { bg: "rgba(255,255,255,0.3)" },
      }}
      {...props}
      _hover={{ bg: "rgba(255,255,255,0.1)" }}
    >
      {({ isActive }) => {
        return (
          <HStack w="full" h="full" gap={4}>
            <Box
              w="1.5"
              bg={isActive ? activeColor : "transparent"}
              h="100%"
              borderRadius="full"
            />
            <>{children}</>
          </HStack>
        );
      }}
    </Link>
  );
};

export default StyledNavLink;
