import React from 'react';
import './Contact.css';
  const emailAddress = 'vidishasawantv@gmail.com';

const handleEmail = () => {
  window.open(`mailto:${emailAddress}`, '_blank');
};
const handleLinkedln = () => {
  window.open('https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a','_blank');
};
const Contact: React.FC = () => {
 return (
    <div id='contact'>
       <div className="row">
        <div className="col-md-11 contactcard">
          <h1 className='title'>Contact Me</h1>
          
          <p>I'm actively seeking new challenges and opportunities to contribute my skills and expertise to impactful projects. Whether it's discussing a potential role, sharing ideas, or simply connecting with fellow professionals in the field, I'm always open to new conversations. Feel free to reach out, I'd love to hear from you!</p>
          <div className="buttonContainer">
            <button className="acceptButton" onClick={handleEmail}>Email</button>
          <button className="declineButton" onClick={handleLinkedln}>Linkedln</button>
          </div>
        </div>
       </div>
    </div>
 );
};

export default Contact;