import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../global_context/UserContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return token ? children : null;
};

export default PrivateRoute;
