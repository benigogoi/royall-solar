import React from 'react';
import { Globe } from 'lucide-react';

const AssamCoverage = () => {
  const locations = [
    'Guwahati',
    'Dibrugarh',
    'Jorhat',
    'Silchar',
    'Nagaon',
    'Tinsukia',
    'Tezpur',
    'Barpeta',
    'Bongaigaon',
    'Goalpara'
  ];

  return (
    <section className="section assam-coverage-section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '60px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }} className="support-split-section">
          
          {/* Left content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Globe size={28} style={{ color: 'var(--accent-primary)' }} />
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0, fontSize: '1.8rem' }}>
                Serving Customers Across Assam
              </h2>
            </div>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              Royall Solar proudly delivers residential, commercial and industrial solar solutions throughout Assam. Our team supports customers across major cities, towns and surrounding regions.
            </p>
          </div>

          {/* Right locations grid */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
              {locations.map((loc, i) => (
                <div key={i} style={{ 
                  padding: '12px', 
                  background: '#fff', 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0', 
                  fontSize: '0.95rem', 
                  fontWeight: 700, 
                  color: '#475569', 
                  textAlign: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
                }}>
                  {loc}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AssamCoverage;
