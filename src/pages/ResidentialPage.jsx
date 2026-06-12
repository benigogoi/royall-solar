import React from 'react';
import PageHeader from '../components/PageHeader';
import { CheckCircle2, ShieldCheck, Sun, Zap, Sparkles, TrendingUp, Users, Settings, TrendingDown, PiggyBank, Leaf, Home, Wrench, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResidentialPage = () => {
  const benefits = [
    { title: 'Lower Electricity Bills', desc: 'Generate your own electricity and significantly reduce monthly energy expenses.', icon: <TrendingDown size={22} /> },
    { title: 'Long-Term Savings', desc: 'Enjoy decades of energy generation and reduced dependence on rising electricity prices.', icon: <PiggyBank size={22} /> },
    { title: 'Energy Independence', desc: 'Take greater control of your home\'s energy consumption.', icon: <Zap size={22} /> },
    { title: 'Environmentally Friendly', desc: 'Reduce your carbon footprint with clean renewable energy.', icon: <Leaf size={22} /> },
    { title: 'Increase Property Value', desc: 'Solar-equipped homes often enjoy improved market appeal.', icon: <Home size={22} /> },
    { title: 'Low Maintenance', desc: 'Modern solar systems require minimal maintenance while delivering reliable performance.', icon: <Wrench size={22} /> }
  ];

  const idealFor = [
    { title: 'Independent Homes', image: '/assets/installations/independenthomes.webp' },
    { title: 'Duplex Homes', image: '/assets/installations/duplex.webp' },
    { title: 'Apartment Rooftops', image: '/assets/assam_society_solar.png' },
    { title: 'Residential Complexes', image: '/assets/housing_societies_solar.png' },
    { title: 'Farm Houses', image: '/assets/installations/assam_farmhouse_solar.png' },
    { title: 'Holiday Homes', image: '/assets/installations/assam_holidayhome_solar.png' }
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
    { title: 'Customized Design', desc: 'Tailored solar layouts maximizing roof space and generation.', icon: <Sparkles size={24} /> },
    { title: 'Trusted Brands', desc: 'We source only tier-1 PV modules and highly reliable inverter systems.', icon: <Award size={24} /> },
    { title: 'Professional Installation', desc: 'Safe, standard-compliant setup executed by certified engineering teams.', icon: <Wrench size={24} /> },
    { title: 'Warranty Support', desc: 'Comprehensive panel performance warranty and quick helpline support.', icon: <ShieldCheck size={24} /> },
    { title: 'Experienced Team', desc: 'Skilled professionals with expertise in executing Assam-wide projects.', icon: <Users size={24} /> },
    { title: 'Assam-Wide Service', desc: 'Prompt site assessment, delivery, and system service across all districts.', icon: <MapPin size={24} /> }
  ];

  const systemOptions = [
    { capacity: '3kW Residential Solar', desc: 'Suitable for smaller households with baseline cooling and lighting requirements.', image: '/assets/installations/assam_3kw_solar.png' },
    { capacity: '5kW Residential Solar', desc: 'Ideal for average family homes running ACs, refrigerators, and pumps.', image: '/assets/installations/assam_5kw_solar.png' },
    { capacity: '10kW Residential Solar', desc: 'Perfect for larger households with higher energy usage and multiple heavy appliances.', image: '/assets/installations/assam_10kw_solar.png' }
  ];

  return (
    <div style={{ background: '#fff' }}>
      <PageHeader 
        title="Residential Solar Solutions" 
        subtitle="Power Your Home with Clean Solar Energy" 
        bgImage="/assets/assam_home_solar.png" 
      />



      {/* Introduction */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }} className="residential-intro-grid">
            <div style={{ textAlign: 'left' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Smart Solar Solutions for Modern Homes</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
                Royall Solar helps homeowners across Assam reduce energy costs through professionally designed <strong>rooftop solar installation Assam</strong> systems. Our <strong>home solar solutions Assam</strong> are customized to match your household energy needs while maximizing long-term savings.
              </p>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '16px' }}>
                As a leading <strong>residential solar company Assam</strong> and trusted <strong>solar EPC company Assam</strong>, we source only tier-1 <strong>solar panels for homes</strong> to ensure reliable and efficient generation for decades.
              </p>
            </div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }} className="residential-intro-image">
              <img src="/assets/installations/assam_residential_couple.jpg" alt="Happy Assamese couple with solar home" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
            </div>
          </div>
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
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.03)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0, textTransform: 'uppercase', lineHeight: '1.3' }}>{benefit.title}</h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '80px 0' }}>
        <div className="container" style={{ margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Ideal For</h2>
          <p className="section-subtitle">Custom solar integration suited for diverse property configurations.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginTop: '40px' }} className="ideal-for-grid">
            {idealFor.map((item, i) => (
              <div key={i} style={{ 
                background: '#fff', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} style={{ color: '#166534', flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem', color: '#0f172a', fontWeight: 700, textAlign: 'left' }}>{item.title}</span>
                </div>
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
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }} className="system-option-card">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={option.image} alt={option.capacity} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px', textAlign: 'center', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>{option.capacity}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>{option.desc}</p>
                </div>
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
          
          <div className="process-steps-grid">
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
      <section className="section" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">Why Choose Royall Solar</h2>
          <p className="section-subtitle">Specialized residential solar Assam project coordination and after-sales support.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '45px' }}>
            {whyChoosePoints.map((point, i) => (
              <div key={i} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '32px 28px',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                const iconBox = e.currentTarget.querySelector('.wc-icon-box');
                if (iconBox) {
                  iconBox.style.background = 'var(--accent-primary)';
                  iconBox.style.color = '#fff';
                  iconBox.style.transform = 'scale(1.05) rotate(-5deg)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(15, 23, 42, 0.02)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                const iconBox = e.currentTarget.querySelector('.wc-icon-box');
                if (iconBox) {
                  iconBox.style.background = '#f0fdf4';
                  iconBox.style.color = '#166534';
                  iconBox.style.transform = 'none';
                }
              }}
              >
                <div className="wc-icon-box" style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#f0fdf4',
                  color: '#166534',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  {point.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', textTransform: 'none', letterSpacing: 'normal' }}>
                    {point.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                    {point.desc}
                  </p>
                </div>
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
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialPage;
