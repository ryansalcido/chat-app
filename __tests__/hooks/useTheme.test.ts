import { renderHook, act } from "@testing-library/react-hooks";
import { useTheme } from "../../src/hooks/useTheme";
import { mockLocalStorage } from "../../utils/testUtils";

const THEME_KEY = "theme";

describe("useTheme()", () => {
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

  it("Should use the '(prefers-color-scheme: dark)' media query and set theme to dark", () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
      return {
        matches: true,
        media: query
      };
    });
    const { result } = renderHook(() => useTheme());
    const [ theme, ] = result.current;

    expect(theme).toBe("dark");
  });

  it("Should default to light theme", () => {
    const { result } = renderHook(() => useTheme());
    const [ theme, ] = result.current;

    expect(theme).toBe("");
  });

  it("Should toggle from light to dark theme", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current[0]).toBe("");

    act(() => result.current[1]());

    expect(result.current[0]).toBe("dark");
  });

  it("Should use theme set in localStorage", () => {
    localStorage.setItem(THEME_KEY, "dark");
    const { result } = renderHook(() => useTheme());
    const [ theme, ] = result.current;

    expect(theme).toBe("dark");
  });
});
