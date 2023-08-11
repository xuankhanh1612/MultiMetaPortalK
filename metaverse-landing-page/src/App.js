import { BackTop } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { authAction } from "./modules/auth/redux/actions";
import { AppLayout, history, PrivateRoute } from "./modules/base";
import "./modules/caches";
import { getWebsiteByDomain, setAuth } from "./modules/caches";
import { setAccessToken } from "./modules/common";

function App({ routes }) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.caches);
  const website = useSelector((state) => state.caches.website);

  useEffect(() => {
    console.log("website", website);
    if (!website) {
      let data = {
        meta_group_domain: window.location.host,
      };
      dispatch(getWebsiteByDomain(data));
    }
    if (auth) {
      setAccessToken(auth.access);
      dispatch(setAuth(auth));
    }
  }, []);

  useEffect(() => {
    if (auth?.access) {
      // console.log("test");
      dispatch(authAction.getUserInfo());
    }
  }, [auth]);

  return (
    <>
      <Router history={history}>
        <Switch>
          {routes
            .filter(({ noAppLayout }) => noAppLayout === true)
            .map((route, k) => {
              if (route.unauthenticated) {
                return (
                  <Route
                    exact
                    key={k}
                    path={route.path}
                    component={route.component}
                  />
                );
              } else {
                return (
                  <PrivateRoute
                    exact
                    key={k}
                    path={route.path}
                    component={route.component}
                  />
                );
              }
            })}
          <AppLayout>
            <Switch>
              {routes
                .filter(({ noAppLayout }) => noAppLayout !== true)
                .map((route, k) => {
                  if (route.unauthenticated) {
                    return (
                      <Route
                        exact
                        key={k}
                        path={route.path}
                        component={route.component}
                      />
                    );
                  } else {
                    return (
                      <PrivateRoute
                        exact
                        key={k}
                        path={route.path}
                        component={route.component}
                      />
                    );
                  }
                })}
            </Switch>
          </AppLayout>
        </Switch>
      </Router>
      <BackTop />
    </>
  );
}

export default App;
