import { connect } from "react-redux";
import { Products } from ".";
import { ProductsState } from "../../store/Reducers/ProductReducer";
import { Product } from "./product";

export interface ListProductsProps {
  products: Product[];
  total: number;
}

export interface ProductProps {
  prod: Product;
}


export const mapStateToProps = (state: ProductsState): ProductProps => {
  return {
    prod: state.product,
  };
};

export default connect(mapStateToProps)(Products);
