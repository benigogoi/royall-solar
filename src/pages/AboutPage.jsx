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
        bgImage="/assets/installations/about_header.png" 
      />
      
      <section className="section company-history">
        <div className="container history-grid">
          <div className="history-text">
            <div className="section-badge">Solar EPC Company</div>
            <h2 className="section-title text-left">Trusted Solar Energy Solutions in Assam</h2>
            <p>Royall Solar is a trusted <strong>Solar Company in Assam</strong> serving customers across the entire region. We specialize in delivering complete solar EPC services as a leading <strong>Solar EPC Company</strong> for residential, commercial and industrial clients.</p>
            <p>From consultation and system design to professional <strong>rooftop solar installation</strong> and long-term support, our goal is to help customers reduce electricity expenses, improve energy reliability and embrace sustainable power solutions.</p>
          </div>
          <div className="history-visual-container">
            <img src="/assets/about/about_hero.png" alt="Royall Solar Modern Installation" className="hero-graphic" />
            <div className="floating-card floating-mission">
              <h3><Target size={20} /> Our Mission</h3>
              <p>To make clean, affordable and dependable solar energy accessible to every home, business and industry across Assam.</p>
            </div>
            <div className="floating-card floating-vision">
              <h3><ShieldCheck size={20} /> Our Vision</h3>
              <p>To become the most trusted solar energy company in Northeast India by delivering innovative, customer-focused solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-subtle areas-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">Comprehensive solar EPC services and backup solutions tailored for homes, businesses, and agriculture in Assam.</p>
          </div>

          <div className="service-row">
            <div className="service-image-container">
              <img src="/assets/about/service_residential.png" alt="Residential Solar" />
            </div>
            <div className="service-text">
              <h3>Residential Solar Solutions</h3>
              <p>Customized rooftop solar installation systems that help homeowners reduce electricity bills and gain energy independence. Our smart home integrations ensure maximum efficiency and visual appeal.</p>
            </div>
          </div>

          <div className="service-row">
            <div className="service-image-container">
              <img src="/assets/about/service_commercial.png" alt="Commercial Solar" />
            </div>
            <div className="service-text">
              <h3>Commercial & Industrial Projects</h3>
              <p>Scalable, large-scale commercial solar solutions engineered for manufacturing units, warehouses, and industrial facilities. We focus on maximizing ROI and improving operational efficiency.</p>
            </div>
          </div>

          <div className="service-row">
            <div className="service-image-container">
              <img src="/assets/about/service_water.png" alt="Solar Water Pumps" />
            </div>
            <div className="service-text">
              <h3>Solar Water Pumping Systems</h3>
              <p>Efficient solar-powered pumping solutions for agriculture, irrigation, and rural applications. Empowering farmers with reliable water access independent of grid electricity.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section team-values">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 className="section-title">Why Choose Royall Solar</h2>
            <p className="section-subtitle">We are dedicated to delivering reliable solar power with unmatched quality, local expertise, and continuous support.</p>
          </div>
          
          <div className="bento-grid">
            <div className="bento-large">
              <img src="/assets/about/trust_badge.png" alt="Quality & Trust" />
            </div>
            
            <div className="bento-item">
              <div className="value-icon-box"><ShieldCheck size={24} /></div>
              <h3>Quality Products</h3>
              <p>We work with trusted manufacturers to ensure long-term performance.</p>
            </div>

            <div className="bento-item">
              <div className="value-icon-box"><Users size={24} /></div>
              <h3>Expert Team</h3>
              <p>Professionals assisting you from planning to installation and maintenance.</p>
            </div>

            <div className="bento-item">
              <div className="value-icon-box"><Wrench size={24} /></div>
              <h3>Customized Solutions</h3>
              <p>Every project is designed according to actual energy requirements.</p>
            </div>

            <div className="bento-item">
              <div className="value-icon-box"><CheckCircle2 size={24} /></div>
              <h3>End-to-End Service</h3>
              <p>Complete project execution, commissioning and after-sales support.</p>
            </div>
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
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
