/**
 * @jest-environment jsdom
 */
import { Provider } from "react-redux";
import { createStore } from "redux";
import {
  ProductReducer,
  ProductsState,
} from "../../../store/Reducers/ProductReducer";
import ConnectedListProduct from "../ConnectedListProduct";
import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

export const MockInitialState: ProductsState = {
  product: {
    description: "",
    id: 0,
    price: 0,
  },
  listProducts: [
    {
      description: "description",
      id: 10,
      price: 25,
    },
    {
      description: "description2",
      id: 11,
      price: 25,
    },
    {
      description: "description3",
      id: 12,
      price: 25,
    },
    {
      description: "description4",
      id: 13,
      price: 25,
    },
  ],
  total: 0,
};

const renderedComponent = (store: any) => {
  const myComponent = render(
    <Provider store={store}>
      <ConnectedListProduct key="testing"></ConnectedListProduct>
    </Provider>
  );

  return myComponent;
};

// eslint-disable-next-line jest/valid-title
describe("Example using ", () => {
  it("should match with the snapshot", () => {
    const mockStore = createStore(ProductReducer, MockInitialState);

    const myComponent = renderedComponent(mockStore);

    expect(myComponent).toMatchSnapshot();
  });
  it("should match with the snapshot and execute the total", async () => {
    const mockStore = createStore(ProductReducer, MockInitialState);

    const myComponent = renderedComponent(mockStore);

    const txtTotal = await screen.findByTestId("txtTotal");
    const btnGetTotal = await screen.findByTestId("btnGetTotal");

    user.click(btnGetTotal);

    //fireEvent.click(btnGetTotal);

    expect(txtTotal.getAttribute("value")).toBe("100");
  });
});
