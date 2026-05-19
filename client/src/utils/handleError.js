export const handleError = ({
  error,
  title = "Something went wrong",
  toast,
}) => {
  if (import.meta.env.DEV) {
    console.error(error);
  }

  toast({
    title,
    description: error?.message || "Please try again later.",
    status: "error",
    duration: 4000,
    isClosable: true,
    position: "top-right",
  });
};
