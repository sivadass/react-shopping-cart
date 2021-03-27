import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "contexts/auth";
import CommonProvider from "contexts/common";
import CartProvider from "contexts/cart";
import RouteWrapper from "layouts/RouteWrapper";
import AuthLayout from "layouts/AuthLayout";
import CommonLayout from "layouts/CommonLayout";
import AuthPage from "pages/auth";
import HomePage from "pages/home";
import CheckoutPage from "pages/checkout";
import "assets/scss/style.scss";

const App = () => {
  return (
    <AuthProvider>
      <CommonProvider>
        <CartProvider>
          <Router>
            <Switch>
              <RouteWrapper
                path="/"
                exact
                component={HomePage}
                layout={CommonLayout}
              />
              <RouteWrapper
                path="/checkout"
                component={CheckoutPage}
                layout={CommonLayout}
                isPrivate
              />
              <RouteWrapper
                path="/auth"
                component={AuthPage}
                layout={AuthLayout}
              />
            </Switch>
          </Router>
        </CartProvider>
      </CommonProvider>
    </AuthProvider>
  );
};

export default App;
