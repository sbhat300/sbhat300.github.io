import React from 'react'
import TimelineItem from './TimelineItem/TimelineItem'
import "./ExperiencePage.scss"
import "animate.css"

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      start: "Jul 2025",
      end: "Aug 2025",
      company: "Code Four",
      description: [
        "Led the development and deployment of a full stack Google Chrome extension",  
        "Developed a full stack website for law enforcement, serving a nationwide user base",     
        "Built core products using React, Express, Node, and Google Cloud Services",  
        "Engineered REST APIs for efficient multimedia data processing",
        "Led a project and collaborated with a small team to use computer vision to automate security camera monitoring, using LLMs for automated report generation",
        "Developed a context-aware chatbot that analyzes diverse sources to provide comprehensive answers and edit reports"
      ]
    },
    {
      title: "Undergraduate Researcher",
      start: "Jan 2025",
      end: "Present",
      company: "Rutgers-New Brunswick",
      description: [
        "Using machine learning to determine what real snowflakes shapes can be predicted through a non-fourier diffusion algorithm",
        "Using Python with the Taichi framework to compute gradients and analyze the loss between predicted and actual snowflakes to learn about its parameters",
        "Learned about loss functions, optimization algorithms, and differentiable physics methods such as checkpointing"
      ]
    },
    {
      title: "Officer",
      start: "Aug 2023",
      end: "Jan 2024",
      company: "Computer Science Remastered",
      description: [
        "Volunteered at a non profit organization that aims to provide free education on computer science to people",
        "Taught kids and created lesson plans and projects"
      ]
    },
    {
      title: "Database Engineer",
      start: "Apr 2023",
      end: "Aug 2023",
      company: "Codinate",
      description: [
        "Created an API using boto3 and Python to read, modify, and delete from an Amazon DynamoDB database for of a site with 450+ international users",
        "Communicated with a group of developers to document my work and progress for others to easily build off of"
      ]
    }
  ];

  return (
    <>
      <div className="experience-page-alignment-container">
        <div className="timeline-container">
          {experiences.map((data, index) => (
            <TimelineItem 
              key={index}
              title={data.title}
              start={data.start}
              end={data.end}
              company={data.company}
              description={data.description}
              even={index % 2 === 0}
            />
          ))}
        </div>
        <div class="timeline-line animate__animated animate__fadeInUp animate__fast"></div>
      </div>
    </>
  )
}

export default ExperiencePage