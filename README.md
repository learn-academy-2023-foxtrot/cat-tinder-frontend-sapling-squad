- Created directories. 
    - components
    - pages
    - assets

- Created files inside the component directory
    - Header.js 
    - Footer.js

- Creates files inside the pages directory
    - Home.js
    - PlantIndex.js
    - PlantShow.js
    - PlantNew.js
    - PlantEdit.js
    - NotFound.js

- We installed Reactstrap and bootstrap. Along with react router-dom

- Then we created routes for all the components inside of App.js
```jsx
import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PlantIndex from "./pages/PlantIndex"
import PlantShow from "./pages/PlantShow"
import PlantNew from "./pages/PlantNew"
import PlantEdit from "./pages/PlantEdit"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import mockPlants from "./mockPlants.js"


const App = () => {
  const [plants, setPlants] = useState(mockPlants)
  console.log(plants)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<PlantIndex />} />
      <Route path="/plantsShow" element={<PlantShow />} />
      <Route path="/plantsNew" element={<PlantNew />} />
      <Route path="/plantsEdit" element={<PlantEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;

```

- Then we created a file in the src directory.
    - mockPlants.js
    - Inside of this file, we added an array of plant objects
```jsx
const plants = [
    {
        id:1,
        name: 'Prayer Plant',
        age: 21,
        enjoys:'Enjoys being in direct sunlight between 60 and 72 degrees',
         image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },{
        id: 2,
        name: 'Cactus',
        age: 67,
        enjoys: 'Enjoys desert temperatures of 100 degrees',
        image: 'https://images.unsplash.com/photo-1533066636271-fdbe3e84ad80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjdHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
    }
]
export default plants
```
- We then import this array of objects into the App.js
```jsx
import mockPlants from "./mockPlants.js"
```

- Now we are styling the header, footer, and not found page
```jsx
// Header
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import headerImage from "../assets/header.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
        <Navbar
          className="my-2"
          color="success"
    
        >
          <NavbarBrand href="/">
            <img
              alt="logo"
              src={headerImage}
              style={{
                height: 100,
                width: 80
              }}
            />
            Welcome to our Garden
          </NavbarBrand>
        </Navbar>
      </>
    )
}
export default Header

// Footer
import React from "react";
import { Navbar } from "reactstrap";

const Footer = () => {
    return (
        <>
            <Navbar fixed="bottom" color="success">
                <p> &copy; 2023 Shaun and Ilene aka The Sapling Squad</p>
            </Navbar>
        </>
    )
}

export default Footer

// We worked on the NotFound page. 
import React from "react";
import notFound from "../assets/notfound.png"
import "../App.css"

const NotFound = () => {
    return (
        <>
            <div>
                <img className="error-image"
                    alt="not-found"
                    src={notFound}
                />
            </div>
        </>
    )
}


export default NotFound
```

- Gave the image a class name and imported App.css
- Added class to App.css
```css
.error-image {
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
```

- Fixed the header by changing its class name from 'my-2' to 'nav-bar'
```jsx
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import headerImage from "../assets/header.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
        <Navbar
          className="nav-bar"
          color="success"
        >
          <NavbarBrand href="/">
            <img
              alt="logo"
              src={headerImage}
              style={{
                height: 100,
                width: 80
              }}
            />
            Welcome to our Garden
          </NavbarBrand>
        </Navbar>
      </>
    )
}


export default Header
```

- Created a _tests_ directory in the src directory and created a Header.test.js file:
(src/_tests_/Header.test.js)
```jsx
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
```
Created a Footer.test.js file in the _tests_ directory:
(src/_tests_/Footer.test.js)
```jsx
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
```
- Created a Home.test.js file in the _tests_ directory:
(src/_tests_/Home.test.js)
```jsx
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
```

- Created a NotFound.test.js file in the _tests_ directory:
(src/_tests_/NotFound.test.js)
```jsx
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
```
- Changed Not found className from 'error-image' to 'not-found-image' in App.css and in NotFound.js.

- NOTE: Make sure when creating mockData your add in the primary keys!! The id: integer!!
```jsx
const plants = [
    {
        id:1,
        name: 'Prayer Plant',
        age: 21,
        enjoys:'Enjoys being in direct sunlight between 60 and 72 degrees',
         image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'
    },{
        id: 2,
        name: 'Cactus',
        age: 67,
        enjoys: 'Enjoys desert temperatures of 100 degrees',
        image: 'https://images.unsplash.com/photo-1533066636271-fdbe3e84ad80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FjdHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
    }
]
export default plants
```

- We started working on the read functionality to have stuff on the pages. We know we have to pass data from on page to another, so we used props inside of App.js to have it transfered onto PlantIndex.js
```jsx
import mockPlants from "./mockPlants.js"

const App = () => {
  const [plants, setPlants] = useState(mockPlants)
  console.log("plants",plants)

  return (
    <>
      <Route path="/plants" element={<PlantIndex  plants={plants} />}/>
    </>
  )
}
```
- We got card from: https://reactstrap.github.io/?path=/docs/components-card--card

- Then we brought the props in from App.js to PlantIndex.js and created to card to store the plants information. This will display on the the page when you have this in the url: http://localhost:3000/plants
```jsx 
import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"

const PlantIndex = ({ plants }) => {
    return (
        <>
            <h2>Plant Index</h2>           
        <main className="card"> 
            {plants?.map((plant, index) => {
                return (
                    <div key={index}>
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                        <img
                            alt={`profile picture for ${plant.name}`}
                            src={plant.image}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {plant.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                 tag="h6"
                            >
                                {plant.age}
                            </CardSubtitle>
                            <Button>
                                <NavLink to={`/plantshow/${plant.id}`} className="nav-link">
                                    Click to view more
                                </NavLink>
                            </Button>
                        </CardBody>
                        </Card>
                    </div>
                )
            })}
        </main>
    </>
    )
}

export default PlantIndex
```
- We had a blocker where the card was not showing up on the page, to solve that we looked back at the App.js. Instead of it being written like this: 
```jsx
<Route path="/plants" element={<PlantIndex />} plants={plants} />
```
- It should be like: 
```jsx 
<Route path="/plants" element={<PlantIndex plants={plants}/>} />
```

Added a PlantIndex.test.js file:
(src/_tests_/PlantIndex.test.js)
```jsx
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
            const altTxt = screen.getByAltText(/profile picture for/i)
            screen.debug(altTxt[0])
            expect(altTxt[0]).toBeInTheDocument()
            
            const plantImage = screen.getByRole('img', { name: /profile picture for Prayer Plant/i })

            expect(plantImage).toHaveAttribute('src', 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllciUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60')
            expect(plantImage).toHaveAttribute('alt', 'profile picture for Prayer Plant')
        })
    })
})
```

Added a PlantShow.test.js file:
(src/_tests_/PlantShow.test.js)
```jsx
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
        const plantName = screen.getByRole("headiing", {
            name: /PlantShow page/i
        })
        expect(plantName).toHaveTextContent("PlantShow page")
    })
})
```

Added PlantShow functionality:
(src/pages/PlantShow.js)
```jsx
import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button } from "reactstrap"


const PlantShow = ({plants}) => {
    const { id } = useParams()
    let currentPlant = plants?.find((plant) => plant.id === +id)
    return (
    <>    
    <h2>About {currentPlant.name}</h2>
    <main className="card">
        {currentPlant && (
    <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="plant profile picture"
          src={currentPlant.image}
        />
        <CardBody>
          <CardTitle tag="h5">
            Plant: {currentPlant.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {currentPlant.age}
          </CardSubtitle>
          <CardText>
            {currentPlant.enjoys}
          </CardText>
          <Button>
             <NavLink to={'/plants'} className="nav-link">
                Go Back
            </NavLink>
            </Button>
        </CardBody>
      </Card>
        )
    }
      </main>
      </>
      )
}


export default PlantShow
```

Added props to App.js:
```jsx
<Route path="/plantsShow/:id" element={<PlantShow plants={plants} />}/>
```

Added some to App.css file:

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  }
```
- Created a prop that we could pass from App.js into PlantNew.js
```jsx
const createPlant = (newPlant) => {
    console.log("Plant has been created", newPlant)
}
<Route path="/plantsNew" element={<PlantNew createPlant={createPlant}/>} />
```

- We started making the form inside of the PlantNew.js, so we can create a new plant profile. 
```jsx
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom";

const PlantNew = ({createPlant}) => {
    const [newPlant, setNewPlant ] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewPlant({...newPlant, [e.target.name]: e.target.value})
    }
    console.log("newPlant", newPlant)

    const handleSubmit = () => {
        createPlant(newPlant)
        navigate("/plants")
    }

return (
    <>
        <h2>Add a Plant</h2>
        <Form>
            <FormGroup>
                <Label for="name">
                    Name
                </Label>
                <Input id="name" name="name" placeholder="Place plant name here" type="text" onChange={handleChange} value={newPlant.name}/>
            </FormGroup>
            <FormGroup>
                <Label for="age">
                    Age
                </Label>
                <Input id="age" name="age" placeholder="Place plant age here" type="number" onChange={handleChange} value={newPlant.age}/>
            </FormGroup>
            <FormGroup>
                <Label for="enjoys">
                    Enjoys
                </Label>
                <Input id="enjoys" name="enjoys" placeholder="Place your enjoys here" type="text" onChange={handleChange} value={newPlant.enjoys}/>
            </FormGroup>
            <FormGroup>
                <Label for="image">
                    Image
                </Label>
                <Input id="image" name="image" placeholder="Place your image url here" type="url" onChange={handleChange} value={newPlant.image}
                />
            </FormGroup>
            < Button onClick={handleSubmit} name="submit">
                Submit
            </Button>
        </Form>
    </>
    )
}


export default PlantNew
```

- Now we wait until we can combine react and rails. The code above will only store the new plant inside of the state, it is not inside of the data. That means it will not show up the page it only redirects it. 

### Fetch 

- We added fetch to our App.js file for read functionality:

```jsx
 useEffect(() => {
    readPlant()
  }, [])
  const readPlant = () => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((payload) => setPlants(payload)) 
      .catch((error) => console.log(error))
  }
```
We added fetch for create functionality in our App.js:

```jsx
const createPlant = (plant) => {
  fetch("http://localhost:3000/plants", {
  body: JSON.stringify(plant),
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
})  
  .then((response) => response.json())
  .then(() => readPlant())
  .catch((errors) => console.log("Plant create errors", errors))
}
```