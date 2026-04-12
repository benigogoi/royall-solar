import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, ChevronDown, ChevronRight } from 'lucide-react';
import QuoteModal from './QuoteModal';
import './Navbar.css';

const PRODUCT_CATEGORIES = [
  { id: 'interactive', name: 'LINE INTERACTIVE UPS', images: ['/solar_battery.png'] },
  { id: 'single_phase', name: 'ONLINE SINGLE PHASE UPS', images: ['/solar_battery.png', '/solar_battery.png'] },
  { id: 'three_phase', name: 'ONLINE 3 PHASE UPS', images: ['/solar_battery.png'] },
  { id: 'modular', name: 'MODULAR UPS', images: ['/solar_battery.png'] },
  { id: 'li_ion', name: 'LI-ion Based ESS', images: ['/solar_battery.png'] },
  { id: 'solar', name: 'SOLAR PLANT', images: ['/hero_solar.png'] },
  { id: 'stabilizer', name: 'INDUSTRIAL STABILIZER', images: ['/solar_battery.png'] },
  { id: 'charger', name: 'FLOAT CUM BOOST CHARGER', images: ['/solar_battery.png'] },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[1]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Sun className="logo-icon" size={28} />
          <span className="logo-text">ROYALL<span className="text-gradient">SOLAR</span></span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
          
          <div className="dropdown">
            <Link to="/products" className="dropdown-toggle" onClick={() => setIsMobileMenuOpen(false)}>
              PRODUCTS <ChevronDown size={14} style={{ marginLeft: '4px' }} />
            </Link>
            <div className="mega-menu">
              <div className="mega-menu-sidebar">
                <ul>
                  {PRODUCT_CATEGORIES.map(category => (
                    <li 
                      key={category.id} 
                      className={activeCategory.id === category.id ? 'active' : ''}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      {category.name} <ChevronRight size={14} className="chevron" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-menu-content">
                <div className="product-showcase">
                  <div className="main-display">
                    <img src={activeCategory.images[0]} alt={activeCategory.name} className="mega-main-img" />
                  </div>
                  <div className="series-list">
                    <div className="series-item">
                      <img src={activeCategory.images[0]} alt="BP Series" />
                      <span>BP Series</span>
                    </div>
                    {activeCategory.images.length > 1 && (
                      <div className="series-item">
                        <img src={activeCategory.images[1]} alt="HR Series" />
                        <span>HR Series</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
          <Link to="/clients" onClick={() => setIsMobileMenuOpen(false)}>CLIENTS</Link>
          <Link to="/support" onClick={() => setIsMobileMenuOpen(false)}>OUR SUPPORT</Link>
          <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)}>CERTIFICATIONS</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          
          <button className="btn btn-primary nav-cta" onClick={() => setIsQuoteModalOpen(true)}>GET A QUOTE</button>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
