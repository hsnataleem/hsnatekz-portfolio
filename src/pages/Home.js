import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
import CommentBox from "../components/Comments/CommentBox";
import Dropdown from "../components/Dropdown/Dropdown";

function Home() {
  const [theme, setTheme] = useState('light');
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);

  return (
    <>
      <Header toggle={toggle} toggleTheme={toggleTheme} theme={theme} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <CommentBox />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
