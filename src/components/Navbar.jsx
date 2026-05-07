import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => { if (window.innerWidth > 850) setIsOpen(false); };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Hittade inget element med id='${sectionId}'`);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand"><span className="nav-logo">TG</span></div>

          <div className="nav-links-desktop">

            <button className="nav-text-btn" onClick={() => scrollToSection('about')}>About me</button>
            <button className="nav-text-btn" onClick={() => scrollToSection('skills')}>Skills</button>
            <button className="nav-text-btn" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
            <button className="contact-btn" onClick={() => scrollToSection('contact')}>CONTACT ME</button>
          </div>

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <div className={`nav-overlay ${isOpen ? 'show' : ''}`}>
        <div className="overlay-content">
          <button className="nav-text-btn-mobile" onClick={() => scrollToSection('about')}>About me</button>
          <button className="nav-text-btn-mobile" onClick={() => scrollToSection('skills')}>Skills</button>
          <button className="nav-text-btn-mobile" onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          <button className="contact-btn-mobile" onClick={() => scrollToSection('contact')}>CONTACT ME</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
