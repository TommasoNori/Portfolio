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
        <div>
          <form action="" className="contact-form">
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
