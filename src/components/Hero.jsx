import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-split">
        <div className="hero-left">
          <div className="hero-content">
            <div className="brand-logo">TG</div>
            <p className="greeting">Hi, I am</p>
            <h1 className="main-name">Tomasz Gajda</h1>
            <p className="sub-title">Front-end Developer / UI Designer</p>

            <div className="social-box-row">
              <div className="social-square"><i className="fas fa-at"></i></div>
              <div className="social-square"><i className="fab fa-github"></i></div>
              <div className="social-square"><i className="fab fa-linkedin-in"></i></div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/image 17.png" alt="Tomasz" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
