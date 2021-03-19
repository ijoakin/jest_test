import React from "react";
import rendered from "react-test-renderer";
import { ListProducts } from "../index";
import {
  screen,
  fireEvent,
  render,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { Product } from "../product";
import { Provider } from "react-redux";
import {
  initialState,
  ProductsState,
} from "../../Store/Reducers/ProductReducer";
import { store } from "../../Store/Store";
import { mapStateToProps } from "../ConnectedProduct";

describe("First test", () => {
  beforeAll(() => {
    console.log("before All");
  });

  beforeEach(() => {
    console.log("before Each");
  });

  afterAll(() => {
    console.log("after All");
  });

  afterEach(() => {
    console.log("after Each");
  });

  it("should Execute product component", () => {
    expect(2 + 2).toEqual(4);
  });

  it("should work", () => {
    expect(2 + 2).toEqual(4);
  });

  it("renders as expected", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const prod: Product = {
      description: "description",
      id: 10,
      price: 12,
    };

    const tree = rendered
      .create(
        <Provider store={store}>
          <ListProducts prod={prod}></ListProducts>
        </Provider>
      )
      .toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });

  describe("mapstateToPorps", () => {
    it("should map state to props correctly", () => {
      const prod: Product = {
        id: 10,
        description: "Description 10",
        price: 13,
      };

      const appState: ProductsState = {
        product: prod,
      };
      const componentState = mapStateToProps(appState);

      expect(componentState.prod).toEqual(appState.product);
    });
  });
});