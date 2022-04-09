import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Header from "./Components/Header/Header";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"/>
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product" exact>
        <Product />
      </Route>
      <Route path="/product/:productid" exact>
        <ProductDetail />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
// steps to explain routing
// 1.install make pages and show url with page
// 2.Make nav page and show without link and navlink
// 3.difference between link and navlink by explaing navlink and giving color
// dynamic route
// nested route
// switch and exact
// redirect
// programatic Navigation (useHistory)
// prompt
// useLocation
