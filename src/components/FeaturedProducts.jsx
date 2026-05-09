import { featuredProducts } from '../data/siteContent';
import { Check, Phone } from 'lucide-react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="section bg-subtle" id="products">
      <div className="container">
        <h2 className="section-title">Recommended Solar Packages</h2>
        <p className="section-subtitle">Most popular choices for Assamese households and farms.</p>
        
        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-badge">{product.tag}</div>
              <div className="product-category">{product.category}</div>
              <h3>{product.name}</h3>
              <div className="product-price-box">
                <span className="price-label">{product.originalPrice}</span>
                <div className="current-price">{product.price}</div>
              </div>
              <ul className="product-details">
                {product.details.map((detail, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    {detail}
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary w-full" style={{ width: '100%', marginTop: '24px' }}>
                <Phone size={18} style={{ marginRight: '8px' }} />
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
