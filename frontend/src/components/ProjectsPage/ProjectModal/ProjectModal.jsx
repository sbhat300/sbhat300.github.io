import React, { useEffect } from 'react'
import './ProjectModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectModal = ({isOpen, onClose, title, video, description, github}) => {
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isOpen) {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
  }, [isOpen, onClose]);
  if(!isOpen) return null;
  return (
    <>
      <div className="project-modal-alignment-container" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
          <div className="modal-header">
            <h1>{title}</h1>
            <iframe src={video} title="PreviewVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="modal-contents">
            <div className="project-description">{description}</div>
            <a target="_blank" rel="noreferrer" href={github}>
              <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffffff" />
            </a>  
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectModal