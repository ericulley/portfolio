import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  componentDidMount = () => {
    document.querySelector("#email-link").addEventListener("click", () => {
      navigator.clipboard.writeText("ericulley@gmail.com");
    });
  };
  render = () => {
    return (
      <div className="container" id="contact-container">
        <Link to="/">
          <h2 className="back">Eric</h2>
        </Link>
        <h1 className="header">
          &gt;<span id="contact-header">Contact</span>
        </h1>
        <div id="link-container">
          <p className="contact-link" id="email-link"></p>
          <a className="contact-link" href="https://docs.google.com/document/d/1dYWggCb-_3lyHhLo8mdk492iPQA-xB73f3-iousY2xs/export?format=pdf" rel="noreferrer">
            Resume
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/ericculley" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="contact-link" href="https://github.com/ericulley" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    );
  };
}

export default Contact;
