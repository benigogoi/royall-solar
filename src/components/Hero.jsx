import { contactDetails, heroHighlights } from '../data/siteContent';
import { Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
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
          <h1>Powering Assam with Smart Solar Energy Solutions</h1>
          <p>Royall Solar delivers complete <strong>residential, commercial, and industrial solar solutions</strong> across Assam. From rooftop solar systems and hybrid installations to batteries, inverters, and power backup solutions, we help customers reduce electricity costs and achieve energy independence.</p>
          
          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', margin: '16px 0 24px', letterSpacing: '0.2px' }}>
            Trusted Solar EPC Partner Serving Homes, Businesses & Industries Across Assam
          </div>
          
          <div className="hero-ctas">
            <a href={`tel:${contactDetails.mobilePhone}`} className="btn btn-primary">
              <Phone size={20} style={{ marginRight: '10px' }} />
              Get Free Consultation
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <MessageSquare size={20} style={{ marginRight: '10px' }} />
              Request a Quote
            </a>
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
