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
            <span>Assam's Trusted Solar Provider</span>
          </div>
          <h1>Save Up To 90% On Your Monthly Electricity Bill</h1>
          <p>Install high-quality rooftop solar with <strong>Government Subsidy (PM Surya Ghar)</strong> support. Reduce your expenses and enjoy 24/7 free energy.</p>
          
          <div className="hero-ctas">
            <a href={`tel:${contactDetails.mobilePhone}`} className="btn btn-primary">
              <Phone size={20} style={{ marginRight: '10px' }} />
              Call Now: {contactDetails.mobilePhone}
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <MessageSquare size={20} style={{ marginRight: '10px' }} />
              WhatsApp Us
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
          <img src="/assets/hero_family.png" alt="Rooftop Solar Installation in Assam" className="hero-main-img" />
          <div className="subsidy-sticker">
            <span>GET GOVT.</span>
            <strong>SUBSIDY</strong>
            <span>AVAILABLE NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
