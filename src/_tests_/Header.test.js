import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'

describe("<Header />", () => {
    it("renders a greeting to our garden", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const greetingLink = screen.getByRole("link", { name: /FloraFinder/i })
        expect(greetingLink).toBeInTheDocument()
    })
})