import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // جلب القيم من الحقول
    const name = e.target.querySelector('input[placeholder="ENTER YOUR NAME*"]').value;
    const email = e.target.querySelector('input[placeholder="ENTER YOUR EMAIL*"]').value;
    const phone = e.target.querySelector('input[placeholder="PHONE NUMBER"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // طباعة رسالة في الـ window
    window.alert(`📧 Message Sent!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`);
    
    // اختياري: مسح الحقول بعد الإرسال
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">CONTACT</h2>
      </div>

      <p className="contact-intro">
       I'm a passionate front-end developer with experience in building modern, responsive web applications. 
       I focus on creating clean, user-friendly interfaces with attention to detail and performance. 
      Based in Daraa, I help clients worldwide bring their digital ideas to life.
      </p>

      <div className="separator">
        <span className="sep-line"></span>
        <span className="sep-icon">\\\V//</span>
        <span className="sep-line"></span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="ENTER YOUR NAME*" required />
        </div>

        <div className="input-group">
          <input type="email" placeholder="ENTER YOUR EMAIL*" required />
        </div>

        <div className="input-group">
          <input type="tel" placeholder="PHONE NUMBER" />
        </div>

        <div className="input-group">
          <textarea placeholder="YOUR MESSAGE*" rows="5" required></textarea>
        </div>

        <div className="submit-container">
          <span className="submit-line"></span>
          <button type="submit" className="submit-btn">SUBMIT</button>
          <span className="submit-line"></span>
        </div>
      </form>
    </section>
  );
};

export default Contact;