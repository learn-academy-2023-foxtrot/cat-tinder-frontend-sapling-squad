import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import PlantShow from "../pages/PlantShow"
import mockPlants from "../mockPlants"

describe('<PlantShow />', () => {
    it('renders a name', () => {
        render(
            <MemoryRouter initialEntries={["/plantshow/1"]}>
                <Routes>
                    <Route path="/plantshow/:id" element={<PlantShow plants={mockPlants} />} />
                </Routes>
            </MemoryRouter>
        )
        screen.logTestingPlaygroundURL()
        const plantName = screen.getByRole("heading", {
            name: /About/i
        })
        expect(plantName).toHaveTextContent(`About`)
    })
})