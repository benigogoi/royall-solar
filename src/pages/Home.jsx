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

      {/* 7. Our Simple Process */}
      <InstallationProcess />

      {/* 3. About */}
      <AboutSection />

      {/* 4. Primary Product/Solution Section */}
      <ProductCategories />

      {/* 5. Why Choose Royall Solar */}
      <TrustPoints />

      {/* 6. Trusted Brands We Work With */}
      <Partners />

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
