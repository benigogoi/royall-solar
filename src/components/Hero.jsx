import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Leaf,
  Phone,
  ShieldCheck,
  Sun,
  Zap,
} from 'lucide-react';
import './Hero.css';
import { bannerSlides, contactDetails, heroHighlights } from '../data/siteContent';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">

          <h1 className="hero-title">
            Cut Your Electricity Bills with <span>Smart Solar Solutions</span>
          </h1>

          <p className="hero-kicker">Reliable. Practical. Premium.</p>

          <p className="hero-subtitle">
            Reliable solar installation for homes and businesses. Save money, reduce power dependency, 
            and enjoy uninterrupted energy with professionally installed solar systems.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get Free Consultation <ArrowRight size={19} />
            </a>
            <a href="#services" className="btn btn-outline">
              <Zap size={18} /> Calculate Your Savings
            </a>
          </div>

          <div className="hero-proof">
            <span><ShieldCheck size={18} /> Professional Installation</span>
            <span><Zap size={18} /> Bill Savings</span>
            <span><Sun size={18} /> Energy Independence</span>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Royall Solar rooftop system highlight">
          <div className="showcase-image">
            <img src="/hero_solar.png" alt="Modern home with rooftop solar panels" />
          </div>

          <div className="offer-card">
            <span>Long-Term</span>
            <strong>Reliability</strong>
            <p>Quality Solar Components</p>
          </div>

            <BadgeIndianRupee size={26} />
            <div>
              <span>Smart Solar</span>
              <strong>Real Savings</strong>
            </div>

          <div className="campaign-stack">
            {bannerSlides.map((slide, index) => (
              <article key={slide.title} style={{ '--delay': `${index * 4}s` }}>
                <CheckCircle2 size={18} />
                <div>
                  <span>{slide.eyebrow}</span>
                  <strong>{slide.title}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="energy-ribbon">
            <Zap size={18} />
            <span>Switch to solar for consistent performance</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats-grid">
          {heroHighlights.map((item) => (
            <div key={item.label} className="stat-item">
              <p>{item.label}</p>
              <h3>{item.value}</h3>
              <span className="stat-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
