import { ShieldCheck, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-alt">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title text-left">
            Pioneering the <span className="text-gradient">Green Revolution</span>
          </h2>
          <p className="about-text">
            For over a decade, Royall Solar has been at the forefront of the renewable energy sector, delivering unmatched quality and innovation. We believe in empowering businesses and homes with clean, autonomous power solutions that are not only sustainable but financially liberating.
          </p>
          
          <div className="about-features">
            <div className="about-feature">
              <ShieldCheck className="about-icon" size={24} />
              <div>
                <h4>Uncompromising Quality</h4>
                <p>Triple-tested tier-1 components ensuring lifetime durability.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <Target className="about-icon" size={24} />
              <div>
                <h4>Precision Engineering</h4>
                <p>Custom-designed layouts optimized for maximum solar yield.</p>
              </div>
            </div>
            
            <div className="about-feature">
              <Award className="about-icon" size={24} />
              <div>
                <h4>Certified Excellence</h4>
                <p>Global certifications backing every installation we deploy.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-visual">
          <div className="glass-panel image-panel" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
            <img src="/solar_battery.png" alt="Lithium Energy Storage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="floating-badge">
              <span>100% Carbon Neutral</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
