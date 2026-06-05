import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, FileText, BarChart3, Wrench, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      image: '/assets/installations/home_solar.jpg'
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
      image: '/assets/installations/backup_system.jpg'
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
      image: '/assets/office_building.png'
    }
  ];

  const galleryItems = [
    { title: 'Residential Rooftop Solar', image: '/assets/installations/home_solar.jpg', desc: 'Rooftop Solar Installation Assam' },
    { title: 'Commercial Rooftop Solar', image: '/assets/office_building.png', desc: 'Commercial Solar Projects Assam' },
    { title: 'Industrial Solar Installations', image: '/assets/installations/backup_system.jpg', desc: 'Industrial Solar Solutions Assam' },
    { title: 'Hybrid Solar Systems', image: '/assets/installations/home_solar.jpg', desc: 'Hybrid Solar Systems Assam' },
    { title: 'Solar Water Pump Projects', image: '/assets/products/mono_panel.png', desc: 'Solar Energy Solutions Assam' },
    { title: 'Energy Storage Solutions', image: '/assets/products/battery.png', desc: 'Solar Projects Assam' }
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
        bgImage="/assets/installations/home_solar.jpg" 
      />

      {/* Hero / Intro Section */}
      <section className="section" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 600, marginBottom: '24px' }}>
            From residential rooftops to commercial facilities and industrial installations, Royall Solar delivers reliable solar energy solutions across Assam designed for long-term performance and savings.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
            {categories.map((cat, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{cat.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{cat.desc}</p>
                  
                  <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#0f172a', fontWeight: 700, marginBottom: '12px' }}>Key Deliverables:</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {cat.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle2 size={16} style={{ color: '#166534', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 500 }}>{feat}</span>
                        </div>
                      ))}
                    </div>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '50px' }}>
            {steps.map((item, i) => (
              <div key={i} style={{
                padding: '30px 24px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <span style={{ display: 'inline-block', background: '#166534', color: '#fff', fontWeight: 800, fontSize: '0.8rem', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px' }}>
                  {item.step}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
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
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
