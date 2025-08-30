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
  // Toast state: { type: 'none' | 'sending' | 'success' | 'error', fadeOut: boolean }
  const [toast, setToast] = useState({ type: 'none', fadeOut: false });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsClicked(true);
    setToast({ type: 'sending', fadeOut: false });
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setToast({ type: 'sending', fadeOut: true });
      setTimeout(() => {
        setToast({ type: 'success', fadeOut: false });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setToast({ type: 'success', fadeOut: true });
          setTimeout(() => {
            setToast({ type: 'none', fadeOut: false });
            setIsClicked(false);
          }, 500); 
        }, 1500); 
      }, 500); 
    } catch (error) {
      setToast({ type: 'sending', fadeOut: true });
      setTimeout(() => {
        setToast({ type: 'error', fadeOut: false });
        setTimeout(() => {
          setToast({ type: 'error', fadeOut: true });
          setTimeout(() => {
            setToast({ type: 'none', fadeOut: false });
            setIsClicked(false);
          }, 500);
        }, 1500);
      }, 500);
      console.error('Error sending email:', error);
    }
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
            <button className="contact-submit-button" type="submit" disabled={isClicked}>Send Message</button>
          </div>
        </form>
        {toast.type === 'sending' && (
          <div className={`email-toast-notification email-toast-sending animate__animated animate__fast ${toast.fadeOut ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
            Email sending...
          </div>
        )}
        {toast.type === 'success' && (
          <div className={`email-toast-notification email-toast-success animate__animated animate__fast ${toast.fadeOut ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
            Email sent!
          </div>
        )}
        {toast.type === 'error' && (
          <div className={`email-toast-notification email-toast-error animate__animated animate__fast ${toast.fadeOut ? 'animate__fadeOut' : 'animate__fadeIn'}`}>
            Error sending email
          </div>
        )}
      </div>
    </>
  )
}

export default ContactPage;