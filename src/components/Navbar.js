import React from 'react'
import "./Navbarstyles.css"
import {Link} from "react-router-dom"
import Logo from "../assets/logo.svg"
const Navbar = () => {
  return (
    
        <div className="header">
        <Link to={"/"}>
            <img className="qube" src={Logo} alt="logo"/>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/">Homee</Link>
            </li>
            <li>
                <Link to="/service">Services</Link>
            </li>
            <li>
                <Link to="/datascience">Data Science</Link>
            </li>
            <li>
                <Link to="/techno">Technologies</Link>
            </li>
            <li>
                <Link to="/aboutus">About us</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact" className="contact">Contact us</Link>
            </li>
            

        </ul>
    </div>
    
  )
}

export default Navbar