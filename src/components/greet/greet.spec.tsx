import { render, screen } from "@testing-library/react"
import Greet from "./greet"


describe.skip("Greet component", () => {
    xit("renders", () => {
        render(<Greet />)
        const textContent = screen.getByText(/hi/i);
        expect(textContent).toBeInTheDocument();
    })
    it("accepts a name", () => {
        render(<Greet name="Fifi" />)
        const textContent = screen.getByText(/fifi/i);
        expect(textContent).toBeInTheDocument();
    
    })
})