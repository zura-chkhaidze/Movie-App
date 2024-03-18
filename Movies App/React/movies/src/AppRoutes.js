import React from "react";
import { Route, Routes } from "react-router-dom";
import appRoutes from "../src/config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.Guard>{<route.Component />}</route.Guard>}
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
