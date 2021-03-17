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

describe("Products component", () => {
  it("renders as expected", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const prod: Product = {
      description: "description",
      id: 10,
      price: 12,
    };

    const tree = rendered
      .create(<ListProducts prod={prod}></ListProducts>)
      .toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
