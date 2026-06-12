import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';
import { contactDetails } from '../data/siteContent';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Globe } from 'lucide-react';

const ContactPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to let the page fully render first
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  const whyContactPoints = [
    'Free Consultation',
    'Customized Proposals',
    'Professional Site Assessment',
    'Expert Technical Guidance',
    'Trusted Product Brands',
    'End-to-End Project Support'
  ];

  const serviceAreas = [
    'Guwahati', 'Dibrugarh', 'Jorhat', 'Silchar', 'Tezpur',
    'Nagaon', 'Tinsukia', 'Bongaigaon', 'Goalpara', 'Barpeta'
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Royall Solar" 
        subtitle="Let's Discuss Your Solar Energy Requirements" 
        bgImage="/assets/installations/contact_header.png" 
      />
      
      {/* Introduction */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.8' }}>
            Whether you are planning a residential rooftop installation, a commercial solar project or an industrial energy solution, our team is ready to assist.
          </p>
          <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.8', marginTop: '16px' }}>
            Contact <strong>Royall Solar</strong> today for expert guidance, customized recommendations and a free consultation. We are a premier <strong>solar company Assam</strong> and trusted <strong>solar EPC company Assam</strong> ready to help you with any <strong>solar installation Assam</strong>.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff7ed', border: '2px solid #fed7aa', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s'
            }}>
              <Phone size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px', fontWeight: 800 }}>Call Us</h3>
              <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.9rem', lineHeight: 1.4 }}>Speak directly with our team for project inquiries, consultations and support.</p>
              <p style={{ color: '#64748b', marginBottom: '4px', fontSize: '0.85rem' }}>{contactDetails.carePhone}</p>
              <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>{contactDetails.mobilePhone}</p>
            </a>

            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#f0fdf4', border: '2px solid #bbf7d0', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit'
            }}>
              <MessageSquare size={36} style={{ color: '#16a34a', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px', fontWeight: 800 }}>WhatsApp Us</h3>
              <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.9rem', lineHeight: 1.4 }}>Send photos of your roof or bills for instant solar energy solutions Assam estimates.</p>
              <p style={{ fontWeight: 800, fontSize: '1.1rem' }}>Chat Now</p>
            </a>

            <a href={`mailto:${contactDetails.email}`} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px',
              textDecoration: 'none', color: 'inherit'
            }}>
              <Mail size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px', fontWeight: 800 }}>Email Us</h3>
              <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.9rem', lineHeight: 1.4 }}>Send us your questions and project requirements and our team will respond promptly.</p>
              <p style={{ color: '#f97316', fontWeight: 700, fontSize: '1rem' }}>{contactDetails.email}</p>
            </a>

            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              padding: '36px 24px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px'
            }}>
              <Clock size={36} style={{ color: '#f97316', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '12px', fontWeight: 800 }}>Working Hours</h3>
              <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.9rem', lineHeight: 1.4 }}>Our team is ready to coordinate site visits and system consultations.</p>
              <p style={{ color: '#64748b', marginBottom: '4px', fontSize: '0.9rem' }}>Mon – Sat: 9AM – 6PM</p>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Split Section (Why Us & Service Area) */}
      <section className="section bg-subtle" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'start' }} className="support-split-section">
            {/* Why Contact Royall Solar */}
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px 0', fontSize: '1.8rem' }}>Why Contact Royall Solar</h2>
              <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '0.95rem' }}>
                We bring specialized technical excellence and premium rooftop solar Assam configurations to every client.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {whyContactPoints.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={20} style={{ color: '#166534', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: '#334155', fontWeight: 600 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Serving Customers Across Assam */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Globe size={28} style={{ color: '#f97316' }} />
                <h2 className="section-title" style={{ textAlign: 'left', margin: 0, fontSize: '1.8rem' }}>Serving Customers Across Assam</h2>
              </div>
              <p style={{ color: '#64748b', marginBottom: '24px', fontSize: '1rem', lineHeight: '1.6' }}>
                Royall Solar proudly provides solar energy solutions and power backup systems throughout Assam. We work with homeowners, businesses, institutions and industrial clients across urban and rural locations.
              </p>
              <p style={{ fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>We actively serve:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                {serviceAreas.map((area, i) => (
                  <div key={i} style={{ padding: '8px 12px', background: '#fff', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 600, color: '#475569', textAlign: 'center' }}>
                    {area}
                  </div>
                ))}
              </div>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '16px', fontStyle: 'italic' }}>And surrounding regions across the state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form - WhatsApp Redirect */}
      <ContactSection />

      {/* Office Location */}
      <section style={{ background: '#f8fafc', padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
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

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Ready to Switch to Solar?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Take the first step toward lower electricity bills and reliable energy solutions with Royall Solar.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px', textDecoration: 'none', display: 'inline-block' }}>
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
