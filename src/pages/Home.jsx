import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      <section id="top">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
