import React from "react";
import { render } from "@testing-library/react";
import NotFoundImage from "../../src/components/NotFoundImage";

describe("NotFoundImage", () => {
  it("Should render the image with one className", () => {
    const { container } = render(<NotFoundImage className="w-3/5" />);
    const svgElement = container.querySelector("svg");

    expect(svgElement).toHaveClass("w-3/5");
  });

  it("Should render the image with two classNames", () => {
    const { container } = render(<NotFoundImage className="w-3/5 h-3/5" />);
    const svgElement = container.querySelector("svg");

    expect(svgElement).toHaveClass("w-3/5");
    expect(svgElement).toHaveClass("h-3/5");
  });
});
