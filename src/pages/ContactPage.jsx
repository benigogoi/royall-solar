import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { contactDetails } from '../data/siteContent';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We are always available. Call, WhatsApp, or visit our Sonari office." bgImage="/assets/installations/home_solar.jpg" />
      
      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s'
            }}>
              <Phone size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px' }}>Call Us</h3>
              <p style={{ color: '#64748b', marginBottom: '4px' }}>{contactDetails.carePhone}</p>
              <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>{contactDetails.mobilePhone}</p>
            </a>

            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit'
            }}>
              <MessageSquare size={36} style={{ color: '#16a34a', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px' }}>WhatsApp</h3>
              <p style={{ color: '#64748b', marginBottom: '4px' }}>Send photos of your roof</p>
              <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>Chat Now</p>
            </a>

            <a href={`mailto:${contactDetails.email}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit'
            }}>
              <Mail size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px' }}>Email</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{contactDetails.email}</p>
            </a>

            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px'
            }}>
              <Clock size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px' }}>Working Hours</h3>
              <p style={{ color: '#64748b', marginBottom: '4px' }}>Mon – Sat: 9AM – 6PM</p>
              <p style={{ color: '#64748b' }}>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* Office Location */}
      <section style={{ background: '#f8fafc', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <MapPin size={40} style={{ color: '#f97316', marginBottom: '16px' }} />
          <h2 className="section-title">Our Office</h2>
          <p style={{ color: '#64748b', maxWidth: '500px', margin: '12px auto 24px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {contactDetails.office}
          </p>
          <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-primary">
            <Phone size={18} style={{ marginRight: '8px' }} />
            Call For Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
