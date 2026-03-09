import "./Contact.css";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_delrjta", // Service ID
      "template_2nu7lo6", // Template ID
      e.target,
      "zOFsO88yeUbp8r9t7", // Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message.");
    });
};

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="page-title">Contact</h1>
        <div className="contact-info-card">
          <h2>Get in touch</h2>
          <p className="contact-email">
            Email: <a href="mailto:notommyri@gmail.com">notommyri@gmail.com</a>
          </p>
          <div className="contact-divider"></div>
          <p className="contact-phone">
            Phone: <a href="tel:+393336607624">+39 333 660 7624</a>
          </p>
        </div>
        <div>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-group form-group-message">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="7"
                required
              ></textarea>
            </div>
            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
