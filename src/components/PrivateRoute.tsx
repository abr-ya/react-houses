import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Loader from "./Loader/Loader";

const PrivateRoute = () => {
  const { isUser, isLoading } = useAuthStatus();

  if (isLoading) return <Loader />;

  // дочерний компонент или редирект на форму входа
  return isUser ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
