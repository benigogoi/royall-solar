import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { contactDetails } from '../data/siteContent';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo-cropped.png" alt="Royall Solar" className="logo-image" />
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div className="nav-dropdown-container">
            <button 
              className={`nav-dropdown-trigger ${(location.pathname.includes('/on-grid') || location.pathname.includes('/off-grid') || location.pathname.includes('/hybrid')) ? 'active' : ''}`}
              onClick={() => toggleDropdown('solutions')}
            >
              Solar Solutions <ChevronDown size={14} />
            </button>
            <div className={`nav-dropdown ${activeDropdown === 'solutions' ? 'show' : ''}`}>
              <Link to="/on-grid">On-Grid Solar System</Link>
              <Link to="/off-grid">Off-Grid Solar System</Link>
              <Link to="/hybrid">Hybrid Solar System</Link>
            </div>
          </div>

          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>All Products</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/dealership" className={location.pathname === '/dealership' ? 'active' : ''}>Dealership</Link>
          <Link to="/support" className={location.pathname === '/support' ? 'active' : ''}>Support</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>

          <div className="nav-actions-mobile">
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-primary btn-sm">
              <Phone size={16} /> Call {contactDetails.mobilePhone}
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} className="btn btn-wa btn-sm">
              <MessageSquare size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="nav-actions-desktop">
          <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="nav-phone">
            <div className="phone-icon">
              <Phone size={18} fill="currentColor" />
            </div>
            <div className="phone-text">
              <span>Call us anytime</span>
              <strong>{contactDetails.mobilePhone}</strong>
            </div>
          </a>
          <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-sm">
            <MessageSquare size={18} /> WhatsApp
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
