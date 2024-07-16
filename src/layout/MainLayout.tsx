import React, { useEffect } from "react";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import Dashboard from "../page/Dashboard";
import { Outlet, useLocation } from "react-router-dom";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div>
      <Dashboard />
      <div className="lg:ml-[265px] min-h-[50vh] mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
