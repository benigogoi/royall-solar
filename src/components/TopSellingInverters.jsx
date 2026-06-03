import { topSellingInverters } from '../data/siteContent';
import './TopSellingInverters.css';

const TopSellingInverters = () => {
  return (
    <section className="section top-selling-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Inverters, Batteries & Power Backup</h2>
          <p className="section-subtitle">On-grid, off-grid, hybrid solar, batteries, and online UPS solutions for reliable power.</p>
        </div>

        <div className="inverters-grid">
          {topSellingInverters.map((item) => (
            <div key={item.id} className="inverter-card">
              <div className="inverter-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="inverter-info">
                <h3>{item.name}</h3>
                <div className="price-box">
                  <span className="original-price">{item.originalPrice}</span>
                  <span className="current-price">{item.price}</span>
                  <span className="discount-tag">{item.discount}</span>
                </div>
                <p className="tax-tag">{item.tag}</p>
                <div className="inverter-footer">
                  <button className="view-details-btn">Get Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingInverters;
