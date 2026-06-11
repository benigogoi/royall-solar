import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="section about-brand-section">
      <div className="container">
        <div className="about-brand-grid">
          <div className="about-brand-content">
            <span className="about-eyebrow">Who We Are</span>
            <h2 className="about-title">Your Trusted Solar Energy Partner Across Assam</h2>
            <p className="about-description">
              Royall Solar provides end-to-end solar energy solutions for homes, businesses, and 
              industries. From consultation and system design to installation and after-sales support, 
              we help customers transition to reliable, cost-effective, and sustainable energy solutions.
            </p>
            <p className="about-description">
              Our team works with leading solar and power backup brands to deliver customized systems 
              that maximize energy savings and long-term performance.
            </p>
            <Link to="/about" className="about-btn">Learn About Royall Solar</Link>
          </div>
          <div className="about-brand-image">
            <img src="/assets/generated_building.png" alt="Royall Solar solar energy office in Assam" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
