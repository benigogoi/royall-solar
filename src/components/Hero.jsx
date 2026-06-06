import { CheckCircle2, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        {/* Left Content Side */}
        <div className="hero-content">
          <div className="hero-badge">
            <CheckCircle2 size={14} />
            <span>Assam's Trusted Rooftop Solar Partner</span>
          </div>
          <h1>Lower Your Electricity Bills With Rooftop Solar</h1>
          <p className="hero-subheadline">
            Trusted solar solutions for homes, businesses, and industries across Assam.
          </p>
          
          <div className="hero-actions-panel">
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary hero-primary-btn">
                Get Free Consultation
              </a>
              <a href="#solutions" className="hero-secondary-link">
                Explore Solutions <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="hero-trust-strip">
              <span className="trust-item">✓ Trusted Across Assam</span>
              <span className="trust-item">✓ Residential & Commercial Solutions</span>
              <span className="trust-item">✓ Professional Installation & Support</span>
            </div>
          </div>
        </div>
        
        {/* Right Visual Side */}
        <div className="hero-image-side">
          <img src="/assets/installations/home_solar.jpg" alt="Residential rooftop solar setup in Assam" className="hero-main-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
