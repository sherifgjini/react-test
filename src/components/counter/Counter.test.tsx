import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  const getH1 = () => {
    return screen.getByRole("heading", { level: 1 });
  };
  test("Renders correctly", () => {
    render(<Counter />);

    const heading1 = getH1();
    expect(heading1).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Increment" });
    expect(button).toBeInTheDocument();
  });

  test("Renders value 0", () => {
    render(<Counter />);
    const heading1 = getH1();

    expect(heading1).toHaveTextContent("0");
  });
  test("Renders value 1 after clicking", async () => {
    user.setup();
    render(<Counter />);
    const button = screen.getByRole("button", { name: "Increment" });
    await user.click(button);
    const heading1 = getH1();

    expect(heading1).toHaveTextContent("1");
  });

  test("Renders value 10 after user enters value 10", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const heading1 = getH1();

    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.click(setBtn);
    expect(heading1).toHaveTextContent("10");
  });

  // test("Renders value of 10 after clicking", async () => {
  //   user.setup();
  //   render(<Counter />);
  //   const button = screen.getByRole("button", { name: "Increment" });
  //   for (let index = 0; index < 10; index++) {
  //     await user.click(button);
  //   }
  //   const heading1 = screen.getByRole("heading", { level: 1 });
  //   expect(heading1).toHaveTextContent("10");
  // });
});
