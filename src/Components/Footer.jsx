import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowUp } from 'react-icons/ai';
import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Founder" />

        <h2>Priyanshu Saini</h2>
        <p>Priyanshu Protofilo Project</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://x.com/Priyanshu_2506"><AiFillTwitterCircle /></a>
          <a href="https://github.com/priyanshu324"><AiFillGithub /></a>
          <a href="www.linkedin.com/in/priyanshusaini324"><AiFillLinkedin /></a>
        </article>
      </aside>

      <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  );
};

export default Footer;