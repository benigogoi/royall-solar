import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import QuoteModal from './QuoteModal';
import './Navbar.css';
import { productCategories } from '../data/siteContent';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
          <img src="/logo-cropped.png" alt="Royall Solar" className="logo-image" />
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
                  {productCategories.map(category => (
                    <li 
                      key={category.id} 
                      className={activeCategory.id === category.id ? 'active' : ''}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      {category.navLabel} <ChevronRight size={14} className="chevron" />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mega-menu-content">
                <div className="product-showcase">
                  <div className="main-display">
                    <img src={activeCategory.image} alt={activeCategory.title} className="mega-main-img" />
                  </div>
                  <div className="mega-copy">
                    <h4>{activeCategory.title}</h4>
                    <p>{activeCategory.description}</p>
                  </div>
                  <div className="series-list">
                    {activeCategory.subcategories.map((subcategory) => (
                      <div key={subcategory} className="series-item">
                        <img src={activeCategory.image} alt={subcategory} />
                        <span>{subcategory}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
          <Link to="/dealership" onClick={() => setIsMobileMenuOpen(false)}>DEALERSHIP</Link>
          <Link to="/support" onClick={() => setIsMobileMenuOpen(false)}>SUPPORT</Link>
          <Link to="/certifications" onClick={() => setIsMobileMenuOpen(false)}>BRANDS</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
          
          <button className="btn btn-primary nav-cta" onClick={() => setIsQuoteModalOpen(true)}>GET FREE QUOTE</button>
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
