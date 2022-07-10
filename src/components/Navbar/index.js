import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
  } from './NavbarElements';


const Navbar = ({ toggle }) => {

    return (
        <Nav>
            <NavLink to = "/">
                <img src = "/Portfolio-Website/assets/images/home.png" width= "40" height = "40" alt = "home icon"></img>
            </NavLink>
            <Bars onClick={toggle}></Bars>
            <NavMenu>
                <NavLink to = "/About" activeStyle>
                  About  
                </NavLink>
                <NavLink to = "/" activeStyle>
                  Blog  
                </NavLink>
                <NavLink to = "/games" activeStyle>
                  Games
                </NavLink>
                <NavLink to = "/contact" activeStyle>
                  Contact 
                </NavLink>
            </NavMenu>
            <NavBtn>
                <a href = "https://github.com/JesusCValencia">
                <img src = "/Portfolio-Website/assets/images/github.png" width= "40" height = "40"></img></a>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;