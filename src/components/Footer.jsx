function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer-container">
        <p>
          &copy; Copyright {new Date().getFullYear()} All rights are reserved{" "}
        </p>
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/hm0429/">
            <img
              src="/src/assets/linkedin.png"
              alt="linkedin icon"
              className="linkLogo"
            />
          </a>
          <a href="https://github.com/tylar1996">
            <img
              src="/src/assets/github.png"
              alt="github icon"
              className="gitLogo"
            />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
