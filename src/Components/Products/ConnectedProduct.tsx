import { connect } from "react-redux";
import { ListProducts } from ".";
import { ProductsState } from "../Store/Reducers/ProductReducer";
import { Product } from "./product";

export interface ListProductsProps {
  prod: Product;
}

export const mapStateToProps = (state: ProductsState): ListProductsProps => {
  return {
    prod: state.product,
  };
};

export default connect(mapStateToProps)(ListProducts);
