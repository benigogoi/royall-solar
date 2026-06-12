import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, FileText, BarChart3, Wrench, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const categories = [
    {
      title: 'Residential Solar Projects',
      desc: 'Customized rooftop solar installations designed to help homeowners reduce electricity bills and achieve greater energy independence.',
      features: [
        'Rooftop Solar Systems',
        'Hybrid Solar Installations',
        'Battery Backup Solutions',
        'Long-Term Energy Savings'
      ],
      image: '/assets/assam_home_solar.png'
    },
    {
      title: 'Commercial Solar Projects',
      desc: 'Scalable solar solutions for offices, educational institutions, hotels, retail spaces and commercial facilities.',
      features: [
        'Reduced Operating Costs',
        'Energy Efficiency Improvements',
        'Grid-Tied Solar Systems',
        'Custom System Design'
      ],
      image: '/assets/installations/guwahati_commercial.png'
    },
    {
      title: 'Industrial Solar Projects',
      desc: 'Large-scale solar installations engineered to support industrial operations and long-term energy requirements.',
      features: [
        'High Capacity Systems',
        'Optimized Energy Production',
        'Reliable Performance',
        'Long-Term Cost Reduction'
      ],
      image: '/assets/installations/dibrugarh_industrial.png'
    }
  ];

  const galleryItems = [
    { title: 'Residential Rooftop Solar', image: '/assets/installations/assam_independent_home.png', desc: 'Rooftop Solar Installation Assam' },
    { title: 'Commercial Rooftop Solar', image: '/assets/installations/guwahati_commercial.png', desc: 'Commercial Solar Projects Assam' },
    { title: 'Industrial Solar Installations', image: '/assets/installations/dibrugarh_industrial.png', desc: 'Industrial Solar Solutions Assam' },
    { title: 'Hybrid Solar Systems', image: '/assets/installations/assam_10kw_solar.png', desc: 'Hybrid Solar Systems Assam' },
    { title: 'Solar Water Pump Projects', image: '/assets/installations/solar_pump.jpg', desc: 'Solar Energy Solutions Assam' },
    { title: 'Energy Storage Solutions', image: '/assets/installations/backup_system.jpg', desc: 'Solar Projects Assam' }
  ];

  const steps = [
    { step: 'Step 1', title: 'Site Assessment', desc: 'Detailed rooftop and area layout review.' },
    { step: 'Step 2', title: 'Energy Analysis', desc: 'Review monthly electrical bills and demands.' },
    { step: 'Step 3', title: 'Custom System Design', desc: 'Engineering battery, panel arrays and wiring.' },
    { step: 'Step 4', title: 'Professional Installation', desc: 'Execution by certified solar EPC company Assam teams.' },
    { step: 'Step 5', title: 'Testing & Commissioning', desc: 'Rigorous system verification and activation.' },
    { step: 'Step 6', title: 'Long-Term Support', desc: 'Dedicated system maintenance and assistance.' }
  ];

  const trustPoints = [
    'Customized Solutions',
    'Quality Products',
    'Professional Installation',
    'Trusted Brands',
    'End-to-End Project Management',
    'Dedicated Customer Support'
  ];

  const stats = [
    { value: '500+', label: 'Projects Supported' },
    { value: '1000+', label: 'Satisfied Customers' },
    { value: '10+', label: 'Years Combined Experience' },
    { value: 'All Assam', label: 'Service Coverage' }
  ];

  return (
    <div style={{ background: '#fff' }}>
      {/* Page Header */}
      <PageHeader 
        title="Our Projects" 
        subtitle="Projects That Power Progress" 
        bgImage="/assets/installations/projects_header.png" 
      />

      {/* Hero / Intro Section */}
      <section className="section" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 600, marginBottom: '24px' }}>
            From residential rooftops to commercial facilities and industrial installations, Royall Solar delivers reliable solar energy solutions across Assam designed for long-term performance and savings.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Consultation
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Delivering Solar Solutions Across Assam</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            Royall Solar specializes in designing and installing solar energy systems for homes, businesses and industrial facilities. Every project is customized to meet specific energy requirements while maximizing efficiency, reliability and return on investment.
          </p>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            Our team manages the entire process from assessment and design to installation, commissioning and long-term support.
          </p>
        </div>
      </section>

      {/* Project Capabilities Categories */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Project Capabilities</h2>
          <p className="section-subtitle">Specialized engineering and deployment for various solar projects Assam profiles.</p>
          
          <div className="capabilities-list">
            {categories.map((cat, i) => (
              <div key={i} className="capability-card">
                <div className="capability-image">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="capability-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#0f172a', fontWeight: 700, marginBottom: '12px' }}>Key Deliverables:</h4>
                  <div className="capability-features">
                    {cat.features.map((feat, idx) => (
                      <div key={idx} className="capability-feature">
                        <CheckCircle2 size={16} style={{ color: '#166534', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Project Gallery</h2>
          <p className="section-subtitle">Explore the types of solar installations and energy solutions delivered by Royall Solar.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '50px' }}>
            {galleryItems.map((item, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.01)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ width: '100%', height: '180px', overflow: 'hidden', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: item.image.includes('products') ? '20px' : '0' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: item.image.includes('products') ? 'contain' : 'cover' }} />
                </div>
                <div style={{ padding: '16px 20px', textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{item.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginTop: '4px', fontWeight: 600 }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Project Approach */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">How We Deliver Successful Projects</h2>
          <p className="section-subtitle">A professional and structured methodology ensuring absolute efficiency.</p>
          
          <div className="timeline-grid">
            {steps.map((item, i) => (
              <div key={i} className="timeline-card">
                <div className="step-number">{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Trust Royall Solar */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Why Customers Trust Royall Solar</h2>
          <p className="section-subtitle">Building reliance through transparent execution and technical expertise.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {trustPoints.map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <CheckCircle2 size={20} style={{ color: '#166534', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 700, textAlign: 'left' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{ background: '#0f172a', padding: '60px 0', color: '#fff' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <strong style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-primary)', display: 'block', lineHeight: 1.1 }}>{s.value}</strong>
              <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', display: 'block', fontWeight: 600 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Ready to Start Your Solar Project?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Whether you are planning a residential rooftop installation, a commercial solar project or an industrial energy solution, Royall Solar is ready to help. Submit details to arrange a free site evaluation and customized quote.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
