import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders a copyright", () => {
   
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    screen.debug() 
    screen.logTestingPlaygroundURL() 

    const copyRight = screen.getByText(/2023 Shaun and Ilene/i)

    expect(copyRight).toBeInTheDocument()
  })
})