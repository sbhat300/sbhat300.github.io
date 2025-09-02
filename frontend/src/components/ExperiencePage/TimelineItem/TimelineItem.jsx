import React, { useEffect, useState } from 'react'
import './TimelineItem.scss'
import { motion } from 'framer-motion'
import 'animate.css'


const TimelineItem = ({title, start, end, company, description, even}) => {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.div 
        className="timeline-item"
        initial={{ opacity: 0, x: (even || isNarrowScreen) ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5}}}
        viewport={{ once: false, amount: .3}}
      >
        <div className="timeline-dot" />
        <div className={`timeline-connector ${even ? "right-align-connector" :  "left-align-connector"}`} />
        <div className={`timeline-content ${even && "right-align"}`}>
          <h1>{title}</h1>
          <h2>{company}</h2>
          <h3>{`${start} to ${end}`}</h3>
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  )
}

export default TimelineItem;