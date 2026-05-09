import PageHeader from '../components/PageHeader';
import './CertificationsPage.css';
import { brandPartners } from '../data/siteContent';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

const certificationItems = [
  { id: 1, name: 'MNRE Approved', note: 'All our systems meet Ministry of New & Renewable Energy standards.' },
  { id: 2, name: 'ALMM Listed Panels', note: 'We use only government-approved module list panels for subsidy eligibility.' },
  { id: 3, name: 'BIS Certified', note: 'Every electrical component is Bureau of Indian Standards verified.' },
  { id: 4, name: 'IEC Tested', note: 'Panels tested for extreme weather, hail, and electrical safety.' },
  { id: 5, name: 'ISO Quality', note: 'Our installation process follows quality management standards.' },
  { id: 6, name: '25 Year Warranty', note: 'All panels come with manufacturer warranty for long-term peace of mind.' },
];

const CertificationsPage = () => {
  return (
    <div className="certifications-page">
      <PageHeader title="Brands & Quality" subtitle="We only use certified, genuine products from trusted manufacturers" bgImage="/assets/installations/home_solar.jpg" />
      
      <div className="container cert-content">
        
        {/* Brand Partners */}
        <section style={{ marginBottom: '60px' }}>
          <h2 className="section-title">Brands We Deal In</h2>
          <p className="section-subtitle">Top Indian solar manufacturers with proven track records.</p>
          <div className="brand-partners-grid">
            {brandPartners.map((brand) => (
              <div key={brand} className="brand-partner-card">
                <Award size={28} style={{ color: '#f97316', marginBottom: '12px' }} />
                <strong>{brand}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="section-title">Quality & Certifications</h2>
          <p className="section-subtitle">Every product we install meets strict Indian and international standards.</p>
          <div className="cert-grid">
            {certificationItems.map((cert) => (
              <div key={cert.id} className="cert-card">
                <ShieldCheck size={32} style={{ color: '#166534', marginBottom: '16px' }} />
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-note">{cert.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Statement */}
        <section style={{
          marginTop: '60px', padding: '48px',
          background: '#0f172a', color: '#fff', borderRadius: '12px',
          textAlign: 'center'
        }}>
          <CheckCircle2 size={40} style={{ color: '#22c55e', marginBottom: '16px' }} />
          <h2 style={{ color: '#fff', marginBottom: '12px' }}>100% Genuine Products Guarantee</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Every panel, inverter, and battery we install comes with original manufacturer warranty and serial number verification. No duplicate or refurbished products.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CertificationsPage;
