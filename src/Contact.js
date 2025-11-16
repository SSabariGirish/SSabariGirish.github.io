import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.3
    }
  }
};

function ContactForm() {
  const [state, handleSubmit] = useForm('xdkywrgw'); 

  if (state.succeeded) {
    return (
      <div className="form-success-message">
        <h3>Thanks for your message!</h3>
        <p>I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" className="form-submit-button" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}


function Contact() {
  return (
    <motion.section 
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-form-wrapper">
          <p>
            Have a question or want to work together? Send me a message 
            using the form below.
          </p>
          <ContactForm />
        </div>
        
        <div className="contact-links-wrapper">
          <p>You can also reach me at:</p>
          <div className="contact-links">
            <a href="mailto:sabarigirish28nov@gmail.com">
              sabarigirish28nov@gmail.com
            </a>
            <p>Location: Cardiff, United Kingdom</p>
            <a href="https://www.linkedin.com/in/sabari-girish-srinivasan/" target="_blank" rel="noopener noreferrer">
              My LinkedIn Profile
            </a>
            <a href="https://github.com/SSabariGirish" target="_blank" rel="noopener noreferrer">
              My GitHub Profile
            </a>
          </div>
        </div>
      </div>

    </motion.section>
  );
}

export default Contact;