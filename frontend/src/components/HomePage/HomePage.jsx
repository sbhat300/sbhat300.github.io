import React from 'react'
import ShreyasPicture from '../../assets/images/shreyas-picture.png'
import './HomePage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import 'animate.css';

const HomePage = () => {
  return (
    <>
      <div className="shreyas-picture-container animate__animated animate__zoomIn">
        <img className="shreyas-picture" src={ShreyasPicture} alt="Shreyas"/>

        <span className="title animate__animated animate__zoomIn animate__delay-1">
          Hi, I'm Shreyas!
        </span>

        <span className="description animate__animated animate__zoomIn animate__delay-2">
          I'm a passionate computer science student interested in many fields.
          <br/>
          I have experience with full-stack development, graphics programming, ML, physics simulations, and game dev.
        </span>

        <div className="social-links animate__animated animate__zoomIn animate__delay-3">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sbhatkande/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#ffffff"/>
          </a>

          <a target="_blank" rel="noreferrer" href="https://github.com/sbhat300">
              <FontAwesomeIcon icon={faGithub} size="3x" color="#ffffffff" />
          </a>
        </div>
      </div>
    </>
  )
}

export default HomePage