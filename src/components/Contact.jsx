import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title text-left">Connect With Us</h2>
          <p className="contact-desc">
            Ready to transition to endless, clean energy? Get in touch with our experts today for a customized quote tailored to your energy needs.
          </p>
          
          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:hello@royalsolar.co.in" className="detail-link">hello@royalsolar.co.in</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <a href="tel:+919876543210" className="detail-link">+91 98765 43210</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Office</span>
              <span className="detail-text">Tech Park, Phase 1, Bangalore, India</span>
            </div>
          </div>
        </div>
        
        <div className="glass-panel form-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@company.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Interested Service</label>
              <select id="service">
                <option value="rooftop">Rooftop Solar</option>
                <option value="storage">Lithium Storage</option>
                <option value="pcu">Power Conditioners (PCU)</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
