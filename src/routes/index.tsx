import { lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from '../components/MainLayout';
import Landing from '../pages/Landing';

// const LandingPage = lazy(() =>
//   import('../pages/Landing').then((p) => ({ default: p.default })),
// );

const AppRoute = ({
  component: Component,
}: {
  // component: LazyExoticComponent<() => JSX.Element>;
  component: () => JSX.Element;
}): ReactElement => {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export const AppRoutes = () => {
  const mainRoutes = useRoutes([
    {
      path: '/home',
      element: <AppRoute component={Landing} />,
    },
    {
      path: '*',
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <MainLayout>{mainRoutes}</MainLayout>;
};
