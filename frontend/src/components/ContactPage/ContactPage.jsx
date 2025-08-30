import React, { useRef, useState } from 'react'
import './ContactPage.scss'
import 'animate.css'

const ContactPage = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClick = (e) => {
    setIsClicked(true); 
    sendEmail(e);

     setTimeout(() => {
      setIsClicked(false);
    }, 1000); 
  }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <div className="contact-page-alignment-container">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="contact-page-container animate__animated animate__backInDown animate-fast">
            <span className="contact-header">Get In Touch</span>
              <input className="contact-text-input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
              <input className="contact-text-input" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
              <textarea className="contact-text-input contact-text-message" type="text" name = "message" placeholder="Message" value={formData.message} onChange={handleChange}/>
            <button type="submit" className="contact-submit-button" onClick={handleClick} disabled={isClicked}>Send Message</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactPage;