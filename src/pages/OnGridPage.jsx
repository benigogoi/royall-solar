import PageHeader from '../components/PageHeader';
import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Zap, Shield, TrendingDown, Sun, Globe, Award, HelpCircle, ClipboardCheck, Settings, ChevronRight, HardHat, FileCheck, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SolarSolutionPage.css';

const OnGridPage = () => {
  const data = solarSolutions.find(s => s.id === 'on-grid');

  const benefits = [
    {
      title: 'Lower Electricity Bills',
      desc: 'Generate your own power and reduce monthly energy expenses.',
      icon: <TrendingDown size={32} className="adv-icon" />
    },
    {
      title: 'Maximum Return on Investment',
      desc: 'Achieve long-term savings through efficient energy generation.',
      icon: <Award size={32} className="adv-icon" />
    },
    {
      title: 'Low Maintenance',
      desc: 'Modern solar systems require minimal maintenance while delivering reliable performance.',
      icon: <ClipboardCheck size={32} className="adv-icon" />
    },
    {
      title: 'Environmentally Friendly',
      desc: 'Reduce carbon emissions and contribute to a cleaner future.',
      icon: <Globe size={32} className="adv-icon" />
    },
    {
      title: 'Increased Property Value',
      desc: 'Solar-equipped properties often enjoy higher market value.',
      icon: <Settings size={32} className="adv-icon" />
    },
    {
      title: 'Government Incentives',
      desc: 'Eligible customers may benefit from available solar energy programs and policies.',
      icon: <CheckCircle2 size={32} className="adv-icon" />
    }
  ];

  const targetAudiences = [
    {
      title: 'Residential Homes',
      desc: 'Reduce household electricity costs and gain greater energy independence with residential solar Assam.',
      image: '/assets/installations/assam_3kw_solar.png'
    },
    {
      title: 'Commercial Buildings',
      desc: 'Lower operational expenses for offices, retail spaces and institutions with scalable commercial solar Assam.',
      image: '/assets/office_building.png'
    },
    {
      title: 'Hotels and Hospitality',
      desc: 'Reduce energy costs while supporting sustainability goals and reliable operations.',
      image: '/assets/installations/hotel_resort_solar.png'
    },
    {
      title: 'Industrial Facilities',
      desc: 'Offset large electricity consumption and improve profitability with high-capacity setups.',
      image: '/assets/installations/dibrugarh_industrial.png'
    }
  ];

  const whyChoosePoints = [
    { title: 'Professional Site Assessment', icon: <FileCheck size={32} className="peace-icon" /> },
    { title: 'Customized System Design', icon: <Wrench size={32} className="peace-icon" /> },
    { title: 'Quality Components', icon: <Shield size={32} className="peace-icon" /> },
    { title: 'Certified Installation Practices', icon: <HardHat size={32} className="peace-icon" /> },
    { title: 'After-Sales Support', icon: <HelpCircle size={32} className="peace-icon" /> },
    { title: 'Trusted Brands', icon: <Award size={32} className="peace-icon" /> }
  ];

  const installationSteps = [
    { step: 1, title: 'Site Survey & Energy Assessment', desc: 'Detailed assessment of your roof, layout, and current electrical load.' },
    { step: 2, title: 'System Design & Proposal', desc: 'Engineering a custom solar design along with cost and payback period estimates.' },
    { step: 3, title: 'Equipment Selection', desc: 'Selecting genuine, high-performance solar panels and inverters from leading brands.' },
    { step: 4, title: 'Professional Installation', desc: 'Flawless execution by our certified installation technicians.' },
    { step: 5, title: 'Testing & Commissioning', desc: 'Thorough electrical testing and seamless grid integration via net metering.' },
    { step: 6, title: 'Ongoing Support', desc: 'Proactive system monitoring and dedicated maintenance services.' }
  ];

  const commonFeatures = [
    'High Efficiency Solar Panels',
    'Smart Solar Inverters',
    'Remote Monitoring Options',
    'Weather Resistant Components',
    'Scalable System Design',
    'Long Product Life'
  ];

  return (
    <div className="solution-page ongrid-page-wrapper">
      <PageHeader 
        title="On-Grid Solar Solutions" 
        subtitle="Save up to 90% on Electricity Bills with Grid-Connected Solar" 
        bgImage="/assets/installations/home_solar.jpg" 
      />

      {/* Section 1: How On-Grid Solar Works */}
      <section className="section bg-white">
        <div className="container">
          <div className="technical-info-grid">
            <div className="tech-visual">
              <img src="/assets/products/ongrid_flow.png" alt="How On-grid solar works" className="tech-diagram" />
            </div>
            <div className="tech-text">
              <div className="section-badge">System Overview</div>
              <h2 className="section-title text-left">How On-Grid Solar Works</h2>
              <p className="tech-p">Solar panels generate electricity during daylight hours. The solar inverter converts this energy into usable power for your property. Any excess electricity can be exported to the utility grid through a <strong>net metering solar system</strong> installed by a certified <strong>solar EPC company Assam</strong>, helping offset future electricity consumption.</p>

              <div className="tech-feature-list">
                <div className="tech-feature">
                  <Sun className="tech-icon" />
                  <div>
                    <h4>Solar Generation</h4>
                    <p>High-efficiency solar panels absorb sunlight to generate direct current (DC) electricity.</p>
                  </div>
                </div>
                <div className="tech-feature">
                  <TrendingDown className="tech-icon" />
                  <div>
                    <h4>Conversion & Use</h4>
                    <p>An advanced solar inverter converts DC power to AC power, supplying your building's load directly.</p>
                  </div>
                </div>
                <div className="tech-feature">
                  <Award className="tech-icon" />
                  <div>
                    <h4>Grid Export & Credits</h4>
                    <p>Excess power flows to the utility grid via net metering, earning you billing credits automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-subtle advantages-section-wrapper">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Key Benefits</h2>
            <p className="section-subtitle">Discover how grid-connected solar power transforms your monthly expenses and environment.</p>
          </div>

          <div className="advantages-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {benefits.map((benefit, i) => (
              <div key={i} className="advantage-card">
                <div className="adv-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Install Section */}
      <section className="section peace-of-mind-section">
        <div className="container">
          <div className="peace-main-box">
            <div className="text-center">
              <h2 className="section-title">Who Should Install On-Grid Solar</h2>
              <p className="tech-p" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                On-grid solar systems are best suited for grid-connected properties looking to dramatically lower their utility bills.
              </p>
            </div>

            <div className="peace-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {targetAudiences.map((audience, i) => (
                <div key={i} className="peace-feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', marginBottom: '20px', border: '3px solid #ffedd5', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                    <img src={audience.image} alt={audience.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '1.25rem', marginTop: 0 }}>{audience.title}</h3>
                  <p>{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Royall Solar */}
      <section className="section bg-subtle peace-of-mind-section">
        <div className="container">
          <div className="peace-main-box" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <div className="text-center">
              <h2 className="section-title">Why Choose Royall Solar</h2>
              <p className="tech-p" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                We provide complete end-to-end solar solutions, executing every phase with top-tier technical precision.
              </p>
            </div>

            <div className="peace-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              {whyChoosePoints.map((point, i) => (
                <div key={i} className="peace-feature-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0' }}>
                  {point.icon}
                  <h3 style={{ textTransform: 'none', letterSpacing: 'normal', fontSize: '1.25rem', marginBottom: '0' }}>{point.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="section subsidy-guide-section">
        <div className="container">
          <div className="subsidy-guide-card">
            <h2 className="section-title">Our Installation Process</h2>
            <p className="section-subtitle">We follow a structured 6-step path to deliver a seamless transition to solar power.</p>

            <div className="advantages-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {installationSteps.map((step) => (
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

      {/* System Estimates Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="pricing-table-container">
            <h2 className="section-title text-center">On-Grid System Capacities & Estimates</h2>
            <p className="section-subtitle text-center">Find the right system size for your home. Prices are approximate and subject to site conditions.</p>

            <div className="table-responsive">
              <table className="solar-data-table">
                <thead>
                  <tr>
                    <th>System Size</th>
                    <th>Ideal For</th>
                    <th>Space Required</th>
                    <th>Monthly Generation</th>
                    <th>Max Subsidy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>2 kW</strong></td>
                    <td>1-2 BHK (No AC)</td>
                    <td>200 sq. ft.</td>
                    <td>240 Units</td>
                    <td><span className="table-highlight">₹60,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>3 kW</strong></td>
                    <td>2-3 BHK (1 AC)</td>
                    <td>300 sq. ft.</td>
                    <td>360 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>5 kW</strong></td>
                    <td>3-4 BHK (2 ACs)</td>
                    <td>500 sq. ft.</td>
                    <td>600 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>10 kW</strong></td>
                    <td>Large Home / Office</td>
                    <td>1000 sq. ft.</td>
                    <td>1200 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="table-note">* Generation depends on weather conditions. Contact us for a precise quote based on your roof and load profile.</p>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="section bg-subtle product-showcase">
        <div className="container">
          <h2 className="section-title">Recommended Products</h2>
          <p className="section-subtitle">We use high-performance RoyallSolar components for maximum reliability.</p>
          <div className="product-grid-detailed">
            {data.products.map((product, i) => (
              <div key={i} className="product-card-solution">
                <div className="product-image-box">
                  <img src={product.icon === 'zap' ? '/assets/products/shinex.png' : '/assets/products/mono_panel.png'} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="product-spec">{product.spec}</div>
                <p>Ideal for: {product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ background: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>Ready to Start Saving with Solar?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
            Let our experts design the ideal on-grid solar solution for your home, business or industrial facility.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Get a Free Solar Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OnGridPage;
