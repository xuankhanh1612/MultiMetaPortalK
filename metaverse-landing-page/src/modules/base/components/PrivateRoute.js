import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: ComponentChild, children, ...rest }) => {
  const { auth } = useSelector((state) => state.caches);
  const Component = children ? children : <ComponentChild />;

  // const checkPermissions = (roles, permissions) => {
  //   // if (!permissions) {
  //   //   return true;
  //   // }
  //   // let flag = false;
  //   // if (roles) {
  //   //   let indexRole = roles?.findIndex((r) => r.toLowerCase() === permissions);
  //   //   return indexRole !== undefined && indexRole !== -1 ? true : false;
  //   // }
  //   // return flag;
  //   return true;
  // };

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        auth?.access ? (
          React.cloneElement(Component, props)
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
