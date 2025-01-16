import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Sri Harsha Injam
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Technical Skills</a>
        </li>
        <li>
          <a href="#testimonials">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sri-harsha-injam/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Harsha-on-web">
          <FaGithub />
        </a>
        {/* <a href="https://leetcode.com/DivyasriN/">
          <SiLeetcode/>
        </a> */}
      </div>
      <div className="footer__copyright">
        <small>&copy; Sri Harsha Injam. All rights reserved</small>
      </div>
    </footer>
    </section>
    
  );
};

export default Footer;
