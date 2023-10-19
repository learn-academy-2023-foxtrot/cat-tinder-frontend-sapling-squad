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
    - We import the cat objects inside of App.js

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
```