import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListProducts } from "./Components/Products";
import { Product } from "./Components/Products/product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";
import ConnectProduct from "./Components/Products/ConnectedProduct";

function App() {
  const prod: Product = {
    description: "description",
    id: 10,
    price: 14,
  };

  return (
    <Provider store={store}>
      <div className="App">
        <ConnectProduct></ConnectProduct>
      </div>
    </Provider>
  );
}

export default App;
