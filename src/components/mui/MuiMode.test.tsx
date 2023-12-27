import {render, screen} from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("Mui", () => {
    test("Renders Dark mode", () => {
        render(<MuiMode />);
        const heading1 = screen.getByRole("heading");
        expect(heading1).toHaveTextContent("dark mode")
    })
})