import { Provider } from "react-redux";

import { ProductsState } from "../../../store/Reducers/ProductReducer";
import ConnectedListProduct, {
  ListProductsProps,
} from "../ConnectedListProduct";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, mount, render, configure, ReactWrapper } from "enzyme";
import App from "../../../App";
import { ListProducts } from "../ListProducts";
import { Products } from "..";
import { SSL_OP_NO_TLSv1_1 } from "constants";
import { store } from "../../../store/Store";
import { delay } from "@redux-saga/core/effects";



jest.mock("../../../Services/ProductService.ts");

const productSevice = require("../../../Services/ProductService").getProducts;

configure({ adapter: new Adapter() });
let wrapper: ReactWrapper;
describe("automation using enzyme", () => {
  beforeAll(() => {});

  it("should render the component", async () => {
    let st = store;

    wrapper = mount(
      <Provider store={st}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    wrapper.find({ id: "btnGetTotal" }).props().onClick();
    // const buttonGetProduct = wrapper.find({ id: "btnGetProduct" });
    // buttonGetProduct.simulate("click");
    wrapper.update();
    await delay(100);

    // const button = wrapper.find({ id: "btnGetTotal" });
    // button.simulate("click");

    wrapper.find({ id: "btnGetTotal" }).props().onClick();

    wrapper.update();
    await delay(100);

    const inputTotal = wrapper.find({ id: "txtTotal" });
    const totalValue = inputTotal.render().attr("value");

    expect(totalValue).toEqual("10");

    //inputTotal.render().attr("value");

    //expect(wrapper).toMatchSnapshot();
  });
  afterEach(() => {
    wrapper.unmount();
  });
});
