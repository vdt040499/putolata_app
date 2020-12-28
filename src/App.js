import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAllProducts, isUserLoggedIn, updateCart } from "./actions";
import "./App.css";
import Account from "./containers/AccountPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import HomePage from "./containers/HomePage";
import OrderDetailsPage from "./containers/OrderDetailsPage";
import OrderPage from "./containers/OrderPage";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import ProductListPage from "./containers/ProductListPage";
import SalePage from "./containers/SalePage";
import MessengerCustomerChat from "react-messenger-customer-chat";
import SideShare from "./components/SlideShare";
import AboutUs from "./containers/AboutUs";
import Error from "./containers/Error";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <MessengerCustomerChat pageId="103170758381803" appId="223938699335936" />
      <SideShare />
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/sales" component={SalePage} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/account" exact component={Account} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route
            path="/:productSlug/:productId/p"
            component={ProductDetailsPage}
          />
          <Route path="/:slug" component={ProductListPage} />

          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
