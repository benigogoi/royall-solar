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
      <section className="support-hero-section">
        <div className="support-hero-bg">
          <img src="/assets/support_hero.png" alt="Royall Solar Support Technician" />
        </div>
        <div className="support-hero-content">
          <div className="support-hero-text">
            <h2>We Are Here To Help</h2>
            <p>
              At <strong>Royall Solar</strong>, our commitment extends beyond installation. As a trusted solar EPC company, we provide comprehensive support services to help you maximize system performance, maintain reliability and achieve long-term energy savings.
            </p>
          </div>
          <div className="hero-contact-grid">
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="hero-contact-card">
              <PhoneCall size={28} />
              <div>Call Us Now</div>
              <span>{contactDetails.mobilePhone}</span>
            </a>
            <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="hero-contact-card">
              <MessageSquare size={28} />
              <div>WhatsApp Chat</div>
              <span>Instant Support</span>
            </a>
            <a href={`mailto:${contactDetails.email}`} className="hero-contact-card">
              <Mail size={28} />
              <div>Email Support</div>
              <span>{contactDetails.email}</span>
            </a>
          </div>
        </div>
      </section>

      <div className="container support-content">

        {/* Support Services Grid */}
        <section style={{ marginTop: '80px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Our Support Services</h2>
            <p className="section-subtitle">Comprehensive solar support for residential, commercial and industrial setups.</p>
          </div>
          <div className="support-services-bento">
            {supportServices.map((item, i) => (
              <div key={i} className="bento-service-card">
                <div className="bento-icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Service Process</h2>
            <p className="section-subtitle">A streamlined approach to resolve queries and handle maintenance requests efficiently.</p>
          </div>
          
          <div className="process-pathway">
            {processSteps.map((step, index) => (
              <div key={index} className="pathway-step">
                <div className="pathway-number">{step.step}</div>
                <div className="pathway-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginTop: '100px', marginBottom: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="section-title">Frequent Customer Requests</h2>
            <p className="section-subtitle">Common technical assistance and maintenance queries from our clients.</p>
          </div>
          <div className="faq-grid">
            {faqItems.map((faq, i) => (
              <div key={i} className="faq-card">
                <h3>
                  <HelpCircle size={20} style={{ color: 'var(--accent-primary)' }} />
                  {faq.q}
                </h3>
                <p>{faq.a}</p>
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
