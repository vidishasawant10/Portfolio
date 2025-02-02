import React, { useState, useEffect } from 'react';
import './Contact.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const emailAddress = 'vidishasawantv@gmail.com';

const handleLinkedln = () => {
  window.open('https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a', '_blank');
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let validationErrors: any = {};
    if (!formData.fullName) validationErrors.fullName = 'Full name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) validationErrors.email = 'Enter a valid email';
    if (!formData.subject) validationErrors.subject = 'Subject is required';
    if (!formData.message) validationErrors.message = 'Message is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`);
    
    setSubmitted(true);
  };
  return (

    <div className="contact-container">
      <div className="contact-left">
        <h1>Let's chat.</h1> <br /> 
        <h3>I’m looking for new full-time opportunity in 2025 and available to join immediately and open to relocation.
       I’d love to connect and explore ways I can contribute to your team and discuss more!</h3>
        <p>Connect with me on LinkedIn:</p>
            <button className="linkedin-button" onClick={handleLinkedln}>
              LinkedIn <ArrowCircleRightIcon className="arrow-icon" />
            </button>
            <p>Let’s create something together ✨</p>

      </div>
      <div className="contact-card">
        {!submitted ? (
          <>
            <h2 className="title">Send me a message 🚀</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="fullName" placeholder="Full name*" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder="Email address*" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <textarea name="message" placeholder="Message*" rows={4} value={formData.message} onChange={handleChange} />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>

          </>
        ) : (
          <div className="thank-you">
            <h2>Thank you! 🎉</h2>
            <p>Your message has been sent successfully.</p>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
