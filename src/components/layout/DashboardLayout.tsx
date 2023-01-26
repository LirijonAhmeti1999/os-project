import { Outlet } from "react-router-dom";

import { Main } from "./Main";

import { RouteWrapper } from "routes/RouteWrapper";

export const DashboardLayout = () => {
  return (
    <RouteWrapper isAuthenticationPage={false}>
      <Main>
        <Outlet />
      </Main>
    </RouteWrapper>
  );
};
