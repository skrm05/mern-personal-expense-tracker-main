import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../global_context/UserContext";
import {
  Button,
  Flex,
  Text,
  useColorModeValue,
  useToast,
  HStack,
  VStack,
} from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  const { token, logout } = useContext(UserContext);

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = async () => {
    toast({
      title: "Logout successful.",
      description: "You have successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    await logout();
    navigate("/login");
  };

  const textColor = useColorModeValue("#2d2d2d", "#f5f5f5");

  const linkColor = useColorModeValue("#f97316", "#f97316");

  const linkHoverColor = useColorModeValue("#4a90e2", "#4a90e2");

  const shadowLight = useColorModeValue("#ffffff", "#3b3b3b");

  const shadowDark = useColorModeValue("#b0b0b0", "#0d0d0d");

  const bgColor = useColorModeValue("#e0e0e0", "#1a1a1a");

  const neumorphismStyle = {
    backgroundColor: bgColor,
    borderRadius: "15px",
    borderWidth: "2px",
    boxShadow: `4px 4px 8px ${shadowDark}, -4px -4px 8px ${shadowLight}`,
  };

  return (
    <Flex
      style={neumorphismStyle}
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 3, md: 5 }}
      py={{ base: 3, md: 4 }}
      mt={2}
      mx={{ base: 2, md: 4 }}
      color={textColor}
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: 4, sm: 0 }}
      flexWrap="wrap"
    >
      <Text
        fontSize={{ base: "18px", sm: "22px", md: "26px" }}
        fontWeight="bold"
        textAlign={{ base: "center", sm: "left" }}
        wordBreak="break-word"
      >
        Expense Tracker
      </Text>

      <Flex
        alignItems="center"
        justifyContent="center"
        gap={{ base: 3, md: 5 }}
        flexWrap="wrap"
        width={{ base: "100%", sm: "auto" }}
      >
        <ColorModeSwitch />

        {token ? (
          <Button
            colorScheme="red"
            variant="solid"
            onClick={handleLogout}
            size={{ base: "sm", md: "md" }}
            boxShadow={`4px 4px 8px ${shadowDark}, -4px -4px 8px ${shadowLight}`}
            w={{ base: "100%", sm: "auto" }}
            maxW={{ base: "220px", sm: "auto" }}
          >
            Logout
          </Button>
        ) : (
          <HStack
            spacing={{ base: 3, md: 4 }}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Link
              to="/login"
              style={{
                color: linkColor,
                textDecoration: "none",
              }}
            >
              <Text
                fontWeight="700"
                _hover={{
                  color: linkHoverColor,
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
                boxShadow={`4px 4px 8px ${shadowDark}, -4px -4px 8px ${shadowLight}`}
                borderRadius="8px"
                padding={{ base: "8px 14px", md: "10px 18px" }}
                fontSize={{ base: "14px", md: "16px" }}
              >
                Login
              </Text>
            </Link>

            <Link
              to="/register"
              style={{
                color: linkColor,
                textDecoration: "none",
              }}
            >
              <Text
                fontWeight="700"
                _hover={{
                  color: linkHoverColor,
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
                boxShadow={`4px 4px 8px ${shadowDark}, -4px -4px 8px ${shadowLight}`}
                borderRadius="8px"
                padding={{ base: "8px 14px", md: "10px 18px" }}
                fontSize={{ base: "14px", md: "16px" }}
              >
                Register
              </Text>
            </Link>
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
