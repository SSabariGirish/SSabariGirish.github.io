import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        I'm currently seeking new opportunities in the UK. 
        Feel free to get in touch.
      </p>
      
      <div className="contact-links">
        <a href="mailto:sabarigirish28nov@gmail.com">
          sabarigirish28nov@gmail.com
        </a>
        
        <p>
          Location: Cardiff, United Kingdom
        </p>

        <a href="https://www.linkedin.com/in/sabari-girish-srinivasan/" target="_blank" rel="noopener noreferrer">
          My LinkedIn Profile
        </a>
        <a href="https://github.com/SSabariGirish" target="_blank" rel="noopener noreferrer">
          My GitHub Profile
        </a>

      </div>
    </section>
  );
}

export default Contact;