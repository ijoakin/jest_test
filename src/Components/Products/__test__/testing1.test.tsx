/**
 * @jest-environment jsdom
 */
import { fireEvent, getByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { assert } from "node:console";
import { ComponentTest2 } from "../ComponentTest2";
import { TestingComponent1 } from "../TestingComponent1";
import user from "@testing-library/user-event";

export const renderComponent = () => {
  const myComponent = render(<TestingComponent1></TestingComponent1>);

  return myComponent;
};

describe.skip("test suit for TestingComponent1", () => {
  it("should match with the snapshot", () => {
    const myComponent = renderComponent();
    let txtvalue = screen.getByTestId("txtNumber");

    expect(txtvalue.getAttribute("value")).toBe("0");

    const button = screen.getByRole("button", { name: /click me/i });

    userEvent.click(button);

    expect(txtvalue.getAttribute("value")).toBe("10");

    fireEvent.change(txtvalue, {
      target: { value: "12000" },
    });

    txtvalue = screen.getByTestId("txtNumber");

    expect(txtvalue.getAttribute("value")).toBe("12000");

    //const txtValue = myComponent.;
  });
});
