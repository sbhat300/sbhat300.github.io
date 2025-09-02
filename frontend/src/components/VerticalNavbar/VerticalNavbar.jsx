import React from 'react'
import './VerticalNavbar.scss'
import { NavLink } from 'react-router-dom'

const VerticalNavbar = ({onNavbarClose}) => {
  return (
    <>
      <div className="vertical-navbar-container" onClick={onNavbarClose}>
        <button className="navbar-close-btn">
          &times;
        </button>
        <span className="nav-link-hover">
            <NavLink
            exact="true"
            activeclassname="active"
            className="home-link nav-link animate__animated animate__fadeInLeft animate-slow"
            to="/">
                <span className="nav-text">Shreyas</span>
            </NavLink>
        </span>
        <span className="nav-link-hover">
          <NavLink
          exact="true"
          activeclassname="active"
          className="about-link nav-link animate__animated animate__fadeInLeft animate-slow animate__delay-1"
          to="/about">
              <span className="nav-text">About</span>
          </NavLink>
      </span>

      <span className="nav-link-hover">
          <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link nav-link animate__animated animate__fadeInLeft animate-slow animate__delay-2"
          to="/projects">
              <span className="nav-text">Projects</span>
          </NavLink>
      </span>

      <span className="nav-link-hover">
          <NavLink
          exact="true"
          activeclassname="active"
          className="experience-link nav-link animate__animated animate__fadeInLeft animate-slow animate__delay-3"
          to="/experience">
              <span className="nav-text">Experience</span>
          </NavLink>
      </span>

      <span className="nav-link-hover">
          <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link nav-link animate__animated animate__fadeInLeft animate-slow animate__delay-4"
          to="/contact">
              <span className="nav-text">Contact</span>
          </NavLink>
      </span>
      </div>
    </>
  )
}

export default VerticalNavbar