import { Provider } from "react-redux";
import rendered from "react-test-renderer";
import {
  ProductReducer,
  ProductsState,
} from "../../../store/Reducers/ProductReducer";
import { store } from "../../../store/Store";
import ConnectedListProduct, { mapStateToProps } from "../ConnectedListProduct";
import delay from "redux-saga";

const getMockState = (): ProductsState => {
  return {
    product: { description: "", id: 0, price: 0 },
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
};

jest.mock("../../../Services/ProductService.ts");

describe("List Products Component Tests", () => {
  let state: ProductsState;

  beforeEach(() => {
    state = getMockState();
  });

  it("Should render as expected", () => {
    const tree = rendered
      .create(
        <Provider store={store}>
          <ConnectedListProduct></ConnectedListProduct>
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should total be equal to zero when the component is rendered", async () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    await delay();

    const instance = tree.root;
    const component = instance.findByProps({ id: "txtTotal" });

    const text = component.props.value; // this going to get the text

    expect(text).toEqual(0);
  });
  it("Should calculate using the component", async () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    await delay();

    const instance = tree.root;
    const component = instance.findByProps({ id: "txtTotal" });

    const text = component.props.value; // this going to get the text

    expect(text).toEqual(0);
  });
  it("Should calculate getting values from mock", async () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    const instance = tree.root;
    const component = instance.findByProps({ id: "txtTotal" });

    const text = component.props.value; // this going to get the text

    expect(text).toEqual(0);
  });

  it("Should Props be correct", () => {
    const componentProps = mapStateToProps(state);

    expect(componentProps.total).toEqual(0);
    expect(componentProps.products.length).toEqual(4);
  });
  it("Should total calculation", () => {
    const newstate = ProductReducer(state, {
      type: "CALCULATE_TOTAL",
      payload: state,
    });

    expect(newstate.total).toEqual(100);
  });
});
