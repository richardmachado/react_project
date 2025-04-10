import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here (e.g., sending data to a server)
    alert('Message sent (not actually implemented)!');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out if you have any questions or opportunities!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;