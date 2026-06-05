import PageHeader from '../components/PageHeader';
import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Settings, Zap, Shield, Activity, Users, FileCheck, Award, Heart, ClipboardCheck, Wrench, HardHat, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SolarSolutionPage.css';

const HybridPage = () => {
  const data = solarSolutions.find(s => s.id === 'hybrid');

  const benefits = [
    {
      title: 'Power During Outages',
      desc: 'Keep essential appliances running even when grid power is unavailable.',
      icon: <Zap size={32} className="mode-icon" />
    },
    {
      title: 'Lower Electricity Bills',
      desc: 'Use solar energy to reduce dependence on expensive grid electricity.',
      icon: <Settings size={32} className="mode-icon" />
    },
    {
      title: 'Energy Storage',
      desc: 'Store excess solar generation for use during evenings and cloudy periods.',
      icon: <Shield size={32} className="mode-icon" />
    },
    {
      title: 'Smart Energy Management',
      desc: 'Automatically balance solar, battery and grid power for maximum efficiency.',
      icon: <Activity size={32} className="mode-icon" />
    },
    {
      title: 'Greater Energy Independence',
      desc: 'Reduce dependence on utility power and gain better control over energy consumption.',
      icon: <Users size={32} className="mode-icon" />
    },
    {
      title: 'Future-Ready Solution',
      desc: 'Hybrid systems can be expanded as energy requirements grow.',
      icon: <Award size={32} className="mode-icon" />
    }
  ];

  const targetAudiences = [
    { name: 'Residential Homes', desc: 'Ideal for households that experience frequent power interruptions. Optimized for residential hybrid solar needs.' },
    { name: 'Commercial Businesses', desc: 'Maintain business continuity while reducing energy costs with scalable commercial hybrid solar systems.' },
    { name: 'Hotels and Hospitality', desc: 'Ensure uninterrupted guest experience and operational reliability.' },
    { name: 'Educational Institutions', desc: 'Maintain critical systems, computer labs, and office grids during outages.' },
    { name: 'Healthcare Facilities', desc: 'Provide dependable backup power for essential medical and critical care operations.' },
    { name: 'Remote Locations', desc: 'Reliable electricity where grid supply may be inconsistent or weak.' }
  ];

  const whyChoosePoints = [
    { title: 'Customized System Design', icon: <Wrench size={32} className="peace-icon" /> },
    { title: 'High Quality Batteries', icon: <Shield size={32} className="peace-icon" /> },
    { title: 'Advanced Hybrid Inverters', icon: <Settings size={32} className="peace-icon" /> },
    { title: 'Professional Installation', icon: <HardHat size={32} className="peace-icon" /> },
    { title: 'Trusted Brands', icon: <Award size={32} className="peace-icon" /> },
    { title: 'Long-Term Technical Support', icon: <HelpCircle size={32} className="peace-icon" /> }
  ];

  const processSteps = [
    { step: 1, title: 'Energy Assessment', desc: 'Analyzing solar potential and roof condition.' },
    { step: 2, title: 'Load Analysis', desc: 'Detailing critical vs non-critical power backup loads.' },
    { step: 3, title: 'System Design', desc: 'Creating the hybrid solar layouts and storage specifications.' },
    { step: 4, title: 'Equipment Selection', desc: 'Sourcing high-performance panels, PCUs, and batteries.' },
    { step: 5, title: 'Professional Installation', desc: 'Certified setup of panels and battery bank integrations.' },
    { step: 6, title: 'Testing & Support', desc: 'System activation and remote monitoring configuration.' }
  ];

  const commonFeatures = [
    'Battery Energy Storage',
    'Intelligent Hybrid Inverters',
    'Automatic Backup Switching',
    'Smart Monitoring Options',
    'Expandable System Design',
    'Long Equipment Lifespan'
  ];

  return (
    <div className="solution-page">
      {/* New Intro Section */}
      <section className="section hybrid-intro-banner">
        <div className="container text-center">
          <h2 className="banner-title">Hybrid Solar Solutions</h2>
          <p className="banner-text">
            Enjoy Solar Savings with Reliable Power Backup
          </p>
        </div>
      </section>

      {/* Logic Intro */}
      <section className="section solution-intro">
        <div className="container intro-container">
          <div className="intro-content">
            <div className="section-badge">The Intelligent Solution</div>
            <h2 className="section-title text-left">How Hybrid Solar Works</h2>
            <p className="solution-description" style={{ marginBottom: '24px' }}>
              A <strong>Hybrid Solar System Assam</strong> combines solar panels, <strong>solar battery backup Assam</strong> capabilities, and grid connectivity into one intelligent energy solution.
            </p>
            <p className="solution-description">
              Solar panels generate electricity that powers your property. Excess energy can be stored in batteries for later use. When solar generation is unavailable or power outages occur, the stored battery energy automatically supplies electricity to essential loads. The system can also draw power from the utility grid when needed, ensuring uninterrupted operation.
            </p>
            
            <div className="infographic-container horizontal-steps">
              <div className="info-step-card">
                <div className="step-icon"><Zap size={24} /></div>
                <h4>Solar Generation</h4>
                <p>Panels power your load and charge the batteries.</p>
              </div>
              <div className="info-step-card">
                <div className="step-icon"><Shield size={24} /></div>
                <h4>Battery Storage</h4>
                <p>Excess energy is stored for night and grid outage backup.</p>
              </div>
              <div className="info-step-card">
                <div className="step-icon"><Activity size={24} /></div>
                <h4>Grid Connectivity</h4>
                <p>Grid supplies backup and absorbs excess net-meter export.</p>
              </div>
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="visual-card">
              <img src="/assets/installations/home_solar.jpg" alt="Hybrid solar installation" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', boxShadow: 'var(--shadow-lg)' }} />
              <div className="visual-badge">Smart Priority Modes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="section bg-subtle modes-section">
        <div className="container">
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-subtitle">A balanced energy solution providing high ROI grid savings and emergency backup security.</p>
          <div className="modes-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {benefits.map((benefit, i) => (
              <div key={i} className="mode-card" style={{ padding: '30px' }}>
                {benefit.icon}
                <h3 style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '1.25rem', margin: '12px 0' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section product-showcase">
        <div className="container">
          <h2 className="section-title">Premium Hybrid Hardware</h2>
          <p className="section-subtitle">We use high-performance RoyallSolar components for maximum reliability.</p>
          <div className="product-grid-detailed">
            {data.products.map((product, i) => (
              <div key={i} className="product-card-solution">
                <div className="product-image-box">
                  <img src={product.icon === 'cpu' || product.icon === 'factory' ? '/assets/products/gamma_pcu.png' : '/assets/products/mono_panel.png'} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="product-spec">{product.spec}</div>
                <p>Ideal for: {product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Royall Solar */}
      <section className="section bg-subtle peace-of-mind-section">
        <div className="container">
          <div className="peace-main-box" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <div className="text-center">
              <h2 className="section-title">Why Choose Royall Solar</h2>
              <p className="tech-p" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                With a custom <strong>hybrid solar installation Assam</strong> engineered by a premier <strong>solar EPC company Assam</strong>, you get top-tier hardware and expert support.
              </p>
            </div>

            <div className="peace-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {whyChoosePoints.map((point, i) => (
                <div key={i} className="peace-feature-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  {point.icon}
                  <h3 style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '1.25rem', marginBottom: '0' }}>{point.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process & Features */}
      <section className="section bg-white subsidy-guide-section">
        <div className="container">
          <div className="subsidy-guide-card">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">We follow a structured 6-step path to deliver seamless hybrid power to your property.</p>

            <div className="advantages-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {processSteps.map((step) => (
                <div key={step.step} className="advantage-card" style={{ background: '#f8fafc', padding: '30px', textAlign: 'center' }}>
                  <div className="step-icon-box" style={{ width: '50px', height: '50px', fontSize: '1.4rem', marginBottom: '20px' }}>
                    {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', textTransform: 'none', letterSpacing: 'normal' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="subsidy-footer text-center" style={{ marginTop: '60px' }}>
              <div className="eligibility-box">
                <h4 className="eligibility-title">Common Features</h4>
                <ul className="subsidy-highlights" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', display: 'grid', gap: '16px' }}>
                  {commonFeatures.map((feat, i) => (
                    <li key={i} style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                      <CheckCircle2 size={18} className="text-success" style={{ flexShrink: 0 }} /> 
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular in Assam Section */}
      <section className="section bg-dark text-white summary-section">
        <div className="container summary-grid">
          <div className="summary-text">
            <h2 className="section-title text-left" style={{ color: '#fff' }}>Why Hybrid Solar is Popular in Assam</h2>
            <p className="solution-description" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Hybrid solar systems are becoming increasingly popular across Assam because they provide reliable power during outages while reducing electricity expenses. They are particularly suitable for homes, businesses and institutions that require uninterrupted operation.
            </p>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', margin: '24px 0 16px', textTransform: 'none' }}>Who Should Install Hybrid Solar:</h3>
            <ul className="summary-list">
              {targetAudiences.map((audience, i) => (
                <li key={i} style={{ alignItems: 'flex-start', marginBottom: '16px' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>{audience.name}</strong>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{audience.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="summary-visual">
            <div className="roi-badge" style={{ padding: '30px' }}>
              <strong style={{ fontSize: '2.5rem' }}>100%</strong>
              <span>Solar Energy Storage Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Get the Best of Solar and Backup Power</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Let Royall Solar design a hybrid solar solution that delivers energy savings, reliable backup and long-term performance.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HybridPage;
