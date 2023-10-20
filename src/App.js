import React, { useState } from "react"
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
  console.log("plants",plants)

  const createPlant = (newPlant) => {
    console.log("Plant has been created", newPlant)
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
