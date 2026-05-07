import PageHeader from '../components/PageHeader';
import { PhoneCall, Mail, MapPin, Map, Building, Headset, ShieldCheck } from 'lucide-react';
import './SupportPage.css';
import { contactDetails, serviceResources, supportChannels } from '../data/siteContent';

const SupportPage = () => {
  return (
    <div className="support-page">
      <PageHeader title="SUPPORT" bgImage="/solar_battery.png" />
      
      <div className="container support-content">
        
        {/* Support Grid Sections */}
        <div className="support-grid-wrapper">
          
          {/* Engineers Section */}
          <div className="support-section-card glass-panel">
            <div className="section-header-banner">
              <Headset className="header-icon" size={24} />
              <h3>Sales and Service</h3>
              <p>Direct guidance for enquiries, follow-up, and complaint support</p>
            </div>
            
            <div className="data-list">
              {supportChannels.map((item, index) => (
                item.isHeader ? (
                  <div key={`header-${index}`} className="zone-divider">
                    <Map size={18} className="zone-icon" />
                    <span>{item.title}</span>
                  </div>
                ) : (
                  <div key={item.id} className="data-row">
                    <div className="data-primary"><strong>{item.eng}</strong></div>
                    <div className="data-secondary"><MapPin size={14} className="pin-icon" /> {item.loc}</div>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Service Centres Section */}
          <div className="support-section-card glass-panel">
            <div className="section-header-banner">
              <Building className="header-icon" size={24} />
              <h3>Policies and Resources</h3>
              <p>Important customer-facing information inspired by the reference site</p>
            </div>
            
            <div className="data-list pb-extra">
              {serviceResources.map((item) => (
                <div key={item.id} className="data-row">
                  <div className="data-primary"><strong>{item.center}</strong></div>
                  <div className="data-secondary"><MapPin size={14} className="pin-icon" /> {item.loc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Contact Banner */}
        <div className="premium-contact-section">
          <div className="contact-text-area">
            <ShieldCheck size={40} className="shield-icon" />
            <h2 className="support-heading">Need Warranty or Order Assistance?</h2>
            <p className="support-subtitle">Connect with Royall Solar for complaint handling, warranty guidance, dispatch updates, and technical support.</p>
          </div>

          <div className="premium-contact-cards">
            {/* Toll Free Card */}
            <div className="premium-card">
              <div className="icon-wrapper">
                <PhoneCall size={24} />
              </div>
              <div className="premium-card-content">
                <h4>Customer Care Toll-Free</h4>
                <div className="contact-bold">{contactDetails.carePhone}</div>
                <div className="contact-meta">Mobile: {contactDetails.mobilePhone} | {contactDetails.alternatePhone}</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="premium-card">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="premium-card-content">
                <h4>Email Support</h4>
                <div className="contact-bold email-text">{contactDetails.email}</div>
                <div className="contact-meta">Share product details, order references, and service requirements for faster follow-up.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;
