import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import './Footer.css';
import { contactDetails } from '../data/siteContent';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo-cropped.png" alt="Royall Solar" className="logo-image footer-logo-image" />
          </div>
          <p className="footer-desc">
            Royall Solar provides rooftop solar installation, government subsidy support, 
            and after-sales maintenance across Assam. A unit of Royal Infratech, Sonari.
          </p>
          <div className="footer-cta-row">
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="footer-cta-btn">
              <Phone size={16} /> Call Now
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="footer-cta-btn footer-cta-wa">
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Products</h4>
          <Link to="/products">Rooftop Solar</Link>
          <Link to="/products">Solar Water Pump</Link>
          <Link to="/products">Solar Inverter</Link>
          <Link to="/products">Solar Street Light</Link>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/dealership">Dealership</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h4>Useful Info</h4>
          <Link to="/support">PM Surya Ghar</Link>
          <Link to="/support">Net Metering</Link>
          <Link to="/certifications">Our Brands</Link>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
      </div>

      <div className="footer-contact-bar">
        <span><Phone size={18} /> {contactDetails.carePhone} | {contactDetails.mobilePhone}</span>
        <span><MapPin size={18} /> Sonari, Charaideo, Assam</span>
        <span><Mail size={18} /> {contactDetails.email}</span>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royall Solar — Assam's Trusted Solar Partner</p>
      </div>
    </footer>
  );
};

export default Footer;
