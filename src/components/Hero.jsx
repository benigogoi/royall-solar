import { Home, Building2, Factory, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text-content">
          <h1>Built for the North East.<br />Powered by the Sun.</h1>
          <p className="hero-subheadline">Trusted rooftop solar solutions for homes and businesses across the region.</p>
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
              <div className="solar-image-circle">
                <img src="/assets/assam_home_solar.png" alt="Solar for Homes in Assam" className="solar-circle-img" />
              </div>
              <h4>Homes</h4>
              <p>Save up to 90% on electricity bills</p>
            </div>
            <div className="solar-card">
              <div className="solar-image-circle">
                <img src="/assets/assam_society_solar.png" alt="Solar for Housing Societies in Assam" className="solar-circle-img" />
              </div>
              <h4>Housing Societies</h4>
              <p>Reduce common-area power costs</p>
            </div>
            <div className="solar-card">
              <div className="solar-image-circle">
                <img src="/assets/assam_commercial_solar.png" alt="Solar for Commercial in Assam" className="solar-circle-img" />
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
