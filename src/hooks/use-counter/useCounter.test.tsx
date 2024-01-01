import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("Initial value should be 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("Should accept and return the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 5,
      },
    });
    expect(result.current.count).toBe(5);
  });

  test("After increment should render value 1", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("After decrement should render value -1", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
