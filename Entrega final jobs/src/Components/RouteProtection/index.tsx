import { Navigate, Outlet } from "react-router-dom";

export const RouteProtection = () => {
  const local = localStorage.getItem("UserInfo");

  return local ? <Outlet /> : <Navigate to="/" />;
};
