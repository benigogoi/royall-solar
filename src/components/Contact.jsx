import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';
import { contactDetails, productCategories } from '../data/siteContent';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="contact-label">Call for free consultation</span>
          <h2 className="section-title text-left">Get Your Solar Quote</h2>
          <p className="contact-desc">
            Share your rooftop type, electricity bill, and preferred package. Royall Solar can guide you through
            system size, subsidy, loan documents, installation, and net metering.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <Phone size={22} />
              <div>
                <span className="detail-label">Call Now</span>
                <a href={`tel:${contactDetails.carePhone.replace(/[^+\d]/g, '')}`} className="detail-link">
                  {contactDetails.carePhone}, {contactDetails.mobilePhone}
                </a>
              </div>
            </div>
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
                <span className="detail-label">Visit Us</span>
                <span className="detail-text">{contactDetails.office}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="9707670101" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="name@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="service">Interested Category</label>
              <select id="service">
                {productCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.title}</option>
                ))}
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" rows="4" placeholder="Monthly bill, roof type, location, or system size" />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Enquiry <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
