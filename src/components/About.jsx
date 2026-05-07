import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header-box">
        <h2>ABOUT ME</h2>
      </div>

      <p className="about-intro">
        I'm a front-end developer with a passion for creating clean, responsive, and user-friendly websites. 
        I focus on writing semantic code and designing interfaces that provide a great user experience.
      </p>

      <div className="explore-container">
        <span className="v-line">|</span>
        <span className="explore-text">WHAT I DO</span>
        <span className="v-line">|</span>
      </div>

      <div className="separator dark">
        <span className="sep-line"></span>
        <span className="sep-icon">\\\V//</span>
        <span className="sep-line"></span>
      </div>

      <div className="services-container">
        <div className="service-item design">
          <h3>DESIGN</h3>
          <p>I create modern, intuitive designs tailored to your brand. From wireframes to final UI, I focus on usability and visual appeal.</p>
        </div>
        <div className="service-item development">
          <h3>DEVELOPMENT</h3>
          <p>I build responsive, fast, and accessible websites using React, HTML5, CSS3, and modern JavaScript.</p>
        </div>
        <div className="service-item maintenance">
          <h3>MAINTENANCE</h3>
          <p>I provide ongoing support, updates, and performance optimization to keep your site running smoothly.</p>
        </div>
      </div>

      <div className="separator dark">
        <span className="sep-line"></span>
        <span className="sep-icon">\\\V//</span>
        <span className="sep-line"></span>
      </div>
    </section>
  );
};

export default About;