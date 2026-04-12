import { ArrowRight, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-orb primary"></div>
        <div className="glow-orb secondary"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">
            <Zap size={16} className="badge-icon" />
            <span>Powering the Future of Energy</span>
          </div>
          
          <h1 className="hero-title">
            Unleash the Power of the Sun with <span className="text-gradient">Royall Solar</span>
          </h1>
          
          <p className="hero-subtitle">
            Premium rooftop solar solutions, power conditioners, and advanced energy storage systems engineered for 2026.
          </p>
          
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Explore Solutions <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline">Consult an Expert</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glass-panel visual-panel" style={{ padding: 0, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
            <img src="/hero_solar.png" alt="Premium Residential Solar Installation" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
