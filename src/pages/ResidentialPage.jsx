import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, ShieldCheck, Sun, Zap, Sparkles, TrendingUp, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResidentialPage = () => {
  const benefits = [
    { title: 'Lower Electricity Bills', desc: 'Generate your own electricity and significantly reduce monthly energy expenses.' },
    { title: 'Long-Term Savings', desc: 'Enjoy decades of energy generation and reduced dependence on rising electricity prices.' },
    { title: 'Energy Independence', desc: 'Take greater control of your home\'s energy consumption.' },
    { title: 'Environmentally Friendly', desc: 'Reduce your carbon footprint with clean renewable energy.' },
    { title: 'Increase Property Value', desc: 'Solar-equipped homes often enjoy improved market appeal.' },
    { title: 'Low Maintenance', desc: 'Modern solar systems require minimal maintenance while delivering reliable performance.' }
  ];

  const idealFor = [
    'Independent Homes',
    'Duplex Homes',
    'Apartment Rooftops',
    'Residential Complexes',
    'Farm Houses',
    'Holiday Homes'
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'Evaluating your electricity bills and loads.' },
    { step: '02', title: 'Site Assessment', desc: 'Detailed physical rooftop area feasibility assessment.' },
    { step: '03', title: 'System Design', desc: 'Customizing layout and system configurations.' },
    { step: '04', title: 'Installation', desc: 'Safety-compliant setup by certified installers.' },
    { step: '05', title: 'Testing & Commissioning', desc: 'Activation and grid-integration verification.' },
    { step: '06', title: 'Support & Maintenance', desc: 'Long-term periodic checks and assistance.' }
  ];

  const whyChoosePoints = [
    'Customized Design',
    'Trusted Brands',
    'Professional Installation',
    'Warranty Support',
    'Experienced Team',
    'Assam-Wide Service'
  ];

  const systemOptions = [
    { capacity: '3kW Residential Solar', desc: 'Suitable for smaller households with baseline cooling and lighting requirements.' },
    { capacity: '5kW Residential Solar', desc: 'Ideal for average family homes running ACs, refrigerators, and pumps.' },
    { capacity: '10kW Residential Solar', desc: 'Perfect for larger households with higher energy usage and multiple heavy appliances.' }
  ];

  return (
    <div style={{ background: '#fff' }}>
      <PageHeader 
        title="Residential Solar Solutions" 
        subtitle="Power Your Home with Clean Solar Energy" 
        bgImage="/assets/installations/home_solar.jpg" 
      />

      {/* Intro section */}
      <section className="section" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#334155', fontSize: '1.25rem', lineHeight: '1.8', fontWeight: 600, marginBottom: '24px' }}>
            Reduce electricity bills, increase energy independence and enjoy reliable power with customized residential solar solutions designed for homes across Assam.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Smart Solar Solutions for Modern Homes</h2>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            Royall Solar helps homeowners across Assam reduce energy costs through professionally designed <strong>rooftop solar installation Assam</strong> systems. Our <strong>home solar solutions Assam</strong> are customized to match your household energy needs while maximizing long-term savings.
          </p>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
            As a leading <strong>residential solar company Assam</strong> and trusted <strong>solar EPC company Assam</strong>, we source only tier-1 <strong>solar panels for homes</strong> to ensure reliable and efficient generation for decades.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Benefits of Residential Solar</h2>
          <p className="section-subtitle">Why investing in a rooftop solar setup makes absolute financial and environmental sense.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '30px 24px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>{benefit.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Ideal For</h2>
          <p className="section-subtitle">Custom solar integration suited for diverse property configurations.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: '40px' }}>
            {idealFor.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <CheckCircle2 size={18} style={{ color: '#166534', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 600, textAlign: 'left' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Options */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Common System Options</h2>
          <p className="section-subtitle">Selecting the right capacity based on household consumption profiles.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {systemOptions.map((option, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '30px 24px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}>
                <div style={{ width: '50px', height: '50px', background: '#f8fafc', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Sun size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{option.capacity}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container">
          <h2 className="section-title">Our Residential Solar Process</h2>
          <p className="section-subtitle">A structured project pipeline delivering safe and efficient home energy production.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {processSteps.map((item, i) => (
              <div key={i} style={{
                padding: '30px 24px',
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
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

      {/* Why Choose Royall Solar */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Why Choose Royall Solar</h2>
          <p className="section-subtitle">Specialized residential solar Assam project coordination and after-sales support.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {whyChoosePoints.map((point, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <CheckCircle2 size={20} style={{ color: '#166534', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 700, textAlign: 'left' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Ready to Reduce Your Electricity Bills?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Speak with our experts and discover the ideal residential solar solution for your home. Submit details to coordinate a home load analysis and rooftop survey visit.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;
