import React from 'react'
import './Navbar.scss'
import 'animate.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
        <nav>
            <div className="nav-link-left">
                <span className="nav-link-hover">
                    <NavLink
                    exact="true"
                    activeclassname="active"
                    className="home-link nav-link animate__animated animate__fadeInDown animate-slow"
                    to="/">
                        <span className="nav-text">Shreyas</span>
                    </NavLink>
                </span>
            </div>

            <div className="nav-link-right">
                <span className="nav-link-hover">
                    <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link nav-link animate__animated animate__fadeInDown animate-slow animate__delay-1"
                    to="/about">
                        <span className="nav-text">About</span>
                    </NavLink>
                </span>

                <span className="nav-link-hover">
                    <NavLink
                    exact="true"
                    activeclassname="active"
                    className="projects-link nav-link animate__animated animate__fadeInDown animate-slow animate__delay-2"
                    to="/projects">
                        <span className="nav-text">Projects</span>
                    </NavLink>
                </span>

                <span className="nav-link-hover">
                    <NavLink
                    exact="true"
                    activeclassname="active"
                    className="experience-link nav-link animate__animated animate__fadeInDown animate-slow animate__delay-3"
                    to="/experience">
                        <span className="nav-text">Experience</span>
                    </NavLink>
                </span>

                <span className="nav-link-hover">
                    <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link nav-link animate__animated animate__fadeInDown animate-slow animate__delay-4"
                    to="/contact">
                        <span className="nav-text">Contact</span>
                    </NavLink>
                </span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar