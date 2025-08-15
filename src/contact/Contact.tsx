import React, { useState, useEffect } from 'react';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const emailAddress = 'vidishasawantv@gmail.com';

const handleLinkedln = () => {
  window.open('https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a', '_blank');
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ fullName: '', email: '', subject: '', message: '' });
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
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
    <section
        id="contact"
        className=" page-shell flex items-center justify-center"
      >
    <div className="flex flex-wrap justify-center items-center w-full gap-10 p-10">
      <div className="md:w-1/2 w-full text-left p-[5vw] pt-0 max-md:text-center">
        <h1 className="text-4xl font-bold">Let's chat.</h1>
        <h3 className="mt-4 mb-4">
          I’m looking for new full-time opportunity in 2025 and available to join immediately and open to relocation.
          I’d love to connect and explore ways I can contribute to your team and discuss more!
        </h3>
        <p>Connect with me on LinkedIn:</p>
        <button
          className="border-2 border-[#0077b5] text-[#0077b5] py-2 px-4 rounded flex items-center gap-1 transition-colors hover:bg-[#0077b5] hover:text-white w-48"
          onClick={handleLinkedln}
        >
          LinkedIn <ArrowCircleRightIcon className="text-lg" />
        </button>
        <p className="mt-4">Let’s create something together ✨</p>
      </div>
      <div className="md:w-1/3 w-full max-w-md bg-white p-10 rounded-xl shadow-lg mt-8 md:mt-0">
        {!submitted ? (
          <>
            <h2 className="text-center text-xl mb-4">Send me a message 🚀</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded resize-none"
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <button type="submit" className="bg-orange-600 text-white py-3 rounded w-full hover:bg-orange-700">
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl">Thank you! 🎉</h2>
            <p>Your message has been sent successfully.</p>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default Contact;
