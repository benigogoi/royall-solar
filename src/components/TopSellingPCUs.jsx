import { topSellingPCUs } from '../data/siteContent';
import './TopSellingPCUs.css';

const TopSellingPCUs = () => {
  return (
    <section className="section top-pcu-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Leading Solar & Power Backup Brands</h2>
          <p className="section-subtitle">We work with trusted brands including UTL, Luminous, Livguard, Exide, Microtek, Havells, Waaree, Adani Solar, and other leading manufacturers.</p>
        </div>

        <div className="pcu-grid">
          {topSellingPCUs.map((item) => (
            <div key={item.id} className="pcu-card">
              <div className="pcu-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="pcu-info">
                <h3>{item.name}</h3>
                <p className="pcu-tag">{item.tag}</p>
                <div className="pcu-footer">
                  <button className="pcu-view-btn">Ask Availability</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPCUs;
