import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {
  it("renders a greeting to the Garden", () => {
   
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const greeting = screen.getByRole("heading", {
      name: /Hello, soil searchers/i
    })
    
    expect(greeting).toBeInTheDocument()
  })
})