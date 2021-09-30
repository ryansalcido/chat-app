import React from "react";
import { render } from "@testing-library/react";
import InternalServerErrorImage from "../../src/components/InternalServerErrorImage";

describe("InternalServerErrorImage", () => {
  it("Should render the image with one className", () => {
    const { container } = render(<InternalServerErrorImage className="w-1/5" />);
    const svgElement = container.querySelector("svg");

    expect(svgElement).toHaveClass("w-1/5");
  });

  it("Should render the image with two classNames", () => {
    const { container } = render(<InternalServerErrorImage className="w-3/5 h-2/5" />);
    const svgElement = container.querySelector("svg");

    expect(svgElement).toHaveClass("w-3/5");
    expect(svgElement).toHaveClass("h-2/5");
  });
});
