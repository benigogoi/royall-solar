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
    <section id="about" className="section bg-subtle">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="section-title text-left">
            Assam's Trusted Partner for Solar Energy
          </h2>
          <div className="about-text">
            <p>At Royall Solar, we make it easy for Assamese families and business owners to switch to solar. We don't just sell panels; we provide a complete solution that includes subsidy help and local maintenance.</p>
            <p>Based in Sonari, we are always available for on-ground support. Our team ensures that your system is installed correctly to withstand local weather conditions while providing maximum savings.</p>
          </div>

          <div className="about-features">
            {aboutPillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <div key={pillar.title} className="about-feature">
                  <div className="about-icon-box">
                    <Icon className="about-icon" size={24} />
                  </div>
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
            <img src="/assets/installations/home_solar.jpg" alt="Royall Solar installation" />
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
              <span>PM Surya Ghar Checklist</span>
              <h3>Required Documents for Application</h3>
            </div>
          </div>
          <ul>
            {documentsRequired.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        </div>

        <div className="brand-card">
          <span className="brand-label">We Deal In Genuine Brands</span>
          <div className="brand-grid">
            {brandPartners.map((brand) => (
              <div key={brand} className="brand-item">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
