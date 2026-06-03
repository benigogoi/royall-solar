import './TrustPoints.css';
import { Users, FileCheck, ShieldCheck, HardHat } from 'lucide-react';
import { trustPoints } from '../data/siteContent';

const TrustPoints = () => {
  const icons = [<ShieldCheck size={28} />, <FileCheck size={28} />, <HardHat size={28} />, <Users size={28} />];
  const points = trustPoints.map((point, index) => ({
    ...point,
    desc: point.detail,
    icon: icons[index]
  }));

  return (
    <section className="section trust-points-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Why Choose Royall Solar</h2>
          <p className="section-subtitle">Quality products, customized solutions, professional installation, and end-to-end support.</p>
        </div>

        <div className="trust-points-grid">
          {points.map((point, index) => (
            <div key={index} className="trust-point-card">
              <div className="trust-point-icon">
                {point.icon}
              </div>
              <div className="trust-point-content">
                <h3>{point.title}</h3>
                <p>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
