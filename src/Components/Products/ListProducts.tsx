import * as React from "react";
import { MouseEventHandler } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ProductsState } from "../Store/Reducers/ProductReducer";
import { ListProductsProps } from "./ConnectedProduct";
import { Product } from "./product";

export function ListProducts(props: ListProductsProps) {
  const dispatch = useDispatch();
  const pl = {
    product: {Description:"", Id:0, Price:0},
    listProducts: [{
            Description: "description",
            Id: 10,
            Price: 25
          },{
            Description: "description2",
            Id: 11,
            Price: 25
          },{
            Description: "description3",
            Id: 12,
            Price: 25
          },
          {
            Description: "description4",
            Id: 13,
            Price: 25
          }]
  };
  
  const getProduct: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch({
      type: "FETCH_PRODUCTS_ACTION",
      payload: pl
    });
  };
  const getTotal: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch({
      type: "CALCULATE_TOTAL",
      payload: pl
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
          {props.products.map(product => <tr> <td>{product.Id}</td><td>{product.Description}</td><td>{product.Price}</td></tr>)} 
        </tbody>
      </table>
      <div>
        <button onClick={getProduct}>Get Product</button>
      </div>
      <div>
        <button onClick={getTotal}>Get Total</button>
        <input type="text" value={props.total} />
      </div>
    </div>
  );
}
