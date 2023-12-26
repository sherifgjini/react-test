import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe("Greet component", () => {
    test.skip("Component renders", () => {
        render(<Greet />)
        const textContent = screen.getByText(/hi/i);
        expect(textContent).toBeInTheDocument();
    })
    test("Components accepts a name", () => {
        render(<Greet name="Fifi" />)
        const textContent = screen.getByText(/fifi/i);
        expect(textContent).toBeInTheDocument();
    
    })
})