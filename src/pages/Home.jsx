import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';
import Contact from '../components/Contact';
import { trustPoints } from '../data/siteContent';
import { CheckCircle2, Zap, ShieldCheck, Headphones } from 'lucide-react';
import { contactDetails } from '../data/siteContent';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Quick Trust Bar */}
      <section style={{ background: '#0f172a', padding: '24px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <Zap size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>90% Bill Savings</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <ShieldCheck size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>PM Surya Ghar Subsidy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff' }}>
            <Headphones size={20} style={{ color: '#f97316' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Local Support Assam</span>
          </div>
        </div>
      </section>

      <Services />

      {/* Featured Packs */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">Popular Solar Packages</h2>
          <p className="section-subtitle">Choose the right capacity for your home or business. We handle everything from design to installation.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {[
              { kw: '3kW', type: 'Residential', saving: '₹3,500/mo', ideal: 'Small Families', subsidy: '₹78,000' },
              { kw: '5kW', type: 'Residential', saving: '₹6,000/mo', ideal: 'Large Families', subsidy: '₹78,000' },
              { kw: '10kW', type: 'Commercial', saving: '₹12,000/mo', ideal: 'Shops & Offices', subsidy: 'Business ROI' },
            ].map((pack, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center', transition: 'all 0.3s' }} className="pack-card">
                <div style={{ fontSize: '3rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px' }}>{pack.kw}</div>
                <div style={{ color: '#f97316', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '24px' }}>{pack.type} Pack</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ fontSize: '0.95rem', color: '#64748b' }}>Ideal for: <strong>{pack.ideal}</strong></div>
                  <div style={{ fontSize: '0.95rem', color: '#64748b' }}>Monthly Saving: <strong style={{ color: '#166534' }}>{pack.saving}</strong></div>
                  <div style={{ fontSize: '0.95rem', color: '#64748b' }}>Govt. Subsidy: <strong>{pack.subsidy}</strong></div>
                </div>
                <a href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`} className="btn btn-primary" style={{ width: '100%' }}>Get Final Price</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Trust Points */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Assam's Reliable Solar Partner</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {trustPoints.map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '24px', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <CheckCircle2 size={24} style={{ color: '#166534', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{point.title}</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{point.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

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
