import PageHeader from '../components/PageHeader';
import { Award, Leaf, ShieldCheck, CheckCircle, Component, Recycle, Settings } from 'lucide-react';
import './CertificationsPage.css';

const CERTIFICATIONS = [
  { id: 1, name: "ISO 9001:2015", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ISO_9001-2015.svg/200px-ISO_9001-2015.svg.png" },
  { id: 2, name: "ISO 14001", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ISO_14001-2015.svg/200px-ISO_14001-2015.svg.png" },
  { id: 3, name: "ISO 27001", badgeClass: "badge-blue" },
  { id: 4, name: "ISO 45001:2018", badgeClass: "badge-green" },
  { id: 5, name: "ISO 50001", badgeClass: "badge-blue" },
  { id: 6, name: "CE Marking", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/CE_mark.svg/200px-CE_mark.svg.png" },
  { id: 7, name: "RoHS Compliant", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/RoHS_logo.svg/200px-RoHS_logo.svg.png" },
  { id: 8, name: "IEC", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/IEC_logo.svg/200px-IEC_logo.svg.png" },
  { id: 9, name: "IS 16242 (Part - 1)", badgeClass: "badge-dark" },
  { id: 10, name: "MSME", badgeClass: "badge-blue" },
  { id: 11, name: "NSIC Certified", badgeClass: "badge-dark-blue" },
  { id: 12, name: "E-Waste Mgmt", badgeClass: "badge-green" },
];

const CertificationsPage = () => {
  return (
    <div className="certifications-page">
      <PageHeader title="CERTIFICATIONS" bgImage="/solar_battery.png" />
      
      <div className="container cert-content">
        <div className="cert-grid">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.id} className="cert-card">
              {cert.imgUrl ? (
                <img src={cert.imgUrl} alt={cert.name} className="cert-real-img" />
              ) : (
                <div className={`cert-vector-badge ${cert.badgeClass}`}>
                  {cert.name}
                </div>
              )}
              {cert.imgUrl && <h3 className="cert-name">{cert.name}</h3>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
