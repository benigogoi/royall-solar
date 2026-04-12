import { Sun, Mail, Phone, MapPin, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Sun className="logo-icon" size={28} />
            <span className="logo-text">ROYALL<span className="text-gradient">SOLAR</span></span>
          </div>
          <p className="footer-desc">
            Empowering the world with innovative and sustainable renewable energy solutions. Royall Solar Solutions is dedicated to a greener future.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Website"><Globe size={20} /></a>
            <a href="#" aria-label="Email"><Mail size={20} /></a>
            <a href="#" aria-label="Phone"><Phone size={20} /></a>
            <a href="#" aria-label="Location"><MapPin size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Solutions</h4>
          <a href="#">Rooftop Solar</a>
          <a href="#">Lithium Storage</a>
          <a href="#">Power Conditioners</a>
          <a href="#">Microgrids</a>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Partners</a>
          <a href="#">News & Blog</a>
        </div>

        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Warranty Details</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Royall Solar Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
