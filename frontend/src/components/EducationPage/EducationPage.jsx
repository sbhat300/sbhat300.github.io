import React from 'react'
import './EducationPage.scss'
import RutgersPicture from '../../assets/images/rutgers.jpg'

const EducationPage = () => {
  return (
    <>
        <div className="education-page-container">
            <div className="rutgers-card">
                <img className="rutgers-picture" src={RutgersPicture} alt="Rutgers"/>
                <div>
                    <h1>Rutgers-New Brunswick</h1>
                    <p className="animate__animated animate__fadeIn animate__delay-0">
                        <b>Degrees: </b>Bachelor of Science in Computer Science, Bachelor of Mathematics
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-1">
                        <b>From: </b>September 2024 - May 2027 (Expected)
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-2">
                        <b>GPA: </b>4.0/4.0
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-3">
                        <b>Related Coursework: </b>Data Structures and Algorithms, Introduction to Linear Algebra, Computer Architecture, Discrete Structures I & II, Systems Programming, Numerical Analysis, Multivariable Calculus
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-4">
                        <b>AP Credit Classes: </b> General Physics, Principles of Computer Science 
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-5">
                        <b>Honors: </b>Dean's List 2024 to Present, Phi Beta Kappa, Rutgers Honors College
                    </p>
                    <p className="animate__animated animate__fadeIn animate__delay-6">
                        <b>Activities: </b>Rutgers Mobile App Development Club, Space Technology Association of Rutgers
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default EducationPage