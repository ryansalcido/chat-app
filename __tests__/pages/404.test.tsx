import React from "react";
import { useRouter } from "next/router";
import { render, screen, fireEvent } from "@testing-library/react";
import Custom404 from "../../src/pages/404";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

describe("404 error page", () => {
  it("Should render a heading with text: 'Oh, no! Page not found.'", () => {
    render(<Custom404 />);

    const heading = screen.getByRole("heading", {
      name: /oh, no! page not found./i
    });

    expect(heading).toBeInTheDocument();
  });

  it("Should route to Home page when button is clicked", () => {
    const mockRouter = {
      push: jest.fn()
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    const mockRouterPush = jest.spyOn(mockRouter, "push");

    const { getByText } = render(<Custom404 />);

    const goToHomeButton = getByText("Go to Home");
    fireEvent.click(goToHomeButton);

    expect(mockRouterPush).toHaveBeenCalledWith("/");
  });
});
