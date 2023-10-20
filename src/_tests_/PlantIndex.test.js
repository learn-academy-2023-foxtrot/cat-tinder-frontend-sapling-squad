import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import PlantIndex from "../pages/PlantIndex"
import mockPlants from "../mockPlants"

describe("PlantIndex", () => {
    it("has an image", () => {
        render(
            <BrowserRouter>
                <PlantIndex plants={mockPlants} />
            </BrowserRouter>
        )
        mockPlants.forEach((plant) => {
            const altTxt = screen.getAllByAltText(/profile picture for/i)
            screen.debug(altTxt[0])
            expect(altTxt[0]).toBeInTheDocument()
            
            const plantImage = screen.getByRole('img', { name: /profile picture for Prayer Plant/i })

            expect(plantImage).toHaveAttribute('src', 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60')
            expect(plantImage).toHaveAttribute('alt', 'profile picture for Prayer Plant')
        })
    })
})