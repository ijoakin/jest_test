import { Product } from "../../Components/Products/product";
// global state 
export interface ProductsState {
  product: Product;
  listProducts: Product[];
  total: number
}

export const initialState: ProductsState = {
  product: {
    description: "",
    id: 0,
    price: 0
  },
  listProducts: [],
  total: 0
}

type ProductActionType = { type: "FETCH_PRODUCT_ACTION" | "ITEMS_REQUESTED" | "CALCULATE_TOTAL" | "ITEMS_RECEIVED" , payload: ProductsState }

export const ProductReducer = (state: ProductsState = initialState, action: ProductActionType) => {
  
  switch (action.type){
    case "FETCH_PRODUCT_ACTION": {
      return {...state}
    }
    case "ITEMS_REQUESTED": {
      return {...action.payload}
    }
    case "ITEMS_RECEIVED": {
      return {...action.payload}
    }
    case "CALCULATE_TOTAL": {
      const payload = {...state};
      let total = 0;
      payload.listProducts.map(product => total+=product.price);
      payload.total = total;
      return payload;
    }
    default:
      return state;
  }
}