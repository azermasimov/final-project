import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import LoginPage from "./LoginPage";
// import Cart from "./products/Cart";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import DataList from "./adminComponents/DataList";
import DataCreate from "./adminComponents/DataCreate";

const NavBar = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/admin" component={DataList} exact />
          <Route path="/admin/create" component={DataCreate} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          {/* <Route path="/cart" component={Cart} exact /> */}
          <div>
            <h2>
              <Link to="/admin">Admin</Link>
            </h2>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
