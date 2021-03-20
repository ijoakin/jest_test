import "./App.css";
import { Product } from "./Components/Products/product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./Components/Store/Store";
import ConnectProduct from "./Components/Products/ConnectedProduct";
import ConnectedListProduct from "./Components/Products/ConnectedListProduct";

function App() {
   return (
    <Provider store={store}>
      <div>
        <ConnectedListProduct></ConnectedListProduct>
      </div>
    </Provider>
  );
}

export default App;
