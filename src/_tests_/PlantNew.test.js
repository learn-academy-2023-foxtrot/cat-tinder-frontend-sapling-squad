import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PlantNew from "../pages/PlantNew"

describe("<PlantNew />", () => {
    it("renders a heading on the PlantNew page", () => {
        render(
            <BrowserRouter>
                <PlantNew />
            </BrowserRouter>
        )

        screen.debug()
        screen.logTestingPlaygroundURL()

        const newHeading = screen.getByRole("heading", {
            name: /add a plant/i
        })

        screen.debug(newHeading)
        expect(newHeading).toHaveTextContent("Add a Plant")
    })
    it("renders a form with an input field", () => {
        render(
            <BrowserRouter>
                <PlantNew />
            </BrowserRouter>
        )
        const newForm = screen.getByRole("textbox", {
            name: /name/i
        })
        expect(newForm).toHaveAttribute("id")
        expect(newForm).toHaveAttribute("name")
        expect(newForm).toHaveAttribute("placeholder")
        expect(newForm).toHaveAttribute("value")
    })
})