import { ArrowRight, BadgeIndianRupee, CheckCircle2 } from 'lucide-react';
import './FeaturedProducts.css';
import { featuredProducts, processSteps, subsidyRows, trustPoints } from '../data/siteContent';

const FeaturedProducts = () => {
  return (
    <section id="products" className="section featured-products-section">
      <div className="container">
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <div key={point.title} className="trust-card">
              <CheckCircle2 size={28} />
              <p className="trust-title">{point.title}</p>
              <span className="trust-detail">{point.detail}</span>
            </div>
          ))}
        </div>

        <h2 className="section-title">
          Reliable <span className="text-gradient-alt">Solar Packages</span>
        </h2>
        <p className="section-subtitle">
          Explore our professionally designed solar solutions tailored for maximum energy savings 
          and long-term reliability for your home or business.
        </p>

        <div className="featured-products-grid">
          {featuredProducts.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-tag">{product.tag}</div>
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>

              <div className="product-pricing">
                <span className="product-old-price">{product.originalPrice}</span>
                <span className="product-price">{product.price}</span>
              </div>

              <ul className="product-details">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <a href="/contact" className="btn btn-primary product-btn">
                Get Free Quote <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>

        <div className="subsidy-panel">
          <div className="subsidy-copy">
            <span className="section-label"><BadgeIndianRupee size={18} /> PM Surya Ghar</span>
            <h3>Government subsidy support for eligible homes</h3>
            <p>
              Royall Solar assists customers with the application journey, system installation, inspection, and
              subsidy release steps under PM Surya Ghar: Muft Bijli Yojana.
            </p>
          </div>
          <div className="subsidy-table-wrap">
            <table className="subsidy-table">
              <thead>
                <tr>
                  <th>Capacity</th>
                  <th>Central Subsidy</th>
                  <th>Assam Subsidy</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {subsidyRows.map((row) => (
                  <tr key={row.capacity}>
                    <td data-label="Capacity">{row.capacity}</td>
                    <td data-label="Central Subsidy">{row.central}</td>
                    <td data-label="Assam Subsidy">{row.assam}</td>
                    <td data-label="Total">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="process-flow">
          {processSteps.map((step, index) => (
            <div key={step} className="process-step">
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
