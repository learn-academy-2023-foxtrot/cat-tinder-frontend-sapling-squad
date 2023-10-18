import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import headerImage from "../assets/header.jpg"

const Header = () => {
    return (
        <>
        <Navbar
          className="my-2"
          color="success"
          fixed="top"
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