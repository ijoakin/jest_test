import { Provider } from "react-redux";
import rendered from "react-test-renderer";
import { ProductReducer, ProductsState } from "../../Store/Reducers/ProductReducer";
import { store } from "../../Store/Store";
import ConnectedListProduct, { mapStateToProps } from "../ConnectedListProduct";

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

it("Should render as expected", () => {
    const tree = rendered.create(
      <Provider store={store}>
        <ConnectedListProduct></ConnectedListProduct>
      </Provider>
      ).toJSON();

      expect(tree).toMatchSnapshot();
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