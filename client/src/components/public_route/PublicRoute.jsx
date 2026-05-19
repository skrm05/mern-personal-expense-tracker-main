import { useContext } from "react";
import { UserContext } from "../../global_context/UserContext";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }) {
  const { token } = useContext(UserContext);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
