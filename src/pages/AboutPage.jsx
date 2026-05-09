import PageHeader from '../components/PageHeader';
import { CheckCircle2, MapPin, Users, Wrench, ShieldCheck, History } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const areas = [
    'Sonari', 'Sivasagar', 'Jorhat', 'Dibrugarh', 'Tinsukia', 'Golaghat',
    'Nazira', 'Charaideo', 'Majuli', 'Mariani', 'Duliajan', 'Digboi'
  ];

  return (
    <div className="about-page">
      <PageHeader 
        title="Our Story" 
        subtitle="Trusted local solar experts serving Assam with pride and technical excellence." 
        bgImage="/assets/installations/home_solar.jpg" 
      />
      
      <section className="section company-history">
        <div className="container history-grid">
          <div className="history-text">
            <div className="section-badge">Established in Sonari</div>
            <h2 className="section-title text-left">From a Small Local Initiative to Assam's Solar Leaders</h2>
            <p>Royall Solar was founded with a single mission: to make solar energy accessible, affordable, and reliable for every household in Assam. We realized that while national brands existed, they lacked the local presence needed to provide quick maintenance and support in our region.</p>
            <p>Based in Sonari, Charaideo, we have grown into a team of certified engineers and technicians who understand the unique weather conditions and structural requirements of Assamese homes. We don't just sell products; we build long-term relationships through technical honesty and superior after-sales service.</p>
          </div>
          <div className="history-visual">
             <div className="history-card">
                <History size={48} className="history-icon" />
                <h3>Local Expertise</h3>
                <p>100+ successful installations across Upper Assam, helping families save lakhs on electricity bills.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="section bg-subtle areas-section">
        <div className="container">
          <h2 className="section-title">Serving Our Community</h2>
          <p className="section-subtitle">We provide on-ground technical support in the following areas. Our team is never more than a few hours away from your location.</p>
          <div className="areas-grid">
            {areas.map((area) => (
              <div key={area} className="area-tag">
                <MapPin size={16} className="pin-icon" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-box">
                <Users size={24} />
              </div>
              <h3>Assamese Roots</h3>
              <p>Our entire team is from Assam. We speak your language and understand your specific energy needs better than anyone else.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <Wrench size={24} />
              </div>
              <h3>Maintenance Guarantee</h3>
              <p>Solar is a 25-year investment. We provide regular check-ups and quick repair services so your system never stops producing.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Technical Integrity</h3>
              <p>We only use ALMM-listed panels and BIS-certified inverters. No cheap alternatives — only products we would use on our own homes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white stats-banner">
        <div className="container stats-flex">
          <div className="stat-box">
            <strong>100+</strong>
            <span>Happy Families</span>
          </div>
          <div className="stat-box">
            <strong>25 Yrs</strong>
            <span>Panel Warranty</span>
          </div>
          <div className="stat-box">
            <strong>1 Hr</strong>
            <span>Service Response</span>
          </div>
          <div className="stat-box">
            <strong>90%</strong>
            <span>Bill Savings</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
