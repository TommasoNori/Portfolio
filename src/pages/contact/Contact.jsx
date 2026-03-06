import "./Contact.css";

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
      </div>
    </>
  );
}

export default Contact;
