function Contact() {
  const locationUrl =
    "https://www.google.com/maps?q=Manchester,%20United%20Kingdom";

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>Hit me up! Don't be shy!👇</p>
        <div className="info-container">
          <div className="location">
            <img src="src/assets/location.png" alt="location" />
            <div className="info">
              <span className="word">Location</span>
              <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                Manchester, United Kingdom
              </a>
            </div>
          </div>
          <div className="location">
            <img src="src/assets/email.svg" alt="email" />
            <div className="info">
              <span className="word">Email</span>
              <a href="mailto:mwk221221@gmail.com">mwk221221@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
