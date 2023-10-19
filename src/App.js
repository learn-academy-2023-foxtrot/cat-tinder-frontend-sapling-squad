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

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<PlantIndex  plants={plants} />}/>
      <Route path="/plantsShow" element={<PlantShow />}/>
      <Route path="/plantsNew" element={<PlantNew />} />
      <Route path="/plantsEdit" element={<PlantEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
