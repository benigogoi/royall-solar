import PageHeader from '../components/PageHeader';
import { PhoneCall, Mail, MapPin, Map, Building, Headset, ShieldCheck } from 'lucide-react';
import './SupportPage.css';

const OUTSIDE_SUPPORT = [
  { isHeader: true, title: "North-Eastern Zone" },
  { id: 1, eng: "Silchar", loc: "Karimganj, Hailakandi, Mizoram" },
  { id: 2, eng: "Jorhat", loc: "Jorhat, Golaghat, Dimapur, Diphu" },
  { id: 3, eng: "Dibrugarh", loc: "Dibrugarh, Tinsukia, Digboi, Duliajan" },
  { id: 4, eng: "Barpeta", loc: "Barpeta, Kokrajhar, Goalpara" },
  { id: 5, eng: "Imphal", loc: "Manipur" },
  { id: 6, eng: "Siliguri", loc: "Sikkim, North Bengal, North Bihar" },
  { isHeader: true, title: "West Zone" },
  { id: 7, eng: "Mumbai", loc: "Maharashtra" },
  { id: 8, eng: "Chennai", loc: "Tamil Nadu, Telengana" },
  { isHeader: true, title: "North Zone" },
  { id: 9, eng: "Jaipur", loc: "Rajasthan" },
  { id: 10, eng: "Jammu", loc: "J&K, Himachal" },
];

const SERVICE_CENTRES = [
  { id: 1, center: "Guwahati Head Office", loc: "Guwahati (Rural & Metro), Tangla, Jagiroad" },
  { id: 2, center: "Tezpur Branch Office", loc: "Tezpur/Nagaon/ N. Lakhimpur/Arunachal Pradesh/ Dhemaji" },
  { id: 3, center: "Kolkata Regional Office", loc: "West Bengal, Jharkhand, Bihar" },
  { id: 4, center: "Agartala Branch office", loc: "Tripura" },
  { id: 5, center: "Bangalore Regional Office", loc: "Karnataka, Kerala" },
  { id: 6, center: "New Delhi Regional Office", loc: "Punjab, Haryana, UP west" },
  { id: 7, center: "Bhubaneswar Branch Office", loc: "Odisha, Chhattisgarh" },
];

const SupportPage = () => {
  return (
    <div className="support-page">
      <PageHeader title="OUR SUPPORT" bgImage="/solar_battery.png" />
      
      <div className="container support-content">
        
        {/* Support Grid Sections */}
        <div className="support-grid-wrapper">
          
          {/* Engineers Section */}
          <div className="support-section-card glass-panel">
            <div className="section-header-banner">
              <Headset className="header-icon" size={24} />
              <h3>Resident Engineers</h3>
              <p>Coverage by specialized personnel</p>
            </div>
            
            <div className="data-list">
              {OUTSIDE_SUPPORT.map((item, index) => (
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
              <h3>Service Centres</h3>
              <p>Regional infrastructure & offices</p>
            </div>
            
            <div className="data-list pb-extra">
              {SERVICE_CENTRES.map((item) => (
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
            <h2 className="support-heading">Need Online Warranty Verification?</h2>
            <p className="support-subtitle">Get immediate after-sales service and support verification directly from Royall Solar representatives.</p>
          </div>

          <div className="premium-contact-cards">
            {/* Toll Free Card */}
            <div className="premium-card">
              <div className="icon-wrapper">
                <PhoneCall size={24} />
              </div>
              <div className="premium-card-content">
                <h4>Customer Care Toll-Free</h4>
                <div className="contact-bold">1800-345-3758</div>
                <div className="contact-meta">Mobile: 97060-60804 &nbsp;|&nbsp; 98640-94804</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="premium-card">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="premium-card-content">
                <h4>Email Support</h4>
                <div className="contact-bold email-text">customer.care@royallsolar.co.in</div>
                <div className="contact-meta">service@... &nbsp;|&nbsp; gm.service@...</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;
