import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Layers, Cpu, Settings, Activity, ArrowRight, Zap, Shield } from 'lucide-react';
import './SolarSolutionPage.css';

const HybridPage = () => {
  const data = solarSolutions.find(s => s.id === 'hybrid');

  return (
    <div className="solution-page">
      {/* New Intro Section */}
      <section className="section hybrid-intro-banner">
        <div className="container text-center">
          <h2 className="banner-title">RoyallSolar Hybrid Solar System</h2>
          <p className="banner-text">
            Get the best of both worlds with <strong>RoyallSolar Hybrid Solar Systems</strong>. 
            Enjoy the <strong>cost savings of Net-Metering</strong> while having the <strong>security of battery backup</strong>. 
            The most intelligent energy solution for modern Assamese homes and clinics.
          </p>
        </div>
      </section>

      {/* Logic Intro */}
      <section className="section solution-intro">
        <div className="container intro-container">
          <div className="intro-content">
            <div className="section-badge">The Smart Solution</div>
            <h2 className="section-title text-left">Intelligent Energy Management</h2>
            <p className="solution-description">{data.description}</p>
            
            <div className="infographic-container horizontal-steps">
              {data.howItWorks.map((item, i) => (
                <div key={i} className="info-step-card">
                  <div className="step-icon">
                    {i === 0 ? <Zap size={24} /> : i === 1 ? <Activity size={24} /> : <Shield size={24} />}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="visual-card">
              <img src="/assets/installations/home_solar.jpg" alt="Hybrid solar installation" />
              <div className="visual-badge">Smart Priority Modes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Modes Section - The "Cool Info" Part */}
      <section className="section bg-subtle modes-section">
        <div className="container">
          <h2 className="section-title">Intelligent Priority Modes</h2>
          <p className="section-subtitle">Customize how your system uses power based on your specific needs.</p>
          <div className="modes-grid">
            {data.priorityModes.map((mode, i) => (
              <div key={i} className="mode-card">
                <Settings className="mode-icon" size={32} />
                <h3>{mode.mode}</h3>
                <div className="mode-priority">{mode.priority}</div>
                <div className="mode-use">Best for: {mode.use}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="section product-showcase">
        <div className="container">
          <h2 className="section-title">Premium Hybrid Hardware</h2>
          <p className="section-subtitle">We use RoyallSolar's Sigma and Zeta series for the highest level of energy reliability.</p>
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

      {/* Why Hybrid? */}
      <section className="section bg-dark text-white summary-section">
        <div className="container summary-grid">
          <div className="summary-text">
            <h2 className="section-title text-left" style={{ color: '#fff' }}>Why Invest in Hybrid?</h2>
            <p>Hybrid systems offer the highest Return on Investment (ROI) and peace of mind by combining grid savings with full battery security.</p>
            <ul className="summary-list">
              {data.benefits.map((benefit, i) => (
                <li key={i}><CheckCircle2 size={20} style={{ color: 'var(--accent-primary)' }} /> {benefit}</li>
              ))}
            </ul>
          </div>
          <div className="summary-visual">
            <div className="roi-badge">
              <strong>100%</strong>
              <span>Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default HybridPage;
