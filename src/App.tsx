import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
// import ConnectProduct from "./Components/Products/ConnectedProduct";
import ConnectedListProduct from "./Components/Products/ConnectedListProduct";
import { ConnectedRouter } from "connected-react-router";
import { ListProducts } from "./Components/Products/ListProducts";
import { Products } from "./Components/Products";
import { Home } from "./Components/Home";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <Provider store={store}>
      <ConnectedListProduct></ConnectedListProduct>
    </Provider>
  );
}

export default App;
