import React from 'react';

const Partners = () => {
  const brands = [
    {
      name: 'Waaree',
      type: 'image',
      src: '/assets/brands/waaree.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'Adani Solar',
      type: 'image',
      src: '/assets/brands/adani.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'UTL',
      type: 'image',
      src: '/assets/brands/utl.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'Luminous',
      type: 'image',
      src: '/assets/brands/luminous.jpg'
    },
    {
      name: 'Livguard',
      type: 'image',
      src: '/assets/brands/livguard.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'Exide',
      type: 'image',
      src: '/assets/brands/exide.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'Microtek',
      type: 'image',
      src: '/assets/brands/microtek.png',
      customStyle: { transform: 'scale(1.5)' }
    },
    {
      name: 'Havells',
      type: 'image',
      src: '/assets/brands/havells.svg'
    },
    {
      name: 'Tata Power Solar',
      type: 'image',
      src: '/assets/clients/tata.svg'
    },
    {
      name: 'Vikram Solar',
      type: 'image',
      src: '/assets/brands/vikram.png',
      customStyle: { transform: 'scale(1.5)' }
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
              height: '120px',
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
                    maxWidth: '95%', 
                    maxHeight: '80px', 
                    objectFit: 'contain',
                    mixBlendMode: 'multiply',
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
