import { useContext } from "react";
import { AuthContext } from "../hooks/auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/account/signin" />;
};

export default PrivateWrapper;
