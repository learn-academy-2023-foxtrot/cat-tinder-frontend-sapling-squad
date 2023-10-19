import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders a greeting to the Flow Master space", () => {
   
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const greeting = screen.getByRole("heading", {
      name: /Your future plant partner is just a swipe away/i
    })
    
    expect(greeting).toBeInTheDocument()
  })
})