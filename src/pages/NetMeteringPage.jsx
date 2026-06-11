import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, BarChart3, HelpCircle, FileCheck, ShieldCheck, Settings, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NetMeteringPage.css';

const NetMeteringPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    { step: '01', title: 'Solar Generation', desc: 'Solar panels generate clean electricity from sunlight.' },
    { step: '02', title: 'Self Consumption', desc: 'Your property consumes available solar energy first.' },
    { step: '03', title: 'Surplus Export', desc: 'Excess electricity is exported to the grid.' },
    { step: '04', title: 'Energy Credits', desc: 'Energy credits are applied according to applicable utility policies.' }
  ];

  const benefits = [
    'Lower Electricity Bills',
    'Maximize Return on Investment',
    'Better Utilization of Solar Energy',
    'Reduced Dependence on Grid Electricity',
    'Environmentally Friendly Energy Production',
    'Long-Term Financial Savings'
  ];

  const targetAudience = [
    { title: 'Residential Homeowners', desc: 'Save significantly on monthly household bills and get faster payback.' },
    { title: 'Commercial Buildings', desc: 'Reduce operational expenditures and improve green corporate profiles.' },
    { title: 'Educational Institutions', desc: 'Lower administrative facility bills and showcase sustainability.' },
    { title: 'Hotels', desc: 'Offset high daytime baseline cooling and lighting consumption costs.' },
    { title: 'Industrial Facilities', desc: 'Reduce maximum contract demand charge spikes during operations.' },
    { title: 'Large Rooftop Solar Installations', desc: 'Maximize generation yield across expansive physical structures.' }
  ];

  const whyChoosePoints = [
    { title: 'Professional Guidance', desc: 'We handle the complete application and documentation process.' },
    { title: 'System Design Expertise', desc: 'Optimizing capacity to align perfectly with utility contract demand.' },
    { title: 'Quality Solar Components', desc: 'Equipped with certified bidirectional smart meters.' },
    { title: 'Installation Support', desc: 'Safe, code-compliant physical and electrical execution.' },
    { title: 'Documentation Assistance', desc: 'Coordination with APDCL and local electrical inspectors.' },
    { title: 'Long-Term Customer Support', desc: 'Performance tracking and regular technical system checks.' }
  ];

  const faqs = [
    {
      q: 'What is net metering?',
      a: 'Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. In Assam, it allows users to feed surplus solar energy into the APDCL utility grid and offset future consumption bills.'
    },
    {
      q: 'How much can I save?',
      a: 'Savings vary depending on system capacity, consumption habits, and electricity rates. Most solar net metering system owners reduce monthly utility electricity bills by up to 80-90% by exporting surplus daytime power.'
    },
    {
      q: 'Do I need a special meter?',
      a: 'Yes. Net metering requires a bidirectional meter that records both energy consumed from the grid and excess energy exported back to the grid.'
    },
    {
      q: 'Can residential users benefit?',
      a: 'Absolutely! Residential rooftop solar Assam installations under the PM Surya Ghar scheme benefit significantly from net metering, allowing families to offset evening and night consumption.'
    },
    {
      q: 'Is net metering available for commercial properties?',
      a: 'Yes, commercial and industrial properties across Assam are fully eligible. It is a highly effective way for businesses to utilize weekend and holiday generation surpluses.'
    }
  ];

  return (
    <div style={{ background: '#fff' }}>
      {/* Custom Net Metering Hero */}
      <section className="netmeter-hero">
        <div className="netmeter-accent-bar"></div>
        <div className="netmeter-hero-inner container">
          {/* Left: Text */}
          <div className="netmeter-hero-text">
            <div className="netmeter-eyebrow">
              <span className="netmeter-eyebrow-dot"></span>
              APDCL Grid Integration — Assam
            </div>
            <h1 className="netmeter-hero-title">
              Net <span className="netmeter-title-accent">Metering</span>
              <br />Solutions Assam
            </h1>
            <p className="netmeter-hero-subtitle">
              Send surplus solar energy back to the <strong>APDCL grid</strong> and earn credits that slash your electricity bill by up to 90%.
            </p>
            <div className="netmeter-stats-row">
              <div className="netmeter-stat">
                <span className="netmeter-stat-val">90%</span>
                <span className="netmeter-stat-lbl">Bill Savings</span>
              </div>
              <div className="netmeter-stat">
                <span className="netmeter-stat-val">2-Way</span>
                <span className="netmeter-stat-lbl">Energy Flow</span>
              </div>
              <div className="netmeter-stat">
                <span className="netmeter-stat-val">APDCL</span>
                <span className="netmeter-stat-lbl">Approved</span>
              </div>
            </div>
            <div className="netmeter-hero-actions">
              <Link to="/contact#contact" className="btn btn-primary">Get Free Consultation</Link>
              {/* <a href="#how-it-works" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}>How It Works</a> */}
            </div>
          </div>

          {/* Right: Animated Flow Diagram */}
          <div className="netmeter-hero-right">
            <div className="netmeter-flow-card">
              <div className="netmeter-flow-card-title">⚡ Live Energy Flow — Net Metering</div>
              <div className="nm-flow">
                {/* Solar Panels */}
                <div className="nm-node">
                  <div className="nm-node-icon nm-icon-solar">☀️</div>
                  <div className="nm-node-text">
                    <strong>Solar Panels</strong>
                    <span>Generating clean electricity</span>
                  </div>
                </div>
                <div className="nm-connector">
                  <div className="nm-connector-line"></div>
                  <span className="nm-connector-arrow">▼</span>
                </div>
                {/* Home */}
                <div className="nm-node">
                  <div className="nm-node-icon nm-icon-home">🏠</div>
                  <div className="nm-node-text">
                    <strong>Your Property</strong>
                    <span>Consumes solar energy first</span>
                  </div>
                </div>
                <div className="nm-connector">
                  <div className="nm-connector-line"></div>
                  <span className="nm-connector-arrow">▼</span>
                </div>
                {/* Smart Meter */}
                <div className="nm-node" style={{ borderColor: 'rgba(22,163,74,0.4)' }}>
                  <div className="nm-node-icon nm-icon-meter">📊</div>
                  <div className="nm-node-text">
                    <strong>Smart Bidirectional Meter</strong>
                    <span>Tracks import &amp; export precisely</span>
                  </div>
                </div>
                <div className="nm-connector" style={{ position: 'relative' }}>
                  <div className="nm-connector-line"></div>
                  <span className="nm-connector-arrow">▼</span>
                  <span className="nm-bidir-label">↕ 2-Way Flow</span>
                </div>
                {/* Grid */}
                <div className="nm-node">
                  <div className="nm-node-icon nm-icon-grid">🔌</div>
                  <div className="nm-node-text">
                    <strong>APDCL Utility Grid</strong>
                    <span>Surplus exported → credits earned</span>
                  </div>
                </div>
              </div>
              {/* Savings badge */}
              <div className="netmeter-savings-badge">
                <span className="savings-num">₹0</span>
                <div className="savings-text">
                  <strong>Net Bill Goal</strong>
                  Export surplus, earn credits, pay nothing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero / Intro section */}
      <section className="section" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 600, marginBottom: '24px' }}>
            Net metering allows solar system owners to send excess electricity back to the utility grid and receive credits that help reduce future electricity bills.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* What is Net Metering */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Understanding Net Metering</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            Net metering is a billing mechanism that allows solar energy users to export surplus electricity generated by their solar system to the utility grid.
          </p>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            When your solar system produces more electricity than your property consumes, the excess energy can be fed into the grid, helping offset future electricity consumption and reducing overall energy costs.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple four-step process of solar energy savings flow.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {steps.map((item, i) => (
              <div key={i} style={{
                padding: '30px 24px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ display: 'inline-block', background: '#166534', color: '#fff', fontWeight: 800, fontSize: '0.85rem', padding: '4px 14px', borderRadius: '20px', marginBottom: '16px' }}>
                  {item.step}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Key Benefits</h2>
          <p className="section-subtitle">Discover the absolute financial and system net metering benefits.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <CheckCircle2 size={20} style={{ color: '#166534', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 700, textAlign: 'left' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Consider */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Who Should Consider Net Metering</h2>
          <p className="section-subtitle">Ideal configurations for various commercial and domestic rooftop installations across Assam.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {targetAudience.map((audience, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{audience.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Royall Solar */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Royall Solar</h2>
          <p className="section-subtitle">We manage your entire grid integration and net metering Assam approval cycle.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {whyChoosePoints.map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                gap: '16px'
              }}>
                <div style={{ width: '40px', height: '40px', background: '#f8fafc', color: '#166534', borderRadius: '8px', display: 'flex', alignItems: 'center', justifycontent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={20} style={{ margin: 'auto' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle">Important details regarding smart bidirectional utility connections.</p>
          
          <div style={{ maxWidth: '800px', margin: '40px auto 0' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: '1px solid #e2e8f0', padding: '8px 0' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px 0',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: isOpen ? 'var(--accent-primary)' : '#0f172a'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#64748b' }} />
                  </button>
                  <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.2s ease-out' }}>
                    <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, paddingBottom: '16px', margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Start Maximizing Your Solar Investment</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Talk to our experts and learn how net metering can help increase savings from your solar system. Get in touch to check net metering eligibility for your property profile.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetMeteringPage;
