import React from 'react';

const Partners = () => {
  const brands = [
    {
      name: 'Waaree',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <circle cx="22" cy="24" r="7" fill="#F37021" />
          <circle cx="22" cy="24" r="4" fill="#FFC20E" />
          <path d="M22 10 L22 14 M22 34 L22 38 M10 24 L14 24 M34 24 L38 24 M14 16 L17 19 M27 29 L30 32 M14 32 L17 29 M27 19 L30 16" stroke="#F37021" strokeWidth="2.2" strokeLinecap="round" />
          <text x="46" y="32" fill="#0B3C5D" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">WAAREE</text>
        </svg>
      )
    },
    {
      name: 'Adani Solar',
      type: 'image',
      src: '/assets/clients/adani.svg',
      customStyle: { maxHeight: '60px' }
    },
    {
      name: 'UTL',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <path d="M12 25 L20 33 L36 17" stroke="#ED1C24" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="24" cy="25" r="14" stroke="#005CA9" strokeWidth="3" fill="none" strokeDasharray="6 3" />
          <text x="48" y="33" fill="#005CA9" fontSize="25" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">UTL</text>
          <text x="106" y="31" fill="#ED1C24" fontSize="13" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">SOLAR</text>
        </svg>
      )
    },
    {
      name: 'Luminous',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <text x="10" y="34" fill="#005CA9" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">LUMINOUS</text>
          <path d="M142 22 L148 16 L146 24 L153 27 L144 29 L145 36 L139 29 Z" fill="#00AEEF" />
        </svg>
      )
    },
    {
      name: 'Livguard',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <path d="M15 12 L28 7 L41 12 L41 24 C41 33 28 41 28 41 C28 41 15 33 15 24 Z" fill="#ED1C24" />
          <path d="M22 21 L27 26 L34 17" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="50" y="33" fill="#111827" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">LIVGUARD</text>
        </svg>
      )
    },
    {
      name: 'Exide',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <rect x="5" y="5" width="150" height="40" rx="6" fill="#ED1C24" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">EXIDE</text>
        </svg>
      )
    },
    {
      name: 'Microtek',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <text x="10" y="33" fill="#0E4F9F" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">MICROTEK</text>
          <circle cx="138" cy="24" r="8" fill="#ED1C24" />
          <circle cx="152" cy="24" r="6" fill="#0E4F9F" />
        </svg>
      )
    },
    {
      name: 'Havells',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <rect x="5" y="5" width="150" height="40" rx="6" fill="#E31E24" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="19" fontWeight="900" fontFamily="sans-serif" letterSpacing="1.5">HAVELLS</text>
        </svg>
      )
    },
    {
      name: 'Tata Power Solar',
      type: 'image',
      src: '/assets/clients/tata.svg',
      customStyle: { maxHeight: '60px' }
    },
    {
      name: 'Vikram Solar',
      type: 'svg',
      svg: (
        <svg viewBox="0 0 180 50" width="100%" height="100%">
          <circle cx="25" cy="24" r="14" fill="#F8A51D" />
          <path d="M25 7 L25 41 M7 24 L41 24 M13 12 L37 36 M13 36 L37 12" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="48" y="32" fill="#15803d" fontSize="17" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">VIKRAM SOLAR</text>
        </svg>
      )
    }
  ];

  return (
    <section className="section partners-section" style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '80px 0' }}>
      <div className="container">
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', fontWeight: 800 }}>
            Our Partners
          </span>
          <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
            Official Partners & Trusted Solar Brands
          </h2>
          <p style={{ color: '#64748b', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
            We work with industry-leading manufacturers to deliver reliable, high-performance solar solutions.
          </p>
        </div>

        {/* Brand Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '60px'
        }} className="brand-logo-grid">
          {brands.map((brand, i) => (
            <div key={i} style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.01)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              cursor: 'default',
              overflow: 'hidden'
            }}
            className="brand-logo-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.01)';
            }}
            >
              {brand.type === 'image' ? (
                <img 
                  src={brand.src} 
                  alt={brand.name} 
                  style={{ 
                    maxWidth: '85%', 
                    maxHeight: '55px', 
                    objectFit: 'contain',
                    ...brand.customStyle 
                  }} 
                />
              ) : (
                <div style={{ width: '85%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {brand.svg}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div style={{ 
          textAlign: 'center', 
          borderTop: '1px dashed #e2e8f0', 
          paddingTop: '40px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            Quality Products. Trusted Performance.
          </h3>
          <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
            Every solar project is only as reliable as the components behind it. That's why Royall Solar works with industry-leading manufacturers to ensure dependable performance, energy efficiency and long-term value for every customer.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Partners;
