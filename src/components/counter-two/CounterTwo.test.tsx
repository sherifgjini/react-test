import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import user from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("Renders correctly", () => {
    render(<CounterTwo count={1} />);
    const heading1 = screen.getByRole("heading");
    expect(heading1).toBeInTheDocument();
  });
  test("Does not Render buttons at the beggining", () => {
    render(<CounterTwo count={1} />);
    const incrementBtn = screen.queryByRole("button", { name: "Increment" });
    expect(incrementBtn).not.toBeInTheDocument();
  });
  //   test("Renders conditionaly increment button", async () => {
  //     const incrementHandler = jest.fn();
  //     render(<CounterTwo count={1} handleIncrement={incrementHandler} />);
  //     const incrementBtn = await screen.findByRole("button", {
  //       name: "Increment",
  //     });
  //     expect(incrementBtn).toBeInTheDocument();
  //   });
  test("Functions are rendering correctly", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={1}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const handleIncrement = screen.getByRole("button", { name: "Increment" });
    const handleDecrement = screen.getByRole("button", { name: "Decrement" });
    await user.click(handleIncrement);
    await user.click(handleDecrement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
