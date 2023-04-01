import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let count, increaseBtn, decreaseBtn;

  beforeEach(() => {
    console.log("Her testten önce çalışacağım");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  beforeAll(() => {
    console.log("İlk başta bir kere çalışacağım");
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım");
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});