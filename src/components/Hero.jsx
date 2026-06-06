import { Home, Building2, Factory } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text-content">
          <h1>Lower Your Electricity Bills<br />With Rooftop Solar</h1>
          <p className="hero-subheadline">
            Trusted solar solutions for homes, businesses, and industries across Assam.
          </p>
          
          <div className="hero-ratings-strip">
            <span className="trust-check">✓</span> Trusted Across Assam 
            <span className="dot-divider">|</span> 
            <span className="trust-check">✓</span> Residential & Commercial Solutions 
            <span className="dot-divider">|</span> 
            <span className="trust-check">✓</span> Professional Support
          </div>
        </div>
      </div>
      
      {/* CTA Button Overlapping Image */}
      <div className="hero-cta-overlap">
        <a href="#contact" className="btn btn-primary hero-center-btn">
          Get Free Consultation <span style={{ marginLeft: '8px' }}>→</span>
        </a>
      </div>

      {/* Wide Banner Image Below */}
      <div className="hero-banner-image-wrapper">
        <img 
          src="/assets/installations/assamese_family.png" 
          alt="Happy Assamese family with rooftop solar installation" 
          className="hero-banner-img" 
        />
      </div>

      {/* Get Solar For Section */}
      <div className="container">
        <div className="hero-get-solar-for">
          <div className="get-solar-cards">
            <div className="solar-card">
              <div className="solar-icon-wrapper home-icon">
                <Home size={28} />
              </div>
              <h4>Homes</h4>
              <p>Save up to 90% on electricity bills</p>
            </div>
            <div className="solar-card">
              <div className="solar-icon-wrapper society-icon">
                <Building2 size={28} />
              </div>
              <h4>Housing Societies</h4>
              <p>Reduce common-area power costs</p>
            </div>
            <div className="solar-card">
              <div className="solar-icon-wrapper commercial-icon">
                <Factory size={28} />
              </div>
              <h4>Commercial</h4>
              <p>Power your business with green energy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
