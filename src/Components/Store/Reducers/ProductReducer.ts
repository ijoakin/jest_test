import { Product } from "../../Products/product";

export interface ProductsState {
  product: Product;
}

export const initialState: ProductsState = {
  product: {
    description: "",
    id: 150,
    price: 10
  }
}

const FETCH_PRODUCT_ACTION = '@@FETCH_PRODUCT_ACTION';

type FetchProductAactionType = { type: "FETCH_PRODUCT_ACTION", payload: ProductsState }

export const ProductReducer = (state: ProductsState = initialState, action: FetchProductAactionType) => {
  switch (action.type){
    case "FETCH_PRODUCT_ACTION": {
      return {...state}
    }
    default:
      return state;
  }
}