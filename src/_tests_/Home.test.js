import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders a description of our garden", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        screen.logTestingPlaygroundURL()

        const homeHeading = screen.getByRole("heading", {
            name: "Welcome to our Garden!"
        })
        expect(homeHeading).toBeInTheDocument()
    })
})