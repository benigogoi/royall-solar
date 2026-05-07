import { Activity, Battery, FileCheck2, HousePlus, PanelsTopLeft, ShieldCheck, Sun } from 'lucide-react';
import './Services.css';
import { benefits, productCategories } from '../data/siteContent';

const iconMap = {
  rooftop: <Sun size={34} />,
  panels: <PanelsTopLeft size={34} />,
  batteries: <Battery size={34} />,
  inverters: <HousePlus size={34} />,
  loan: <FileCheck2 size={34} />,
  care: <ShieldCheck size={34} />,
  pcu: <Activity size={34} />,
};

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Products <span className="text-gradient-alt">Categories</span></h2>
        <p className="section-subtitle">
          Browse Royall Solar the way customers expect from a solar marketplace: rooftop systems, panels,
          inverters, batteries, loan help, and installation support in one place.
        </p>

        <div className="services-grid">
          {productCategories.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-body">
                <div className="service-icon-wrapper">{iconMap[service.id]}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="benefits-strip">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="benefit-item">
              <strong>{benefit.title}</strong>
              <span>{benefit.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
