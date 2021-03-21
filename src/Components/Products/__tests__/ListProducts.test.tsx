import { Provider } from "react-redux";
import rendered from "react-test-renderer";
import { ProductReducer, ProductsState } from "../../../store/Reducers/ProductReducer";
import { store } from "../../../store/Store";
import ConnectedListProduct, { mapStateToProps } from "../ConnectedListProduct";
import delay from "redux-saga";

const getMockState = ():ProductsState => {
  return {
     product: {Description:"", Id:0, Price:0},
     listProducts: [{
            Description: "description",
            Id: 10,
            Price: 25
          },{
            Description: "description2",
            Id: 11,
            Price: 25
          },{
            Description: "description3",
            Id: 12,
            Price: 25
          },
          {
            Description: "description4",
            Id: 13,
            Price: 25
          }],
      total: 0
  }
}



describe("List Products Component Tests", () => {
  let state: ProductsState; 

  beforeEach(() => {
    state = getMockState();
  });

it.only("Should render as expected", () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
      ).toJSON();

      expect(tree).toMatchSnapshot();
  })

   it("Should total be equal to zero when the component is rendered", async () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    await delay();

    const instance = tree.root;
    const component = instance.findByProps({ id: "txtTotal" } );

    const text = component.props.value; // this going to get the text

    expect(text).toEqual(0);
  })
  it("Should calculate using the component", async () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
    );

    await delay();

    const instance = tree.root;
    const component = instance.findByProps({ id: "txtTotal" } );

    const text = component.props.value; // this going to get the text

    expect(text).toEqual(0);
  })

  it("Should Props be correct", () =>{

    const componentProps = mapStateToProps(state);
    
    expect(componentProps.total).toEqual(0);
    expect(componentProps.products.length).toEqual(4);
  });
  it("Should total calculation", () => {
    
    const newstate = ProductReducer(state, {
      type: "CALCULATE_TOTAL",
      payload: state
    });

    expect(newstate.total).toEqual(100);
  });
})