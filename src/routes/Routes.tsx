import { RouteObject, useRoutes } from "react-router-dom";
import { AuthenticationLayout } from "../components/layout/AuthenticationLayout";
import { DashboardLayout } from "../components/layout/DashboardLayout";

import { Home, Login, Error404 } from "../pages";

export const dashboardRoutes: RouteObject[] = [
  {
    element: <AuthenticationLayout />,
    children: [{ path: "login", element: <Login /> }],
  },

  {
    element: <DashboardLayout />,
    children: [{ path: "/", element: <Home /> }],
  },

  { path: "*", element: <Error404 /> },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
