import React from 'react'
import './VerticalNavbar.scss'
import { NavLink } from 'react-router-dom'

const VerticalNavbar = ({onNavbarClose}) => {
  const links = [
    {
      title: "Shreyas",
      link: "/"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Projects",
      link: "/projects"
    },
    {
      title: "Experience",
      link: "/experience"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ]

  return (
    <>
      <div className="vertical-navbar-container" onClick={onNavbarClose}>
        <button className="navbar-close-btn">
          &times;
        </button>
        {links.map((data, index) => (
          <span className="nav-link-hover">
              <NavLink
              exact="true"
              activeclassname="active"
              className={`nav-link animate__animated animate__fadeInLeft animate-slow animate__delay-${index}`}
              to={data.link}>
                  <span className="nav-text">{data.title}</span>
              </NavLink>
          </span>
        ))}
      </div>
    </>
  )
}

export default VerticalNavbar