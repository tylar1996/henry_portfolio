function Hero() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-main">
            <h1>Front-End Developer👋</h1>
            <p>
              Hello, I am Henry Mou. A passionate Front-end developer based in
              U.K. Manchester 📍
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
            <div className="tech-stack">
              <p>Tech Stack </p>
              <img src="/src/assets/html.svg" />
              <img src="/src/assets/js.svg" />
              <img src="/src/assets/react.svg" />
              <img src="/src/assets/tailwind.svg" />
            </div>
          </div>
          <div className="icon">icon</div>
        </div>
      </section>
    </>
  );
}

export default Hero;
