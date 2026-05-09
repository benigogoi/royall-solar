import PageHeader from '../components/PageHeader';
import { PhoneCall, Mail, MapPin, Headset, Wrench, ShieldCheck, Clock, Phone, MessageSquare } from 'lucide-react';
import './SupportPage.css';
import { contactDetails } from '../data/siteContent';

const faqItems = [
  { q: 'How much can I save with solar?', a: 'Most families save 80-90% on their monthly electricity bill after installing a rooftop solar system.' },
  { q: 'What is PM Surya Ghar subsidy?', a: 'The government provides up to ₹78,000 subsidy for installing rooftop solar on residential buildings. We help with the entire application process.' },
  { q: 'How long does installation take?', a: 'Typically 2-3 days for residential systems. Commercial systems may take 5-7 days depending on size.' },
  { q: 'Do solar panels work in Assam rains?', a: "Yes. Solar panels work in cloudy and rainy weather too, though output is reduced. Systems are designed to handle Assam's climate." },
  { q: 'What maintenance is needed?', a: 'Just periodic cleaning of panels (every 2-3 months). We offer maintenance packages for regular check-ups.' },
  { q: 'What brands do you use?', a: 'We use top-quality panels from Adani, Waaree, Vikram Solar and inverters from reputed manufacturers.' },
];

const SupportPage = () => {
  return (
    <div className="support-page">
      <PageHeader title="Support" subtitle="We are here to help — before, during, and after installation" bgImage="/assets/installations/home_solar.jpg" />
      
      <div className="container support-content">
        
        {/* Quick Contact Cards */}
        <div className="support-contact-grid">
          <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="support-cta-card cta-call">
            <PhoneCall size={28} />
            <div>
              <strong>Call Us Now</strong>
              <span>{contactDetails.mobilePhone}</span>
            </div>
          </a>
          <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="support-cta-card cta-whatsapp">
            <MessageSquare size={28} />
            <div>
              <strong>WhatsApp Support</strong>
              <span>Send us a message</span>
            </div>
          </a>
          <a href={`mailto:${contactDetails.email}`} className="support-cta-card">
            <Mail size={28} />
            <div>
              <strong>Email Us</strong>
              <span>{contactDetails.email}</span>
            </div>
          </a>
        </div>

        {/* Services Grid */}
        <section style={{ marginTop: '60px' }}>
          <h2 className="section-title">Our Support Services</h2>
          <p className="section-subtitle">From installation to maintenance — we are with you at every step.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { icon: <Wrench size={24} />, title: 'Installation Support', desc: 'Professional setup by trained technicians with proper structure and wiring.' },
              { icon: <ShieldCheck size={24} />, title: 'Warranty Handling', desc: 'We manage all warranty claims directly with manufacturers on your behalf.' },
              { icon: <Clock size={24} />, title: 'Regular Maintenance', desc: 'Scheduled cleaning and inspection to keep your system at peak performance.' },
              { icon: <Headset size={24} />, title: 'Technical Help', desc: 'Having issues with your system? Call us anytime for quick troubleshooting.' },
              { icon: <MapPin size={24} />, title: 'On-Site Visits', desc: 'Our team will come to your location for any repair or inspection work.' },
              { icon: <Phone size={24} />, title: 'Subsidy Follow-Up', desc: 'Not received your subsidy yet? We help track and follow up with authorities.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', padding: '28px', background: '#fff',
                border: '1px solid #e2e8f0', borderRadius: '8px'
              }}>
                <div style={{ width: '48px', height: '48px', background: '#f8fafc', color: '#166534', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginTop: '80px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common questions from our customers in Assam.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqItems.map((faq, i) => (
              <div key={i} style={{
                padding: '24px', borderBottom: '1px solid #e2e8f0'
              }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', color: '#0f172a' }}>{faq.q}</h4>
                <p style={{ color: '#64748b', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default SupportPage;
