import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  // Последний роут так как он отработает если не будет найден подходящий роут
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  }, {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
