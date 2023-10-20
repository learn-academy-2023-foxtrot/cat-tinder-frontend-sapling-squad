import React, { useState, useEffect } from "react"
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
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    readPlant()
  }, [])
  const readPlant = () => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((payload) => setPlants(payload)) 
      .catch((error) => console.log(error))
  }
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

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<PlantIndex  plants={plants} />}/>
      <Route path="/plantsShow/:id" element={<PlantShow plants={plants} />}/>
      <Route path="/plantsNew" element={<PlantNew createPlant={createPlant}/>} />
      <Route path="/plantsEdit" element={<PlantEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
