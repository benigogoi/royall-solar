import PageHeader from '../components/PageHeader';
import { 
  PhoneCall, Mail, MessageSquare, Wrench, ShieldCheck, 
  Clock, Headset, MapPin, Phone, HelpCircle, 
  FileCheck, Battery, Zap, ChevronRight, CheckCircle2 
} from 'lucide-react';
import './SupportPage.css';
import { contactDetails } from '../data/siteContent';

const SupportPage = () => {
  const supportServices = [
    {
      title: 'Free Consultation',
      desc: 'Our experts evaluate your energy requirements and recommend the most suitable solar or power backup solution for your property.',
      icon: <HelpCircle size={24} />
    },
    {
      title: 'Site Survey & Assessment',
      desc: 'Professional site inspections help determine system sizing, installation feasibility and expected energy generation.',
      icon: <FileCheck size={24} />
    },
    {
      title: 'Installation Services',
      desc: 'Certified installation teams ensure safe, efficient and standards-compliant project execution with dedicated solar installation support.',
      icon: <Wrench size={24} />
    },
    {
      title: 'System Monitoring Support',
      desc: 'Guidance and assistance to help customers track system performance and energy production.',
      icon: <Zap size={24} />
    },
    {
      title: 'Maintenance Services',
      desc: 'Preventive solar maintenance services Assam programs designed to maximize system efficiency and equipment lifespan.',
      icon: <Clock size={24} />
    },
    {
      title: 'Troubleshooting Assistance',
      desc: 'Prompt solar technical assistance for diagnosing and resolving performance issues, inverter alerts and operational concerns.',
      icon: <Headset size={24} />
    },
    {
      title: 'Warranty Support',
      desc: 'Assistance with solar warranty claims, manufacturer coordination and product support.',
      icon: <ShieldCheck size={24} />
    },
    {
      title: 'System Upgrades',
      desc: 'Expand or upgrade existing solar installations as energy requirements grow.',
      icon: <Battery size={24} />
    }
  ];

  const whyChoosePoints = [
    'Dedicated customer assistance',
    'Fast response times',
    'Experienced technical team',
    'Long-term maintenance support',
    'Trusted product brands',
    'Professional project management'
  ];

  const processSteps = [
    { step: '01', title: 'Contact Our Team', desc: 'Reach out to our support channel.' },
    { step: '02', title: 'Issue Assessment', desc: 'Initial understanding of requirements.' },
    { step: '03', title: 'Technical Evaluation', desc: 'In-depth assessment of the system.' },
    { step: '04', title: 'Recommended Solution', desc: 'Tailored action plan for the issue.' },
    { step: '05', title: 'Service Execution', desc: 'Implementation of the resolution.' },
    { step: '06', title: 'Follow-Up Support', desc: 'Ensuring long-term performance.' }
  ];

  const faqItems = [
    { 
      q: 'Solar System Maintenance', 
      a: 'We provide regular solar system maintenance including panel cleaning, electrical safety testing, and performance analysis. Periodic maintenance ensures your system operates at peak efficiency.' 
    },
    { 
      q: 'Battery Replacement Guidance', 
      a: 'If you have an off-grid or hybrid system, our experts can guide you when your batteries need replacement. We supply high-quality, durable solar battery solutions.' 
    },
    { 
      q: 'Inverter Troubleshooting', 
      a: 'If your inverter shows alert indicators, our team is equipped to diagnose and troubleshoot errors, restoring your system back to normal operation.' 
    },
    { 
      q: 'Performance Optimization', 
      a: 'We evaluate existing systems to identify shading, dust accumulation, or wiring issues to optimize generation and increase your daily solar savings.' 
    },
    { 
      q: 'Warranty Assistance', 
      a: 'We assist with solar warranty support, coordinating directly with top brand manufacturers to process repairs or replacement of panels, inverters, or batteries.' 
    },
    { 
      q: 'System Expansion Planning', 
      a: 'As your energy needs grow, we can plan and execute expansions by adding more solar panels or upgrading your hybrid/off-grid inverters.' 
    }
  ];

  return (
    <div className="support-page">
      <PageHeader 
        title="Customer Support & Services" 
        subtitle="Expert Support for Every Stage of Your Solar Journey" 
        bgImage="/assets/installations/home_solar.jpg" 
      />
      
      <div className="container support-content">
        
        {/* Introduction */}
        <div style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: '1.8' }}>
            At <strong>Royall Solar</strong>, our commitment extends beyond installation. As a trusted <strong>solar EPC company Assam</strong>, we provide comprehensive <strong>solar support Assam</strong> services to help customers maximize system performance, maintain reliability and achieve long-term energy savings.
          </p>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: '1.8', marginTop: '16px' }}>
            Whether you need consultation, <strong>solar system maintenance</strong>, troubleshooting or <strong>solar warranty support</strong>, our team is ready to help.
          </p>
        </div>

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

        {/* Support Services Grid */}
        <section style={{ marginTop: '80px' }}>
          <h2 className="section-title">Our Support Services</h2>
          <p className="section-subtitle">Comprehensive solar support Assam for residential, commercial and industrial setups.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {supportServices.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', padding: '28px', background: '#fff',
                border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}>
                <div style={{ width: '48px', height: '48px', background: '#f8fafc', color: '#166534', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 800, color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Our Support Matters & Process Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '80px', alignItems: 'start' }} className="support-split-section">
          {/* Why Our Support Matters */}
          <section>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>Reliable Service You Can Count On</h2>
            <p style={{ color: '#64748b', marginBottom: '32px' }}>We provide professional support before, during and after installation to build trust and improve conversion confidence.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {whyChoosePoints.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={20} style={{ color: '#166534', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 500 }}>{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 16px 0' }}>Service Process</h2>
            <p style={{ color: '#64748b', marginBottom: '32px' }}>A streamlined approach to resolve queries and handle maintenance requests efficiently.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {processSteps.map((step, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#f8fafc', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#166534' }}>{step.step}</span>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{step.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '2px 0 0' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section style={{ marginTop: '80px' }}>
          <h2 className="section-title">Frequent Customer Requests</h2>
          <p className="section-subtitle">Common technical assistance and maintenance queries from our clients in Assam.</p>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqItems.map((faq, i) => (
              <div key={i} style={{
                padding: '24px', borderBottom: '1px solid #e2e8f0'
              }}>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '10px', color: '#0f172a', fontWeight: 700 }}>{faq.q}</h4>
                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Final CTA Section */}
      <section className="section text-center" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '16px' }}>Need Assistance with Your Solar System?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Our experienced support team is ready to help with consultation, maintenance, troubleshooting and technical guidance.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px', textDecoration: 'none', display: 'inline-block' }}>
            Contact Support Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
