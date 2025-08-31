import React from 'react'
import PlaceholderThumbnail from '../../assets/images/thumbnails/placeholder.jpg'
import RenderingThumbnail from '../../assets/images/thumbnails/rendering.png'
import PhysicsThumbnail from '../../assets/images/thumbnails/physics.png'
import NeuralNetworkThumbnail from '../../assets/images/thumbnails/nn.png'
import PresentPickerThumbnail from '../../assets/images/thumbnails/present-picker.png'
import LLMThumbnail from '../../assets/images/thumbnails/llm.png'
import EmailSenderThumbnail from '../../assets/images/thumbnails/email-sender.png'
import JOTR2Thumbnail from '../../assets/images/thumbnails/jotr2.png'
import ProjectCard from './ProjectCard/ProjectCard'
import './ProjectsPage.scss'

const ProjectsPage = () => {
  const projects = [{
    thumbnail: RenderingThumbnail,
    title: "Rendering Engine",
    description: "3D rendering engine from scratch in C++ with OpenGL"
  }, 
  {
    thumbnail: PhysicsThumbnail,
    title: "Physics Engine",
    description: "Constraint based 2D physics engine using C++ and OpenGL"
  }, 
  {
    thumbnail: NeuralNetworkThumbnail,
    title: "Neural Network",
    description: "Generalizable neural network in C++ written from scratch"
  },
  {
    thumbnail: PresentPickerThumbnail,
    title: "Present Picker",
    description: "Website that allows users to find multiple gifts in their budget"
  }, 
  {
    thumbnail: LLMThumbnail,
    title: "PyTorch GPT",
    description: "GPT notebook with a lot of notes following Andrej Karpathy's tutorial"
  }, 
  {
    thumbnail: EmailSenderThumbnail,
    title: "Emailer Bot",
    description: "A bot that emails you every morning with information"
  },
  {
    thumbnail: JOTR2Thumbnail,
    title: "Jai On The Run II",
    description: "Horror game made with Unity based off of my friend"
  }];

  return (
    <>
    <div className="projects-page-alignment-container">
      <h1 className="project-header">{"My Projects (Including Some Tests)"}</h1>
      <div className="projects-grid">
        {projects.map((item, index) => {
          return (
          <ProjectCard key={index} thumbnail={item.thumbnail} title={item.title} description={item.description} position={index}/>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default ProjectsPage