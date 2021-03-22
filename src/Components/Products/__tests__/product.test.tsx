import React from "react";
import rendered from "react-test-renderer";
import { Products } from "../index";
import { Product } from "../product";
import { Provider } from "react-redux";
import { ProductsState } from "../../../store/Reducers/ProductReducer";
import { store } from "../../../store/Store";
import { mapStateToProps } from "../ConnectedProduct";

jest.mock("");

const sumArray = (): number => {
  const ar: number[] = [1, 2, 3, 4, 5, 6, 7];
  let total = 0;
  ar.map((value: number) => {
    total += value;
  });

  return total;
};

const sumArrayReduce = (): number => {
  const ar: number[] = [1, 2, 3, 4, 5, 6, 7];
  const total = ar.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue
  );
  return total;
};

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

  it("Should sum values", () => {
    const result = sumArray();

    expect(result).toEqual(28);
  });

  it("should sum values using a reduce", () => {
    const result = sumArrayReduce();

    expect(result).toEqual(28);
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
          <Products prod={prod}></Products>
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
        listProducts: [],
        total: 0,
      };
      const componentState = mapStateToProps(appState);

      expect(componentState.prod).toEqual(appState.product);
    });
  });
});
