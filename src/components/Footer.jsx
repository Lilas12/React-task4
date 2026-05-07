import './Footer.css';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <a href="#" className="back-to-top" onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
        <p>BACK TO TOP</p>
      </a>

      <div className="footer-logo">
        <span className="logo-badge">TG</span>
      </div>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="mailto:exempel@mail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <p className="copyright">
        @2020 Tomasz Gajda All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
