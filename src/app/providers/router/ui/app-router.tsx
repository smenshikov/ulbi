import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'widgets/page-loader/ui/page-loader';

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <Routes>
        {routeConfig.map((props) => (
          <Route key={props.path} {...props} />
        ))}
      </Routes>
    </div>
  </Suspense>
);

export default AppRouter;
