// import React from 'react';

import "./Contact.css";
import emailjs from "@emailjs/browser";
import ForwardButton from "../ForwardButton/ForwardButton";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_om1tecn",
      "template_dlkq9sq",
      e.target,
      "QmvxzzBJ4pzGDoKyW"
    );
  };

  return (
    <>
      <div className="contactDiv">
        <ForwardButton style={{ display: "flex", alignSelf: "flex-start" }} />
        <div className="contactFormContainer">
          <h1 className="h1_experience">Contact me</h1>
          <p className="p_experience">
            Please contact me directly at
            <a
              href="mailto:natasza.warmuz@gmail.com"
              style={{ fontWeight: "bold" }}
            >
              {" "}
              natasza.warmuz@gmail.com
            </a>{" "}
            or throught this form:
          </p>
        </div>
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="email"
            placeholder="Your email"
            required
            name="emailFrom"
          ></input>

          <textarea
            className="textarea"
            placeholder="Your message"
            required
            name="message"
          ></textarea>
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
