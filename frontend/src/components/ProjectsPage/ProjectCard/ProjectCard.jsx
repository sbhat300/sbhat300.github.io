import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({title, thumbnail, description, position, onCardClick}) => {
  return (
    <>
    <div onClick={onCardClick} className={`project-card animate__animated animate__flipInX animate__delay-${position} animate__fast`}>
      <img className="thumbnail" src={thumbnail} alt="thumbnail"/>
      <div className="card-contents">
        <h1>{title}</h1>
        {description}
      </div>
    </div>
    </>
  )
}

export default ProjectCard