// import React from 'react';

import "./Contact.css";
import ForwardButton from "../ForwardButton/ForwardButton";

import { sendEmail } from "./SendFile";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function Contact() {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    emailFrom: "",
  });

  const handleDetails = (e) => {
    const { name, value } = e.target;

    setDetails((preventDetails) => {
      return {
        ...preventDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendEmail(details);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>

      <div className="contactDiv">
        <ForwardButton style={{ display: "flex", alignSelf: "flex-start" }} />
        <div className="contactFormContainer">
          <h1 className="h1_experience">Contact me</h1>
          <p className="p_Contact">
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
            value={details.emailFrom}
            onChange={handleDetails}
          ></input>
          <input
            className="input"
            type="text"
            placeholder="Subject"
            required
            name="subject"
            value={details.subject}
            onChange={handleDetails}
          ></input>
          <textarea
            className="textarea"
            placeholder="Your message"
            required
            name="message"
            value={details.message}
            onChange={handleDetails}
          ></textarea>
          <button
            className="submitButton"
            type="submit"
            onClick={handleSendEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
