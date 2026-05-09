import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Battery, Cpu, Sun, ZapOff, ArrowRight } from 'lucide-react';
import './SolarSolutionPage.css';

const OffGridPage = () => {
  const data = solarSolutions.find(s => s.id === 'off-grid');

  return (
    <div className="solution-page">
      {/* New Intro Section */}
      <section className="section offgrid-intro-banner">
        <div className="container text-center">
          <h2 className="banner-title">RoyallSolar Off-Grid Solar System</h2>
          <p className="banner-text">
            Tired of frequent power cuts? <strong>RoyallSolar Off-Grid Solar Systems</strong> provide complete energy independence. 
            By combining <strong>high-capacity tubular batteries</strong> with <strong>intelligent PCUs</strong>, 
            we ensure your home or business runs smoothly even during total grid failure.
          </p>
        </div>
      </section>

      {/* Working Principle */}
      <section className="section solution-intro">
        <div className="container intro-container">
          <div className="intro-content">
            <div className="section-badge">How It Works</div>
            <h2 className="section-title text-left">24/7 Energy Security</h2>
            <p className="solution-description">{data.description}</p>
            
            <div className="infographic-container vertical-steps">
              {data.howItWorks.map((item, i) => (
                <div key={i} className="info-step-vertical">
                  <div className="step-marker">
                    <div className="step-circle">{i + 1}</div>
                    {i < data.howItWorks.length - 1 && <div className="step-line"></div>}
                  </div>
                  <div className="step-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="intro-visual">
            <div className="visual-card">
              <img src="/assets/installations/backup_system.jpg" alt="Off-grid solar installation" />
              <div className="visual-badge">Independent Power</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="section bg-dark text-white product-showcase">
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>The Off-Grid Ecosystem</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Engineered for areas with high power cuts or no grid connectivity.</p>
          <div className="product-grid-detailed">
            {data.products.map((product, i) => (
              <div key={i} className="product-card-solution dark-card">
                <div className="product-image-box">
                  <img src={product.icon === 'cpu' ? '/assets/products/gamma_pcu.png' : product.icon === 'battery' ? '/assets/products/battery.png' : '/assets/products/mono_panel.png'} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="product-spec" style={{ color: 'var(--accent-primary)' }}>{product.spec}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section advantages-section">
        <div className="container">
          <div className="advantages-grid">
            <div className="advantage-image">
               <ZapOff size={120} className="large-icon-faded" />
            </div>
            <div className="advantage-text">
              <h2 className="section-title text-left">Why Go Off-Grid?</h2>
              <div className="advantage-items">
                <div className="adv-item">
                  <CheckCircle2 size={24} />
                  <div>
                    <h4>Reliable Backup</h4>
                    <p>Unlike simple inverters, Solar PCUs keep your batteries charged via sun even when the grid fails for days.</p>
                  </div>
                </div>
                <div className="adv-item">
                  <CheckCircle2 size={24} />
                  <div>
                    <h4>Cost Predictability</h4>
                    <p>No more rising electricity rates. Your energy cost is fixed once you install an Off-grid system.</p>
                  </div>
                </div>
                <div className="adv-item">
                  <CheckCircle2 size={24} />
                  <div>
                    <h4>Eco-Friendly Lifestyle</h4>
                    <p>Reduce your carbon footprint by running entirely on renewable energy from RoyallSolar panels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default OffGridPage;
