import Hero from '../components/Hero';
import SolarSavingsCalculator from '../components/SolarSavingsCalculator';
import ProductCategories from '../components/ProductCategories';
import AboutSection from '../components/AboutSection';
import StatsBar from '../components/StatsBar';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Partners from '../components/Partners';
import InstallationProcess from '../components/InstallationProcess';
import TrustPoints from '../components/TrustPoints';
import ContactSection from '../components/ContactSection';
import HomeFAQ from '../components/HomeFAQ';
import { Zap, ShieldCheck, Headphones } from 'lucide-react';
import { contactDetails } from '../data/siteContent';

const Home = () => {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      
      {/* Quick Trust Bar */}
      <section style={{ background: '#0f172a', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <Zap size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Residential Solar Solutions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <ShieldCheck size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Commercial Solar Projects</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <Headphones size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Installation & Maintenance Support</span>
          </div>
        </div>
      </section>

      {/* 2. Solar Savings Calculator Placeholder */}
      <SolarSavingsCalculator />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Primary Product/Solution Section */}
      <ProductCategories />

      {/* 5. Why Choose Royall Solar */}
      <TrustPoints />

      {/* 6. Trusted Brands We Work With */}
      <Partners />

      {/* 7. Our Simple Process */}
      <InstallationProcess />

      {/* 8. Customer Testimonials */}
      <Testimonials />

      {/* 9. Project Showcase */}
      <Clients />

      {/* 10. Statistics */}
      <StatsBar />

      {/* FAQ Section */}
      <HomeFAQ />

      {/* 11. Consultation Form / CTA */}
      <ContactSection />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 999,
          width: '60px', height: '60px', borderRadius: '50%',
          background: '#25d366', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        .pack-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-primary) !important;
          box-shadow: var(--shadow-xl);
        }
      `}</style>
    </>
  );
};

export default Home;
