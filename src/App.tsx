import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
// import ConnectProduct from "./Components/Products/ConnectedProduct";
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
