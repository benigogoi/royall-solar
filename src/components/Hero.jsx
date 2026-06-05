import { contactDetails, heroHighlights } from '../data/siteContent';
import { Phone, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <CheckCircle2 size={16} />
            <span>Solar EPC Company Serving All Assam</span>
          </div>
          <h1>Save money on electricity with trusted solar solutions across Assam.</h1>
          <p>Royall Solar delivers complete <strong>residential, commercial, and industrial solar solutions</strong> across Assam. From rooftop solar systems and hybrid installations to batteries, inverters, and power backup solutions, we help customers reduce electricity costs and achieve energy independence.</p>
          
          <div className="hero-ctas-container">
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">
                <Phone size={20} style={{ marginRight: '10px' }} />
                Get Free Consultation
              </a>
              <a href="#solutions" className="btn btn-secondary">
                Explore Solutions
              </a>
            </div>
            
            <div className="hero-trust-strip">
              <span className="trust-item"><CheckCircle2 size={14} /> Trusted Across Assam</span>
              <span className="trust-item"><CheckCircle2 size={14} /> Residential & Commercial Solutions</span>
              <span className="trust-item"><CheckCircle2 size={14} /> Quality Installation & Support</span>
            </div>
          </div>

          <div className="hero-features">
            {heroHighlights.map((item, index) => (
              <div key={index} className="hero-feat-item">
                <span className="feat-value">{item.value}</span>
                <span className="feat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-image-side">
          <img src="/assets/royall_solar_hero.png" alt="Residential and commercial solar installation in Assam" className="hero-main-img" />
          <div className="subsidy-sticker">
            <span>ALL ASSAM</span>
            <strong>SOLAR EPC</strong>
            <span>CONSULTATION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
