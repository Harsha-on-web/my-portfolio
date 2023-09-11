import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pra4vh",
        "template_lqk2x2r",
        e.target,
        "0VNSxAUJ390da5BEa"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>d.naraharisetti15@gmail.com</h5>
            <a href="mailto:d.naraharisetti15@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Divyasri Naraharisetti</h5>
            <a href="https://www.linkedin.com/in/divyasri-naraharisetti/">
              Let's Connect
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {emailIsSent ? (
          <h2 id="Contact__sent-message">
            Your Message was successfully sent!
          </h2>
        ) : (
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <textarea
              name="message"
              rows="8"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Let's Connect
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
