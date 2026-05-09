import PageHeader from '../components/PageHeader';
import { Building2, Phone, CheckCircle2 } from 'lucide-react';
import './ClientsPage.css';
import { contactDetails } from '../data/siteContent';

const dealershipBenefits = [
  {
    title: 'Product Access',
    description: 'Get priority access to top-brand solar panels, inverters, and batteries at dealer pricing.',
  },
  {
    title: 'Technical Training',
    description: 'Hands-on training for system sizing, installation, and maintenance for your team.',
  },
  {
    title: 'Marketing Support',
    description: 'We provide brochures, leads, and marketing materials to help you grow locally.',
  },
  {
    title: 'After-Sales Backing',
    description: 'Full warranty and service support from Royall Solar for all products you sell.',
  },
  {
    title: 'Regional Exclusivity',
    description: 'Preferred dealer status in your area to avoid market overlap and competition.',
  },
  {
    title: 'Subsidy Guidance',
    description: 'We train your team on PM Surya Ghar applications so you can help your customers directly.',
  },
];

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <PageHeader title="Dealership" subtitle="Partner with Assam's growing solar brand" bgImage="/assets/installations/home_solar.jpg" />
      
      <div className="container clients-content">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
          <h2 className="section-title">Become a Royall Solar Dealer</h2>
          <p className="section-subtitle" style={{ marginBottom: '24px' }}>
            We are looking for motivated partners across Assam and North-East India. 
            Join us and build a profitable solar business in your area with full company support.
          </p>
          <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-primary">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Call To Discuss
          </a>
        </div>

        <div className="clients-grid">
          {dealershipBenefits.map((benefit, index) => (
            <div key={index} className="dealership-card">
              <CheckCircle2 size={28} className="client-icon" />
              <h3 className="partner-title">{benefit.title}</h3>
              <p className="partner-copy">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <section style={{ marginTop: '80px', textAlign: 'center' }}>
          <h2 className="section-title">How Dealership Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { step: '1', title: 'Apply', desc: 'Call us or fill our form to express interest.' },
              { step: '2', title: 'Discussion', desc: 'Our team will discuss terms and area allocation.' },
              { step: '3', title: 'Training', desc: 'Get trained on products, pricing, and installation.' },
              { step: '4', title: 'Start Selling', desc: 'Begin selling with full Royall Solar backing.' },
            ].map((s) => (
              <div key={s.step} style={{
                padding: '32px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', textAlign: 'center'
              }}>
                <div style={{ width: '48px', height: '48px', background: '#166534', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 900, fontSize: '1.2rem' }}>{s.step}</div>
                <h3 style={{ marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientsPage;
