import "./Contact.css";
import ForwardButton from "../ForwardButton/ForwardButton";
import { sendEmail } from "./SendFile";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    emailFrom: "",
  });

  const handleDetails = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      await sendEmail(details);
      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Error sending email. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>

      <div className="contactDiv">
        <ForwardButton style={{ display: "flex", alignSelf: "flex-start" }} />
        <div className="contactFormContainer">
          <h1 className="h1_Contact">Contact me</h1>
          <p className="p_Contact">
            Please contact me directly at
            <a
              href="mailto:natasza.warmuz@gmail.com"
              style={{ fontWeight: "bold" }}
            >
              {" "}
              natasza.warmuz@gmail.com
            </a>{" "}
            or through this form:
          </p>
        </div>
        <form className="form" onSubmit={handleSendEmail}>
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
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
