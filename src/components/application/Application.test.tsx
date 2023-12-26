import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", { name: "Name" });
    expect(inputElement).toBeInTheDocument();

    const textAreaElement = screen.getByRole("textbox", { name: "Bio" });
    expect(textAreaElement).toBeInTheDocument();

    const options = screen.getByLabelText("Job location", {selector: "select"});
    expect(options).toBeInTheDocument();


  });
});
