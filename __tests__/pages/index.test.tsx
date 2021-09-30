import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";

describe("Home page", () => {
  it("Should render a heading with text: 'Chat'", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /chat/i
    });

    expect(heading).toBeInTheDocument();
  });
});
