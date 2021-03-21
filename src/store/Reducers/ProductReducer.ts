import { Product } from "../../Components/Products/product";

export interface ProductsState {
  product: Product;
  listProducts: Product[];
  total: number
}

export const initialState: ProductsState = {
  product: {
    Description: "",
    Id: 150,
    Price: 10
  },
  listProducts: [],
  total: 0
}

type ProductActionType = { type: "FETCH_PRODUCT_ACTION" | "FETCH_PRODUCTS_ACTION" | "CALCULATE_TOTAL" , payload: ProductsState }

export const ProductReducer = (state: ProductsState = initialState, action: ProductActionType) => {
  switch (action.type){
    case "FETCH_PRODUCT_ACTION": {
      return {...state}
    }
    case "FETCH_PRODUCTS_ACTION": {
      return {...action.payload}
    }
    case "CALCULATE_TOTAL": {
      const payload = {...action.payload};
      let total = 0;
      payload.listProducts.map(product => total+=product.Price);
      payload.total = total;
      return payload;
    }
    default:
      return state;
  }
}