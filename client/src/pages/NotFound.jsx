import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const NotFound = () => {
  const cardBg = useColorModeValue(
    "background.secondary",
    "background.secondaryDark",
  );

  const textColor = useColorModeValue("text.primary", "text.primaryDark");

  const subTextColor = useColorModeValue(
    "text.secondary",
    "text.secondaryDark",
  );

  return (
    <Container
      maxW="100%"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("background.light", "background.dark")}
      px={4}
    >
      <Box
        bg={cardBg}
        p={{ base: 8, md: 12 }}
        rounded="2xl"
        shadow={useColorModeValue("lg", "2xl")}
        textAlign="center"
        maxW="600px"
        width="100%"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "whiteAlpha.200")}
      >
        <VStack spacing={6}>
          <Heading
            fontSize={{ base: "7xl", md: "9xl" }}
            fontWeight="extrabold"
            color="accent.primary"
            lineHeight="1"
          >
            404
          </Heading>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} color={textColor}>
            Page Not Found
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={subTextColor}
            maxW="450px"
            mx="auto"
          >
            Sorry, the page you are trying to access does not exist or may have
            been moved.
          </Text>
          <Button
            as={Link}
            to="/"
            size="lg"
            bg="buttons.primary"
            color="white"
            _hover={{
              bg: "buttons.primaryHover",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.3s ease"
          >
            Go Back Home
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};
