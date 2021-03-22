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

let wrapper: ReactWrapper;

//jest.mock("../../../Services/ProductService.ts");

//const productSevice = require("../../../Services/ProductService").getProducts;

configure({ adapter: new Adapter() });
describe("automation using enzyme", () => {
  beforeAll(() => {});

  it("should render the component", () => {
    let st = store;

    wrapper = mount(
      <Provider store={st}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    const buttonGetValues = wrapper.find({ id: "btnGetProduct" });
    buttonGetValues.simulate("click");

    const button = wrapper.find({ id: "btnGetTotal" });
    button.simulate("click");

    const inputTotal = wrapper.find({ id: "txtTotal" });
    const totalValue = inputTotal.render().attr("value");

    expect(totalValue).toEqual("0");

    //inputTotal.render().attr("value");

    //expect(wrapper).toMatchSnapshot();
  });
});
