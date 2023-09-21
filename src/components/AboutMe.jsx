function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-img">
          <img
            src="/src/assets/people.png"
            alt="emoji"
            className="work-emoji"
          />
          <img src="/src/assets/macbook.jpeg" alt="mac" className="macbook" />
          <img
            src="/src/assets/frontend.svg"
            alt="frontend"
            className="frontend"
          />
        </div>
        <div className="about-content">
          <h2>About Me </h2>
          <h3>A dedicated Front-end Developer based in Manchester UK 🇬🇧 📍</h3>
          <p>
            As a Junior Front-End Developer, I have a strong passion in CSS,
            JavaScript, React, Tailwind, etc. I'm skilled at creating and
            managing responsive websites to ensure a user-friendly experience. I
            specialize in designing interactive and attractive interfaces. and I
            keep up with the latest development tools and techniques. I also
            enjoy working collaboratively with diverse teams to create
            exceptional web applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
