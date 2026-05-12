import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ItBerries from './components/ItBerries';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const LoadingScreen = () => (
  <div className="loading-container">
    <div className="loading-content">
      <h1 className="loading-logo">TG</h1>
      <div className="loader"></div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navbar />

      <div data-aos="fade-zoom-in">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <ItBerries />
      </div>

      <div data-aos="fade-left">
        <About />
      </div>

      <div data-aos="zoom-in">
        <Skills />
      </div>

      <div data-aos="fade-up">
        <Portfolio />
      </div>

      <div data-aos="fade-up">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
