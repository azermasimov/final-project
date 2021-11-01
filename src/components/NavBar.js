import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import LoginPage from "./LoginPage";
import Cart from "./products/Cart";
import Products from "./products/Products";

const NavBar = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/products" component={Products} exact />
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
