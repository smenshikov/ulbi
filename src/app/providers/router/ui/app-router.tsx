import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route-config/route-config";

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page-wrapper">
        <Routes>
          {routeConfig.map((props) => (
            <Route key={props.path} {...props} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
