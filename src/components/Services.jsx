import { installationProcess } from '../data/siteContent';
import { Search, FileText, Settings, Zap, Info } from 'lucide-react';
import './Services.css';

const Services = () => {
  const icons = [<Search />, <FileText />, <Settings />, <Zap />];

  return (
    <section className="section" id="process">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">How To Get Solar For Your Home</h2>
          <p className="section-subtitle">A simple 4-step process to help you save on electricity bills with government support.</p>
        </div>

        <div className="process-grid">
          {installationProcess.map((item, index) => (
            <div key={index} className="process-card">
              <div className="process-number">{item.step}</div>
              <div className="process-icon">{icons[index]}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="subsidy-info-box">
          <div className="subsidy-icon">
            <Info size={32} />
          </div>
          <div className="subsidy-text">
            <h3>PM Surya Ghar: Muft Bijli Yojana</h3>
            <p>Get up to <strong>₹78,000 subsidy</strong> from the Central Government for installing rooftop solar. We provide full assistance in applying for the scheme and getting your subsidy processed quickly.</p>
          </div>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
