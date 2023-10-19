import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
  it("renders an image on the NotFound page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )

    screen.debug() 
    screen.logTestingPlaygroundURL() 

    const notFoundImage = screen.getByTestId("not-found-test")
   
    expect(notFoundImage).toBeInTheDocument()
  })
})