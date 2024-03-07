// @vitest-environment jsdom //npm install -D jsdom
 
// import ReactDOM from "react-dom";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";
import { render, screen } from "@testing-library/react"; //npm install -D @testing-library/react
import userEvent from "@testing-library/user-event"; //npm install -D @testing-library/user-event
 
let user, message;

beforeEach(() => {
    user = userEvent.setup();
    render(<Counter />);
    message = screen.getByText("Counter", { exact: false });
    // usando regex -> screen.getByText(/counter/i);
});
 
describe("Counter", () => {
  test("start with the counter on 0", () => {
    // screen.debug();
 
    expect(message).toHaveTextContent("Counter: 0");
  });
 
  test("increments by one when increment button is clicked", async() => {
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
 
    await user.click(incrementButton);
    expect(message).toHaveTextContent("Counter: 1");
    await user.click(incrementButton);
    expect(message).toHaveTextContent("Counter: 2");
  });
 
  test("decrements by one when decrement button is clicked", async() => {
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });
 
    await user.click(decrementButton);
    expect(message).toHaveTextContent("Counter: -1");
    await user.click(decrementButton);
    expect(message).toHaveTextContent("Counter: -2");
  });
 
  test("resets to 0 when reset button is clicked", async() => {
    const incrementButton = screen.getByRole("button", {
        name: "+",
      });
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });
 
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(resetButton);
    expect(message).toHaveTextContent("Counter: 0");
  });
});