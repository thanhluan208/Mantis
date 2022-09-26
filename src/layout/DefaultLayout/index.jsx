import React, { Fragment, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import routes from 'routes/routes';
import { Route, Routes } from 'react-router-dom';
import LayoutWithDrawerAndAppbar from 'components/LayoutWithDrawerAndAppbar';
import CommonIcons from 'components/CommonIcons';
import { RouteBase } from 'constants/routeUrl';
import Header from 'components/Header';
import CommonStyles from 'components/CommonStyles';
import { leftmenu } from 'constants/leftmenu';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <LayoutWithDrawerAndAppbar
        topDrawer={<CommonStyles.Typography variant="h4">Mantis</CommonStyles.Typography>}
        header={<Header />}
        leftMenu={leftmenu}
      >
        <Suspense fallback="Loading...">
          <Routes>
            {routes.map((route, idx) => {
              return (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  element={
                    route.isPrivateRoute ? (
                      <PrivateRoute>
                        <route.component />
                      </PrivateRoute>
                    ) : (
                      <route.component />
                    )
                  }
                />
              );
            })}
          </Routes>
        </Suspense>
      </LayoutWithDrawerAndAppbar>
    </Fragment>
  );
};

export default DefaultLayout;
