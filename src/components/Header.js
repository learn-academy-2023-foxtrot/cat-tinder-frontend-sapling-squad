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