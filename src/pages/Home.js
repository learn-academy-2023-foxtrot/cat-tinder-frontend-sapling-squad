import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../assets/plantfinderlogo.jpeg"

const Home = () => {
    return (
        <>
        <body> 
        <div className="home-container">
            <h2 className="intro">💐Welcome to our Garden!💐</h2>
            <h3 className="intro-sentence"> Hello, soil searchers! Your future plant partner is just a click away.</h3>
            <div className="logo-button">
                <img src={Logo} alt="Logo for FloraFinder" className="home-logo"></img>
                <button className="view-plants">
                    <NavLink to="./plants" className="button-text">
                        View Plants
                    </NavLink>
                </button>
            </div>
        </div>
        </body>
        </>
    )
}


export default Home