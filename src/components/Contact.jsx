import { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import './Contact.css';
import { contactDetails, productCategories } from '../data/siteContent';

const Contact = ({
  title = "Get Free Site Visit & Quotation",
  label = "Talk To Us Today",
  desc = "Call us or fill the form. Our team will visit your location, check your roof, and give you the best price with full subsidy details.",
  formTitle = "Request Free Quote",
  formDesc = "",
  successMessage = "Thank you for contacting Royall Solar. Our team will review your request and get in touch shortly."
}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="contact-label">{label}</span>
          <h2 className="section-title text-left">{title}</h2>
          <p className="contact-desc">
            {desc}
          </p>

          <div className="contact-details">
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="detail-item detail-item-cta">
              <Phone size={22} />
              <div>
                <span className="detail-label">Call Now</span>
                <span className="detail-link">{contactDetails.mobilePhone}</span>
              </div>
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="detail-item detail-item-wa">
              <MessageSquare size={22} />
              <div>
                <span className="detail-label">WhatsApp Us</span>
                <span className="detail-link">Chat on WhatsApp</span>
              </div>
            </a>
            <div className="detail-item">
              <Mail size={22} />
              <div>
                <span className="detail-label">Email</span>
                <a href={`mailto:${contactDetails.email}`} className="detail-link">{contactDetails.email}</a>
              </div>
            </div>
            <div className="detail-item">
              <MapPin size={22} />
              <div>
                <span className="detail-label">Office</span>
                <span className="detail-text">{contactDetails.office}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-panel">
          <h3 className="form-heading">{formTitle}</h3>
          {formDesc && <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.5 }}>{formDesc}</p>}
          
          {submitted ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', color: '#166534' }}>
              <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>Success!</p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{successMessage}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="9707670101" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">What Do You Need?</label>
                <select id="service">
                  {productCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.title}</option>
                  ))}
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us More (Optional)</label>
                <textarea id="message" rows="3" placeholder="Monthly bill amount, roof type, location..." />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Submit Request <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
