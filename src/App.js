import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarScroll from "./Component/Navber";
import { Alert } from "bootstrap";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <NavbarScroll />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? (alert = "you are already Login" || <Redirect to="/" />) : <Login />}</Route>
        <Route path="/register">{user ? <Redirect to="/" /> : <Register />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
