import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function SignUp() {
  return (
    <Center h="full" w="full">
      <Flex
        border="1px"
        borderColor="gray.200"
        w="2xl"
        borderRadius="3xl"
        overflow="hidden"
      >
        <Box flex="1 0 0" bg="process_cyan.900">
          <Flex p={10} gap={10}>
            <form>
              <FormControl>
                <FormLabel fontWeight={"semibold"}>Email</FormLabel>
                <Input
                  borderColor="midnight_green.500"
                  type="email"
                  placeholder="test@test.com"
                  borderWidth={2.5}
                  variant="filled"
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel fontWeight={"semibold"}>Password</FormLabel>
                <Input
                  borderColor="midnight_green.500"
                  type="password"
                  placeholder="*******"
                />
              </FormControl>

              <Button width="full" mt={4} type="submit">
                Sign Up
              </Button>
            </form>
          </Flex>
        </Box>
        <Center flex="1 0 0">Carousel Space</Center>
      </Flex>
    </Center>
  );
}
