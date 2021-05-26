/**
 * @jest-environment jsdom
 */
import { TestComponent } from "../componentTest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import rendered from "react-test-renderer";
import { delay } from "@redux-saga/core/effects";

describe.skip("testing suite for componentTest", () => {
  it("Should has ignacio in it", async () => {
    const tree = render(<TestComponent></TestComponent>);

    const myComponent = screen.getByTestId("txtname");

    expect(myComponent.getAttribute("value")).toBe("asdasd");

    user.click(screen.getByTestId("btn1"));

    expect(myComponent.getAttribute("value")).toBe("Ignacio");
    expect(tree).toMatchSnapshot();
  });
});
