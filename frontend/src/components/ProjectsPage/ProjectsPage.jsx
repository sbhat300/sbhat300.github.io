import React, { useState } from 'react'
import RenderingThumbnail from '../../assets/images/thumbnails/rendering.png'
import PhysicsThumbnail from '../../assets/images/thumbnails/physics.png'
import NeuralNetworkThumbnail from '../../assets/images/thumbnails/nn.png'
import PresentPickerThumbnail from '../../assets/images/thumbnails/present-picker.png'
import LLMThumbnail from '../../assets/images/thumbnails/llm.png'
import EmailSenderThumbnail from '../../assets/images/thumbnails/email-sender.png'
import JOTR2Thumbnail from '../../assets/images/thumbnails/jotr2.png'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal'
import './ProjectsPage.scss'

const ProjectsPage = () => {
  const projects = [{
    thumbnail: RenderingThumbnail,
    title: "Rendering Engine",
    description: "3D rendering engine from scratch in C++ with OpenGL",
    video: "https://www.youtube.com/embed/DOeeO616BBA",
    extendedDescription: "Wrote a 3D rendering engine from scratch in C++ with OpenGL. Implemented Blinn-Phong lighting with support " +
    "for specular, normal, and emission maps. Also implemented post-processing effects (bloom, HDR, blur), anti-aliasing, skyboxes, and " +
    "efficient model loading with face culling. I also ensured the system was modular and easily extensible for future features."
  }, 
  {
    thumbnail: PhysicsThumbnail,
    title: "Physics Engine",
    description: "Constraint based 2D physics engine using C++ and OpenGL",
    video: "https://www.youtube.com/embed/F3CWYdUs4Tk",
    extendedDescription: "Made a constraint based 2D physics engine using C++ and OpenGL. Used concepts from linear algebra, multivariable calculus, " + 
    "and physics to create accurate physics simulations. Learned about Projected Gauss-Seidel, sequential impulses, and various other techniques " + 
    "such as warm starting, block solvers, and fixed timesteps. Made a collision detection program capable of detecting collisions and generating " +
    "contact points between any two convex polygons, a polygon and a ray, and a polygon and a point Used algorithms and data structures such as the " +
    "separating axis theorem, digital differential analyzer, and spatial hash grids."
  }, 
  {
    thumbnail: NeuralNetworkThumbnail,
    title: "Neural Network",
    description: "Generalizable neural network in C++ written from scratch",
    video: "https://www.youtube.com/embed/Lx3Fr4VxyWQ",
    extendedDescription: "Created a neural network with C++. I made it generalizable so the number of input neurons, output neurons, hidden " + 
    "layers, number of hidden layer neurons, and other parameters are easily configurable. I also implemented backpropagation with gradient descent " +
    "to train the network along with momentum, mini-batch processing, and Kaiming Initialization to optimize training."
  },
  {
    thumbnail: PresentPickerThumbnail,
    title: "Present Picker",
    description: "Website that allows users to find multiple gifts in their budget",
    video: "https://www.youtube.com/embed/ZYkZN7mHI30",
    extendedDescription: "Won third place in MLH’s Hacky Winterland 2 hackathon by creating a website that allows users to automatically " +
    "find multiple gifts in their specified budget. Worked on the backend which did web scraping in Python to find and choose the best possible gifts."
  }, 
  {
    thumbnail: LLMThumbnail,
    title: "PyTorch GPT",
    description: "GPT notebook with a lot of notes following Andrej Karpathy's tutorial",
    video: "https://www.youtube.com/embed/H41NgwlAuLs",
    extendedDescription: "Programmed a GPT from scratch using PyTorch. Learned about transformers, embeddings, loss functions, feed forward layers, " +
    "blocks, residual connections, and more. This was made following Andrej Karpathy's tutorial on building a GPT from scratch, but almost every " +
    "line of code as comments explaining what it does, even for things like PyTorch functions."
  }, 
  {
    thumbnail: JOTR2Thumbnail,
    title: "Jai On The Run II",
    description: "Horror game made with Unity based off of my friend",
    video: "https://www.youtube.com/embed/ZYkeZN7mHI30",
    extendedDescription: "3D horror game made with Unity. This project was a collaboration between me, and another friend who is really good at " +
    "making music. The game's two main character's are based off of and voice acted by two of my friends. The game featuers a tutorial along with " +
    "a core gameplay loop, and has lighting effects and enemy AI."
  },
  {
    thumbnail: EmailSenderThumbnail,
    title: "Emailer Bot",
    description: "A bot that emails you every morning with information",
    video: "https://www.youtube.com/embed/5Sz-c8hWrGU",
    extendedDescription: "This was one of my first projects ever made, and uses SMTP and Python to automatically send emails every morning. " +
    "It also uses IMAP to read emails, and you can send emails to it to remind you about things the next morning or use commands to add things like " +
    "birthdays. It also webscrapes with the requests library to get weather data."
  }];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalState, setModalState] = useState({
    title: "",
    video: "",
    description: ""
  });

  const onClose = () => {
    setIsModalOpen(false);
  }

  const handleCardClick = (index) => {
    if(!isModalOpen)
    {
      setModalState({
        title: projects[index].title,
        video: projects[index].video,
        description: projects[index].extendedDescription
      });
      setIsModalOpen(true);
    }
  }

  return (
    <>
    <div className="projects-page-alignment-container">
      <ProjectModal isOpen={isModalOpen} onClose={onClose} title={modalState.title} video={modalState.video} description={modalState.description}/>
      <h1 className="project-header">{"My Projects (Including Some Tests)"}</h1>
      <div className="projects-grid">
        {projects.map((item, index) => {
          return (
          <ProjectCard onCardClick={() => {handleCardClick(index)}} key={index} thumbnail={item.thumbnail} title={item.title} description={item.description} position={index}/>
          );
        })}
      </div>
    </div>
    </>
  )
}

export default ProjectsPage