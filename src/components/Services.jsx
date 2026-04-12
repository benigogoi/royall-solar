import { Sun, Battery, Activity } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Sun size={40} />,
    title: 'Rooftop Solar Systems',
    description: 'High-efficiency monocrystalline solar panels engineered to maximize power generation for residential and corporate roofs.',
    features: ['25-Year Warranty', 'Tier-1 Modules', 'Smart Inverters']
  },
  {
    icon: <Battery size={40} />,
    title: 'Lithium Energy Storage',
    description: 'Next-generation lithium-ion battery packs offering deep discharge capabilities and unparalleled lifespan.',
    features: ['Fast Charging', 'Zero Maintenance', 'Compact Design']
  },
  {
    icon: <Activity size={40} />,
    title: 'Power Conditioners (PCU)',
    description: 'Intelligent solar PCUs that seamlessly manage grid, solar, and battery power to ensure uninterrupted supply.',
    features: ['MPPT Technology', 'Grid Interactive', 'Remote Monitoring']
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient-alt">Solutions</span></h2>
        <p className="section-subtitle">
          Cutting-edge products designed to bring energy independence and absolute reliability to your infrastructure.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-panel service-card transition-delay" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <div className="feature-dot"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
