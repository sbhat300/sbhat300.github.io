import React from 'react'
import './Navbar.scss'
import 'animate.css';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = [
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
                {links.map((data, index) => (
                    <span className="nav-link-hover">
                        <NavLink
                        exact="true"
                        activeclassname="active"
                        className={`nav-link animate__animated animate__fadeInDown animate-slow animate__delay-${index + 1}`}
                        to={data.link}>
                            <span className="nav-text">{data.title}</span>
                        </NavLink>
                    </span>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar