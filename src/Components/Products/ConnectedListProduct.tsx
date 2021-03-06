import { connect } from "react-redux";
import { ProductsState } from "../../store/Reducers/ProductReducer";
import { ListProducts } from "./ListProducts";
import { Product } from "./product";

export interface ListProductsProps {
  products: Product[];
  total: number;
}

export const mapStateToProps = (state: ProductsState): ListProductsProps => {
  return {
    products: state.listProducts,
    total: state.total
  };
};

export default connect(mapStateToProps)(ListProducts);