import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListProducts } from "./Components/Products";
import { Product } from "./Components/Products/product";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const prod: Product = {
    description: "description",
    id: 10,
    price: 14,
  };

  return (
    <div className="App">
      <ListProducts prod={prod}></ListProducts>
    </div>
  );
}

export default App;
