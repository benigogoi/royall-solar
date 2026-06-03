import { featuredKits } from '../data/siteContent';
import './FeaturedKits.css';

const FeaturedKits = () => {
  return (
    <section className="section featured-kits-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Complete Solar Energy Services</h2>
          <p className="section-subtitle">Solutions that help homes, businesses, and industries reduce electricity costs.</p>
        </div>

        <div className="kits-grid">
          {featuredKits.map((kit) => (
            <div key={kit.id} className="kit-card">
              {kit.badge && <span className="kit-badge">{kit.badge}</span>}
              <div className="kit-image">
                <img src={kit.image} alt={kit.name} />
              </div>
              <div className="kit-content">
                <h3>{kit.name}</h3>
                {kit.tag && <p className="kit-tag">{kit.tag}</p>}
                {kit.discount && <span className="kit-discount">{kit.discount}</span>}
                <div className="kit-footer">
                  <button className="view-product-btn">Request Quote</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <button className="btn btn-secondary btn-lg">Request a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedKits;
