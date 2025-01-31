import React, { useState } from 'react';
import './Contact.css';
import ContactImage from './Contact.svg'; // Import the SVG file
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const emailAddress = 'vidishasawantv@gmail.com';

const handleLinkedln = () => {
  window.open('https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a', '_blank');
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    agree: '',
  });

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let validationErrors: any = {};
    if (!formData.firstName) validationErrors.firstName = 'First name is required';
    if (!formData.lastName) validationErrors.lastName = 'Last name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) validationErrors.email = 'Enter a valid email';
    if (!formData.subject) validationErrors.subject = 'Subject is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    if (!formData.agree) validationErrors.agree = 'You must agree before sending';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Open default mail client
    window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`);
  };

  return (
    <div id='contact' className='contact-container'>
      {/* Left Section - SVG Image */}
      <div className="contact-image">
        <img src={ContactImage} alt="Contact Illustration" />
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-form">
        <h1 className='pagetitle animate__animated animate__fadeInRight'>Contact Me</h1>
        
        <p className='animate__animated animate__fadeInLeft'>
          I'm actively seeking new challenges and opportunities to contribute my skills. 
          Feel free to reach out—I’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label>I agree to send this message</label>
          </div>
          {errors.agree && <span className="error">{errors.agree}</span>}

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="linkedin-section">
          <p>Or connect with me on LinkedIn</p>
          <button className="linkedin-button" onClick={handleLinkedln}>
            LinkedIn <ArrowCircleRightIcon className="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
