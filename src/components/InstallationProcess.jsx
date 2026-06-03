import './InstallationProcess.css';
import { Search, FileText, Settings, ShieldCheck, ArrowRight } from 'lucide-react';
import { installationProcess } from '../data/siteContent';

const InstallationProcess = () => {
  const icons = [<Search size={32} />, <FileText size={32} />, <Settings size={32} />, <ShieldCheck size={32} />];
  const steps = installationProcess.map((step, index) => ({
    ...step,
    icon: icons[index]
  }));

  return (
    <section className="section process-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Simple Process</h2>
          <p className="section-subtitle">A clear project journey from energy assessment to installation, monitoring, and support.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number-bg">{index + 1}</div>
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="subsidy-alert-card">
          <div className="subsidy-info">
            <div className="subsidy-icon">
              <div className="pulse"></div>
              <span>i</span>
            </div>
            <div className="subsidy-text">
              <h3>READY TO SWITCH TO SOLAR?</h3>
              <p>Take control of your energy costs with reliable solar solutions from Royall Solar. Contact our team today for a free consultation and customized proposal.</p>
            </div>
          </div>
          <button className="subsidy-btn">
            GET STARTED TODAY <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
