import { render, screen, logDOM } from "@testing-library/react"
import { Skills } from "./Skills"

describe("Skills", () => {
    const skills = ["1", "2", "3"];

    test("Renders List", () => {
        render(<Skills skills={skills} />)
        const ulElement = screen.getByRole("list");
        expect(ulElement).toBeInTheDocument()
    })

    test("Has 3 items", () => {
        render(<Skills skills={skills} />)
        const listItem = screen.getAllByRole("listitem");
        expect(listItem).toHaveLength(3);
    })

    test("Start learning button is not rendered yet", () => {
        render(<Skills skills={skills} />)
        const startBtn = screen.queryByTestId("start-btn");
        expect(startBtn).not.toBeInTheDocument();
    })

    test("Data are present after maximum 2 seconds", async () => {
       const view = render(<Skills skills={skills} />);
       logDOM(view.container)
        const dynamicData = await screen.findByTestId("d-data", {}, { timeout: 2000});
        expect(dynamicData).toBeInTheDocument();
    })
})