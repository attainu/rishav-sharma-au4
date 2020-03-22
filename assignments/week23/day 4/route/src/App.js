import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";
import UsersPage from "./components/UsersPage";
import OrderPage from "./components/OrderPage";
import ProductPage from "./components/ProductPage"; 


function App() {
  return (
      <Router>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <Switch>
        <Route exact path="/">
          <h1>Welcom to the Homepage</h1>
        </Route>
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/user/:username" component={UsersPage} />
        <Route path="/order/:OrderID" component={OrderPage} />
        <Route path="/product/:ProductID" component={ProductPage} />
        </Switch>
      </Router>
  );
}

export default App;
