import PageHeader from '../components/PageHeader';
import './CertificationsPage.css';
import { certificationItems } from '../data/siteContent';

const CertificationsPage = () => {
  return (
    <div className="certifications-page">
      <PageHeader title="CERTIFICATIONS" bgImage="/solar_battery.png" />
      
      <div className="container cert-content">
        <p className="cert-intro">
          This page now blends formal quality cues with the practical assurance signals highlighted on the reference
          site, including technology formats, payment confidence, warranty help, and support-led trust markers.
        </p>

        <div className="cert-grid">
          {certificationItems.map((cert, index) => (
            <div key={cert.id} className="cert-card">
              <div className={`cert-vector-badge ${index % 4 === 0 ? 'badge-blue' : index % 4 === 1 ? 'badge-green' : index % 4 === 2 ? 'badge-dark' : 'badge-dark-blue'}`}>
                {cert.name}
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-note">{cert.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
