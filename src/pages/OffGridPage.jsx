import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Battery, Cpu, Sun, ZapOff, ArrowRight, Shield, Settings, Wrench, HardHat, HelpCircle, Users, FileCheck, Award, Zap, Home, Tractor, Leaf, Briefcase, GraduationCap, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SolarSolutionPage.css';
import './OffGridPage.css';

const OffGridPage = () => {
  const data = solarSolutions.find(s => s.id === 'off-grid');

  const componentsList = [
    { title: 'Solar Panels', desc: 'Generate clean electricity from sunlight.' },
    { title: 'Solar Charge Controller', desc: 'Regulates charging and protects batteries.' },
    { title: 'Battery Bank', desc: 'Stores energy for use when sunlight is unavailable.' },
    { title: 'Inverter System', desc: 'Converts stored energy into usable AC electricity.' },
    { title: 'Monitoring & Protection Systems', desc: 'Ensure safe and efficient operation.' }
  ];

  const benefits = [
    { title: 'Complete Energy Independence', desc: 'Generate and store your own electricity without relying on the utility grid.' },
    { title: 'Reliable Power Supply', desc: 'Enjoy dependable electricity even in remote locations.' },
    { title: 'Lower Long-Term Energy Costs', desc: 'Reduce dependence on fuel-based generators and rising electricity costs.' },
    { title: 'Environmentally Friendly', desc: 'Produce clean renewable energy with minimal environmental impact.' },
    { title: 'Suitable for Remote Areas', desc: 'Ideal for villages, farms, tea estates and locations with limited grid access.' },
    { title: 'Scalable Solutions', desc: 'Expand system capacity as energy requirements increase.' }
  ];

  const idealApplications = [
    { name: 'Residential Homes', desc: 'Reliable electricity for homes located in remote or underserved areas.', icon: Home },
    { name: 'Agricultural Operations', desc: 'Power irrigation systems, water pumps and farm equipment. Ideal for solar power for farms and solar water pump solutions.', icon: Tractor },
    { name: 'Tea Gardens & Estates', desc: 'Provide dependable electricity for operations and worker facilities.', icon: Leaf },
    { name: 'Remote Businesses', desc: 'Maintain uninterrupted operations without grid dependency.', icon: Briefcase },
    { name: 'Educational Institutions', desc: 'Reliable energy for schools and training centers.', icon: GraduationCap },
    { name: 'Healthcare Facilities', desc: 'Support critical equipment and services in remote locations.', icon: HeartPulse }
  ];

  const whyChoosePoints = [
    { title: 'Professional Site Assessment', icon: <FileCheck size={32} className="peace-icon" /> },
    { title: 'Customized Off-Grid Design', icon: <Wrench size={32} className="peace-icon" /> },
    { title: 'High Quality Solar Components', icon: <Shield size={32} className="peace-icon" /> },
    { title: 'Reliable Battery Storage Systems', icon: <Battery size={32} className="peace-icon" /> },
    { title: 'Expert Installation', icon: <HardHat size={32} className="peace-icon" /> },
    { title: 'Long-Term Technical Support', icon: <HelpCircle size={32} className="peace-icon" /> }
  ];

  const processSteps = [
    { step: 1, title: 'Site Survey', desc: 'Comprehensive geographic and rooftop feasibility evaluation.' },
    { step: 2, title: 'Energy Requirement Analysis', desc: 'Detailed calculation of daily electrical load and backup duration requirements.' },
    { step: 3, title: 'Custom System Design', desc: 'Engineering battery bank capacity and solar panel arrays for self-sustenance.' },
    { step: 4, title: 'Equipment Selection', desc: 'Selecting certified batteries, PCUs, and durable structural hardware.' },
    { step: 5, title: 'Professional Installation', desc: 'Expert mounting and wiring for optimized off-grid efficiency.' },
    { step: 6, title: 'Testing & Ongoing Support', desc: 'Full testing, commissioning, and setup of system protection safeguards.' }
  ];

  return (
    <div className="solution-page">
      {/* Custom Off-Grid Hero */}
      <section className="offgrid-hero">
        <div className="offgrid-accent-bar"></div>
        <div className="offgrid-hero-glow-r"></div>
        <div className="offgrid-hero-inner container">
          {/* Left: Text */}
          <div className="offgrid-hero-text">
            <div className="offgrid-eyebrow">
              <span className="offgrid-eyebrow-dot"></span>
              Independent Energy — No Grid Needed
            </div>
            <h1 className="offgrid-hero-title">
              Off-Grid <span className="offgrid-title-accent">Solar</span>
              <br />Solutions Assam
            </h1>
            <p className="offgrid-hero-subtitle">
              Complete energy independence with <strong>solar + battery storage</strong> for homes, farms, tea estates and remote facilities across Assam.
            </p>
            <div className="offgrid-stats-row">
              <div className="offgrid-stat-item">
                <span className="offgrid-stat-num">24/7</span>
                <span className="offgrid-stat-lbl">Power Supply</span>
              </div>
              <div className="offgrid-stat-item">
                <span className="offgrid-stat-num">0 Grid</span>
                <span className="offgrid-stat-lbl">Dependency</span>
              </div>
              <div className="offgrid-stat-item">
                <span className="offgrid-stat-num">25 Yr</span>
                <span className="offgrid-stat-lbl">Panel Life</span>
              </div>
            </div>
            <div className="offgrid-hero-actions">
              <Link to="/contact#contact" className="btn btn-primary">Get a Free Site Survey</Link>
              <Link to="/products" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>View Products</Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="offgrid-hero-right">
            {/* Floating battery badge */}
            <div className="offgrid-battery-badge">
              <div className="battery-shell">
                <div className="battery-segment"></div>
                <div className="battery-segment"></div>
                <div className="battery-segment"></div>
              </div>
              <span className="battery-pct">100%</span>
              <span className="battery-lbl">Stored</span>
            </div>
            <div className="offgrid-img-card">
              <img
                src="/assets/installations/backup_system.jpg"
                alt="Off-grid solar battery backup system"
                className="offgrid-main-img"
              />
              <div className="offgrid-img-overlay"></div>
              <div className="offgrid-img-label">
                <span className="offgrid-img-label-dot"></span>
                Battery Backup System — Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principle */}
      <section className="section solution-intro">
        <div className="container intro-container">
          <div className="intro-content">
            <div className="section-badge">System Overview</div>
            <h2 className="section-title text-left">How Off-Grid Solar Works</h2>
            <p className="solution-description" style={{ marginBottom: '20px' }}>
              An <strong>Off Grid Solar System Assam</strong> operates independently of the utility grid, generating and storing electricity through solar panels and batteries.
            </p>
            <p className="solution-description" style={{ marginBottom: '32px' }}>
              These systems provide reliable <strong>solar energy solutions Assam</strong> for homes, businesses, farms and remote facilities where grid access is limited or unavailable. For locations requiring a <strong>remote solar installation Assam</strong>, installing a dependable <strong>solar battery system Assam</strong> ensures you have electricity day and night. We offer specialized layouts including <strong>solar power for farms</strong> and dedicated <strong>solar water pump solutions</strong> to run critical machinery. Contact us for complete <strong>off grid solar installation</strong> services.
            </p>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', textTransform: 'none' }}>System Components:</h3>
            <div className="infographic-container vertical-steps">
              {componentsList.map((item, i) => (
                <div key={i} className="info-step-vertical">
                  <div className="step-marker">
                    <div className="step-circle">{i + 1}</div>
                    {i < componentsList.length - 1 && <div className="step-line"></div>}
                  </div>
                  <div className="step-content">
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="visual-card">
              <img src="/assets/installations/backup_system.jpg" alt="Off-grid solar installation" style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', boxShadow: 'var(--shadow-lg)' }} />
              <div className="visual-badge">Independent Power</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section bg-dark text-white product-showcase">
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>Recommended Hardware</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Engineered for areas with high power cuts or complete lack of grid connectivity.</p>
          <div className="product-grid-detailed">
            {data.products.map((product, i) => (
              <div key={i} className="product-card-solution dark-card">
                <div className="product-image-box">
                  <img src={product.icon === 'cpu' ? '/assets/products/gamma_pcu.png' : product.icon === 'battery' ? '/assets/products/battery.png' : '/assets/products/mono_panel.png'} alt={product.name} />
                </div>
                <h3 style={{ color: '#ffffff' }}>{product.name}</h3>
                <div className="product-spec" style={{ color: 'var(--accent-primary)' }}>{product.spec}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section advantages-section">
        <div className="container">
          <div className="benefits-two-col">
            <div className="advantage-image" style={{ display: 'flex', justifyContent: 'center' }}>
               <ZapOff size={120} className="large-icon-faded" />
            </div>
            <div className="advantage-text">
              <h2 className="section-title text-left">Key Benefits</h2>
              <div className="advantage-items">
                {benefits.map((benefit, index) => (
                  <div key={index} className="adv-item" style={{ marginBottom: '24px' }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{benefit.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Applications */}
      <section className="section bg-subtle modes-section">
        <div className="container">
          <h2 className="section-title">Ideal Applications</h2>
          <p className="section-subtitle">Reliable electricity for sectors requiring absolute power isolation and operational self-sustenance.</p>
          <div className="modes-grid">
            {idealApplications.map((app, i) => {
              const IconComponent = app.icon || CheckCircle2;
              return (
                <div key={i} className="mode-card" style={{ padding: '30px' }}>
                  <IconComponent className="mode-icon" size={32} />
                  <h3 style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '1.25rem', margin: '12px 0' }}>{app.name}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{app.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Royall Solar */}
      <section className="section peace-of-mind-section">
        <div className="container">
          <div className="peace-main-box">
            <div className="text-center">
              <h2 className="section-title">Why Choose Royall Solar</h2>
              <p className="tech-p" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                We design custom systems with robust safety standards, providing continuous support across Assam.
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

      {/* Our Process */}
      <section className="section bg-subtle subsidy-guide-section">
        <div className="container">
          <div className="subsidy-guide-card" style={{ background: '#ffffff' }}>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A structured process built on engineering analysis to deploy absolute off-grid efficiency.</p>

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
          </div>
        </div>
      </section>

      {/* Why Off-Grid Solar Matters in Assam Section */}
      <section className="section bg-dark text-white summary-section">
        <div className="container summary-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="summary-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: '24px' }}>Why Off-Grid Solar Matters in Assam</h2>
            <p className="solution-description" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: '1.8' }}>
              Many regions across Assam experience grid limitations, remote geography and seasonal power disruptions. Off-grid solar systems provide a dependable and sustainable energy source that supports homes, businesses, farms and institutions regardless of grid availability.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Take Control of Your Energy Future</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Let Royall Solar design a reliable off-grid solar solution tailored to your power requirements and location.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OffGridPage;
