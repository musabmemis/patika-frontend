import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ToDo from "./index";

describe("Todo testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak 3 nesne render edlmeli ", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });

  test("should first", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Inputa text girildiğinde listeye eklenmeli", () => {
    // inputu doldur
    const name = "Musab";
    userEvent.type(input, name);
    // butona ekle
    userEvent.click(button);
    // assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
