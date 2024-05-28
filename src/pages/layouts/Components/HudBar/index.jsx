import { EditIcon } from "@chakra-ui/icons";
import { Flex, Center, Box, Text, HStack, Divider } from "@chakra-ui/react";

const HUDBar = ({ ...props }) => {
  return (
    <Box
      overflow="visible"
      {...props}
      pos="absolute"
      top="0"
      left="0"
      w="full"
      fontWeight="semibold"
    >
      <Flex w="full" fontWeight="semibold">
        <HStack>
          <Text>John Doe</Text>
          <EditIcon />
        </HStack>
        <Center flexGrow={1} fontSize="xl">
          <Text>11:05 AM</Text>
          <Text>Wednesday, 1st Dec</Text>
        </Center>
        <Box>
          <EditIcon />
          <EditIcon />
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
};

export default HUDBar;
