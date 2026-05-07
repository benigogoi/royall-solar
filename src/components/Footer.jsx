import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
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
            Royall Solar, a unit of Royal Infratech, provides rooftop solar systems, subsidy guidance, loan support,
            professional installation, and after-sales service from Sonari, Charaideo.
          </p>
          <div className="social-links">
            <a href="/" aria-label="Website"><Globe size={20} /></a>
            <a href={`mailto:${contactDetails.email}`} aria-label="Email"><Mail size={20} /></a>
            <a href={`tel:${contactDetails.carePhone.replace(/[^+\d]/g, '')}`} aria-label="Phone"><Phone size={20} /></a>
            <a href="/contact" aria-label="Location"><MapPin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Products</h4>
          <Link to="/products">Rooftop Solar</Link>
          <Link to="/products">Solar Panels</Link>
          <Link to="/products">Batteries</Link>
          <Link to="/products">Inverters and Batteries</Link>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/dealership">Dealership</Link>
          <Link to="/support">Support</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-links">
          <h4>Assurance</h4>
          <Link to="/support">Shipping and Payments</Link>
          <Link to="/support">Loan Documents</Link>
          <Link to="/certifications">Premium Brands</Link>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
      </div>
      <div className="footer-contact-bar">
        <span><Phone size={18} /> {contactDetails.carePhone}, {contactDetails.mobilePhone}</span>
        <span><MapPin size={18} /> {contactDetails.office}</span>
        <span><Globe size={18} /> {contactDetails.website}</span>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royall Solar. Clean energy, smart choice, better tomorrow.</p>
      </div>
    </footer>
  );
};

export default Footer;
