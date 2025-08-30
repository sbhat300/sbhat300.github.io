import React from 'react'
import './AboutPage.scss'
import 'animate.css'

const AboutPage = () => {
  return (
    <>
    <div className="about-page-alignment-container">
        <span className="about-text animate__animated animate__fadeInLeft">About Me</span>
        <div className = "about-page-container">
          <span className="about-paragraph animate__animated animate__zoomIn animate-fast">
            I am a self-driven undergraduate student at Rutgers passionate about the intersection of computer graphics, physics, and machine learning.
          </span>
          <span className="about-paragraph animate__animated animate__zoomIn animate-fast animate__delay-1">
            My experiences have taught me a lot about the importance of perseverance and resourcefulness. 
            I never settle for something "just good enough" and strive for excellence in everything I do, whether it be learning new machine learning techniques to train neural networks 
            better or learning new algorithms to improve the performance of my physics engine.
          </span>
          <span className="about-paragraph animate__animated animate__zoomIn animate-fast animate__delay-2">
            I also know the limitations of working alone, and I enjoy working with a diverse group of people. Through multiple experiences, I've learned how to effectively communicate
            my ideas and work through conflicts. All of these experiences have shown me the importance of fostering a community where everyone feels supported.
          </span>
          <span className="about-paragraph animate__animated animate__zoomIn animate-fast animate__delay-3">
            In my free time, I enjoy eating good food (especially sweet treats) and going to cafes with friends. I also enjoy playing video games, some of my favorites being Terraria and Overwatch.
            I also really like cats and birds, so send any cute videos you have my way :{')'}
          </span>
        </div>
      </div>
    </>
  )
}

export default AboutPage