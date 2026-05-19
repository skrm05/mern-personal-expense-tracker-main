import { createContext, useEffect, useState, useCallback } from "react";

import { useToast } from "@chakra-ui/react";

import useToken from "../custom_hook/useToken";
import { BASE_URL } from "../utils/config";
import { handleError } from "../utils/handleError";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const toast = useToast();

  const { token, setToken, removeToken } = useToken();

  const [userInfo, setUserInfo] = useState(null);

  const logout = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      toast({
        title: "Logout successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error) {
      handleError({
        error,
        title: "Logout Failed",
        toast,
      });
    } finally {
      removeToken();
      setUserInfo(null);
    }
  }, [removeToken, toast]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
