import React, { useEffect } from 'react'
import './ProjectModal.scss'

const ProjectModal = ({isOpen, onClose, title, video, description}) => {
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
          <span className="project-description">{description}</span>
        </div>
      </div>
    </>
  )
}

export default ProjectModal