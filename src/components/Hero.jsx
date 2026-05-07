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
            Power your home with <span>Royall Solar</span>
          </h1>

          <p className="hero-kicker">Go solar. Save more. Live brighter.</p>

          <p className="hero-subtitle">
            Complete 3 kW rooftop solar systems with subsidy guidance, bank loan support,
            professional installation, and net-metering assistance from Sonari, Charaideo.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              View 3 kW Packages <ArrowRight size={19} />
            </a>
            <a href={`tel:${contactDetails.mobilePhone.replace(/[^+\d]/g, '')}`} className="btn btn-outline">
              <Phone size={18} /> Call Now
            </a>
          </div>

          <div className="hero-proof">
            <span><BadgeIndianRupee size={18} /> Subsidy support</span>
            <span><ShieldCheck size={18} /> 25 years warranty</span>
            <span><Leaf size={18} /> Clean energy</span>
          </div>
        </div>

        <div className="hero-showcase" aria-label="Royall Solar rooftop system highlight">
          <div className="showcase-image">
            <img src="/hero_solar.png" alt="Modern home with rooftop solar panels" />
          </div>

          <div className="offer-card">
            <span>Special Discount</span>
            <strong>Rs. 2,500 off</strong>
            <p>Per 3 kW connection</p>
          </div>

          <div className="subsidy-card">
            <BadgeIndianRupee size={26} />
            <div>
              <span>Total subsidy up to</span>
              <strong>Rs. 1,30,800*</strong>
            </div>
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
            <span>360-430 units monthly generation estimate</span>
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
