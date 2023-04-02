import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import Header from "../Header";

test('Header should be there', () => { 
    const header = screen.getByText("Emoji Search")
    render(<App />)
    expect(header).toBeInTheDocument()
})