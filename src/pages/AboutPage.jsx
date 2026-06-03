import PageHeader from '../components/PageHeader';
import { CheckCircle2, Users, Wrench, ShieldCheck, Target, Award, Zap, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const services = [
    {
      title: 'Residential Solar Solutions',
      desc: 'Customized rooftop solar installation systems that help homeowners reduce electricity bills and gain energy independence.'
    },
    {
      title: 'Commercial Solar Solutions',
      desc: 'Scalable commercial solar solutions designed to improve operational efficiency and reduce energy costs for businesses.'
    },
    {
      title: 'Industrial Solar Projects',
      desc: 'Large-scale industrial solar projects engineered for manufacturing units, warehouses and industrial facilities.'
    },
    {
      title: 'Hybrid Solar Systems',
      desc: 'Integrated hybrid solar systems combining solar power, batteries and grid connectivity for uninterrupted performance.'
    },
    {
      title: 'Solar Water Pumps',
      desc: 'Efficient solar-powered pumping solutions for agriculture, irrigation and rural applications.'
    },
    {
      title: 'Power Backup Solutions',
      desc: 'Reliable batteries, inverters and online UPS systems from leading brands.'
    }
  ];

  const whyChooseItems = [
    {
      title: 'Quality Products',
      desc: 'We work with trusted manufacturers and industry-leading brands to ensure reliability and long-term performance.'
    },
    {
      title: 'Expert Team',
      desc: 'Our professionals assist customers at every stage, from planning and design to installation and maintenance.'
    },
    {
      title: 'Customized Solutions',
      desc: 'Every project is designed according to actual energy requirements, site conditions and budget objectives.'
    },
    {
      title: 'End-to-End Service',
      desc: 'We provide complete project execution, commissioning and after-sales support.'
    }
  ];

  const valuesItems = [
    {
      title: 'Integrity',
      desc: 'We operate with honesty, transparency and accountability.'
    },
    {
      title: 'Quality',
      desc: 'We never compromise on product quality or workmanship.'
    },
    {
      title: 'Innovation',
      desc: 'We adopt modern technologies and best practices to deliver better energy solutions.'
    },
    {
      title: 'Customer Commitment',
      desc: 'Customer satisfaction remains at the center of every project we undertake.'
    }
  ];

  return (
    <div className="about-page">
      <PageHeader 
        title="About Royall Solar" 
        subtitle="Empowering Assam Through Reliable Solar Energy Solutions" 
        bgImage="/assets/installations/home_solar.jpg" 
      />
      
      <section className="section company-history">
        <div className="container history-grid">
          <div className="history-text">
            <div className="section-badge">Solar EPC Company</div>
            <h2 className="section-title text-left">Trusted Solar Energy Solutions in Assam</h2>
            <p>Royall Solar is a trusted <strong>Solar Company in Assam</strong> serving customers across the entire region. We specialize in delivering complete solar EPC services as a leading <strong>Solar EPC Company</strong> for residential, commercial and industrial clients.</p>
            <p>From consultation and system design to professional <strong>rooftop solar installation</strong> and long-term support, our goal is to help customers reduce electricity expenses, improve energy reliability and embrace sustainable power solutions.</p>
          </div>
          <div className="history-visual" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div className="history-card" style={{ padding: '30px' }}>
                <Target size={36} className="history-icon" style={{ marginBottom: '16px' }} />
                <h3>Our Mission</h3>
                <p style={{ fontSize: '0.95rem' }}>To make clean, affordable and dependable solar energy accessible to every home, business and industry across Assam.</p>
             </div>
             <div className="history-card" style={{ padding: '30px' }}>
                <ShieldCheck size={36} className="history-icon" style={{ marginBottom: '16px' }} />
                <h3>Our Vision</h3>
                <p style={{ fontSize: '0.95rem' }}>To become one of the most trusted solar energy companies in Northeast India by delivering innovative, high-quality and customer-focused energy solutions.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="section bg-subtle areas-section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">Comprehensive solar EPC services and backup solutions tailored for homes, businesses, and agriculture in Assam.</p>
          <div className="areas-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {services.map((service) => (
              <div key={service.title} className="area-tag" style={{ display: 'block', height: 'auto', padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#0f172a', textTransform: 'none', letterSpacing: 'normal' }}>
                  <CheckCircle2 size={18} className="pin-icon" />
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-values">
        <div className="container">
          <h2 className="section-title">Why Choose Royall Solar</h2>
          <p className="section-subtitle">We are dedicated to delivering reliable solar power with unmatched quality, local expertise, and continuous support.</p>
          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {whyChooseItems.map((item, index) => {
              const icons = [ShieldCheck, Users, Wrench, CheckCircle2];
              const Icon = icons[index] || ShieldCheck;
              return (
                <div key={item.title} className="value-item" style={{ textAlign: 'center' }}>
                  <div className="value-icon-box" style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'none', letterSpacing: 'normal' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-subtle team-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">The core principles that guide our operations, relationship with customers, and quality of service.</p>
          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {valuesItems.map((item, index) => {
              const icons = [Award, ShieldCheck, Zap, Heart];
              const Icon = icons[index] || Award;
              return (
                <div key={item.title} className="value-item" style={{ textAlign: 'center' }}>
                  <div className="value-icon-box" style={{ width: '56px', height: '56px', marginBottom: '16px' }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textTransform: 'none', letterSpacing: 'normal' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-dark text-white stats-banner">
        <div className="container stats-flex">
          <div className="stat-box">
            <strong>500+</strong>
            <span>Projects Supported</span>
          </div>
          <div className="stat-box">
            <strong>1000+</strong>
            <span>Happy Customers</span>
          </div>
          <div className="stat-box">
            <strong>10+</strong>
            <span>Years of Combined Exp.</span>
          </div>
          <div className="stat-box">
            <strong>24/7</strong>
            <span>Customer Support</span>
          </div>
        </div>
      </section>

      <section className="section text-center" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Let's Build a Sustainable Future Together</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Whether you are planning a rooftop solar installation, a commercial solar project or a complete industrial energy solution, Royall Solar is ready to help.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
