import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ThemeSwitch from "../../src/components/ThemeSwitch";
import { mockLocalStorage } from "../../utils/testUtils";

describe("ThemeSwitch", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: mockLocalStorage,
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query
      }))
    });
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("Should be set to light theme (false)", () => {
    const mockedToggleTheme = jest.fn();
    jest.mock("../../src/hooks/useTheme", () => ({
      useTheme: () => ([ "", mockedToggleTheme ]),
    }));
    const { getByRole } = render(<ThemeSwitch />);
    const switchRole = getByRole("switch");

    expect(switchRole).not.toBeChecked();
  });

  it("Should be set to dark theme (true)", () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: true,
        media: query
      };
    });
    const mockedToggleTheme = jest.fn();
    jest.mock("../../src/hooks/useTheme", () => ({
      useTheme: () => ([ "dark", mockedToggleTheme ]),
    }));
    const { getByRole } = render(<ThemeSwitch />);
    const switchRole = getByRole("switch");

    expect(switchRole).toBeChecked();
  });

  it("Should toggle from light to dark theme when clicked", () => {
    const mockedToggleTheme = jest.fn();
    jest.mock("../../src/hooks/useTheme", () => ({
      useTheme: () => ([ "dark", mockedToggleTheme ]),
    }));

    const { getByRole } = render(<ThemeSwitch />);
    getByRole("switch").click();
    fireEvent.change(getByRole("switch"), { target: { checked: true } });

    expect(getByRole("switch")).toBeChecked();
  });
});
