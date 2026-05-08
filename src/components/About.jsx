import { Award, FileText, ShieldCheck, Target } from 'lucide-react';
import './About.css';
import {
  aboutPillars,
  aboutStats,
  brandPartners,
  documentsRequired,
  testimonials,
} from '../data/siteContent';

const About = () => {
  const icons = [ShieldCheck, Target, Award];

  return (
    <section id="about" className="section bg-alt">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title text-left">
            Smart Solar Solutions Built for <span className="text-gradient">Real Savings</span>
          </h2>
          <div className="about-text">
            <p>At Royall Solar, we help homes and businesses reduce electricity costs with efficient and reliable solar energy systems.</p>
            <p>From consultation to installation and support, our focus is simple — deliver solar solutions that perform consistently and save money for years.</p>
            <p>Whether you want to reduce monthly bills, secure backup power during outages, or invest in long-term energy independence, we build systems tailored to your needs.</p>
          </div>

          <div className="about-features">
            {aboutPillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <div key={pillar.title} className="about-feature">
                  <Icon className="about-icon" size={24} />
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="about-stats-grid">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <span className="about-stat-label">{stat.label}</span>
                <strong className="about-stat-value">{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="image-panel">
            <img src="/hero_solar.png" alt="Royall Solar rooftop system and products" />
            <div className="floating-badge">
              <span>Registered Govt. Vendor</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container about-lower">
        <div className="documents-card">
          <div className="documents-heading">
            <FileText size={26} />
            <div>
              <span>PM Surya loan checklist</span>
              <h3>Required documents for bank loan</h3>
            </div>
          </div>
          <ul>
            {documentsRequired.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card">
          <span>We deal in premium brands</span>
          <div className="brand-grid">
            {brandPartners.map((brand) => (
              <strong key={brand}>{brand}</strong>
            ))}
          </div>
        </div>
      </div>

      <div className="container testimonials-section">
        <h3>Customer Support Customers Can Understand</h3>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <p>{testimonial.text}</p>
              <cite>{testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
