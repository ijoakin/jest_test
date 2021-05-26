import { MouseEventHandler, useEffect, useState } from "react";
import { ReactReduxContext, useDispatch } from "react-redux";
import { getProducts } from "../../Services/ProductService";
import { ProductsState } from "../../store/Reducers/ProductReducer";
import { ListProductsProps } from "./ConnectedProduct";

export function ListProducts(props: ListProductsProps) {
  const dispatch = useDispatch();
  const payload: ProductsState = {
    product: { description: "", id: 0, price: 0 },
    listProducts: [],
    total: 0,
  };

  const getProduct: MouseEventHandler<HTMLButtonElement> | undefined =
    async () => {
      //alert("execute click");
      console.log("execute click");
      const products = getProducts().then((response) => {
        payload.listProducts = response;
        dispatch({
          type: "ITEMS_RECEIVED",
          payload: payload,
        });
      });
      dispatch({
        type: "ITEMS_REQUESTED",
        payload: payload,
      });
    };
  const [text_1, settext_1] = useState("testing");

  const function1 = () => {
    settext_1("prueba2");
  };

  // useEffect(() => {
  //   getProducts().then((response) => {
  //     payload.listProducts = response;
  //     dispatch({
  //       type: "ITEMS_RECEIVED",
  //       payload: payload,
  //     });
  //     dispatch({
  //       type: "CALCULATE_TOTAL",
  //       payload: payload,
  //     });
  //   });
  //   dispatch({
  //     type: "ITEMS_REQUESTED",
  //     payload: payload,
  //   });
  // }, props.products);

  const getTotal: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch({
      type: "CALCULATE_TOTAL",
      payload: payload,
    });
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <th>Id</th>
          <th>Description</th>
          <th>Price</th>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={getProduct} id="btnGetProduct">
          Get Product
        </button>
      </div>
      <div>
        <button
          onClick={getTotal}
          id="btnGetTotal"
          data-testid="btnGetTotal"
          name="btnGetTotal"
        >
          Get Total
        </button>
        <input
          type="text"
          value={props.total}
          className="divtxtTotal"
          data-testid="txtTotal"
          id="txtTotal"
        />
      </div>
      <text>{text_1}</text>
      <button onClick={function1} id="btnMyButton" name="btnMyButton">
        change text
      </button>
    </div>
  );
}
