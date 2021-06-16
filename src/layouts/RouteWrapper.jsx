import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthStateContext } from "contexts/auth";

function RouteWrapper({
  component: Component,
  layout: Layout,
  isPrivate = false,
  ...rest
}) {
  const { isLoggedIn = false } = useContext(AuthStateContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate && !isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location }
              }}
            />
          );
        }
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default RouteWrapper;
