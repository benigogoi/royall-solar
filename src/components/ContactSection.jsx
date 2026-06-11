import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactSection.css';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { contactDetails } from '../data/siteContent';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Residential Solar Solutions',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello Royall Solar, I would like to request a free consultation & proposal:
- *Name:* ${formData.name}
- *Phone:* ${formData.phone}
- *Requirement:* ${formData.service}
${formData.details ? `- *Additional Info:* ${formData.details}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = contactDetails.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section contact-enhanced-section" id="contact">
      <div className="container">
        <div className="contact-flex-container">
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <span className="contact-eyebrow">Ready to Switch to Solar?</span>
            <h2 className="contact-main-title">Get Free Consultation & Customized Proposal</h2>
            <p className="contact-main-desc">
              Take control of your energy costs with reliable solar solutions from Royall Solar. 
              Contact our team today for a free consultation and customized proposal.
            </p>

            <div className="contact-cards">
              <a href={`tel:${contactDetails.mobilePhone}`} className="contact-info-card">
                <div className="card-icon"><Phone size={20} /></div>
                <div className="card-details">
                  <label>Call Now</label>
                  <span>{contactDetails.mobilePhone}</span>
                </div>
              </a>
              
              <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} className="contact-info-card whatsapp">
                <div className="card-icon">
                   <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.395 0 .01 5.385.008 12.037c0 2.125.541 4.2 1.568 6.059L0 24l6.105-1.602a11.832 11.832 0 005.937 1.583h.005c6.654 0 12.04-5.385 12.042-12.041a11.8 11.8 0 00-3.538-8.528z"/></svg>
                </div>
                <div className="card-details">
                  <label>WhatsApp Us</label>
                  <span>Chat on WhatsApp</span>
                </div>
              </a>

              <a href={`mailto:${contactDetails.email}`} className="contact-info-card">
                <div className="card-icon"><Mail size={20} /></div>
                <div className="card-details">
                  <label>Email</label>
                  <span>{contactDetails.email}</span>
                </div>
              </a>

              <div className="contact-info-card address">
                <div className="card-icon"><MapPin size={20} /></div>
                <div className="card-details">
                  <label>Office</label>
                  <span>{contactDetails.office}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <div className="form-wrapper">
              <h3>Get Started Today</h3>
              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="8135986518" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>What Do You Need?</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Residential Solar Solutions</option>
                    <option>Commercial Solar Systems</option>
                    <option>Industrial Solar Projects</option>
                    <option>Hybrid Solar Systems</option>
                    <option>Solar Water Pump</option>
                    <option>Inverters & Batteries</option>
                    <option>Online UPS</option>
                    <option>Installation & Maintenance Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell Us More (Optional)</label>
                  <textarea 
                    name="details"
                    placeholder="Monthly bill amount, site type, location, backup needs..."
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Get My Free Solar Proposal <Send size={18} />
                </button>
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <Link to="/projects" style={{ color: 'var(--accent-primary)', fontWeight: 700, textDecoration: 'underline', fontSize: '0.95rem' }}>
                    Explore Our Projects
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
