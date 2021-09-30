import React from "react";
import { useRouter } from "next/router";
import { render, screen, fireEvent } from "@testing-library/react";
import Custom500 from "../../src/pages/500";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

describe("500 error page", () => {
  it("Should render a heading with text: 'Sorry, an unexpected error occurred.'", () => {
    render(<Custom500 />);

    const heading = screen.getByRole("heading", {
      name: /sorry, an unexpected error occurred./i
    });

    expect(heading).toBeInTheDocument();
  });

  it("Should route to Home page when button is clicked", () => {
    const mockRouter = {
      push: jest.fn()
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    const mockRouterPush = jest.spyOn(mockRouter, "push");
    const { getByText } = render(<Custom500 />);

    const goToHomeButton = getByText("Go to Home");
    fireEvent.click(goToHomeButton);

    expect(mockRouterPush).toHaveBeenCalledWith("/");
  });
});
