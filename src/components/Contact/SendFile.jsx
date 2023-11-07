import emailjs from "@emailjs/browser";

const sendEmail = (details) => {
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      emailFrom: details.emailFrom,
      subject: details.subject,
      message: details.message,
    }
  );
};

export { sendEmail };
