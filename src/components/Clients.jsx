import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const Clients = () => {
  const projects = [
    {
      type: 'Residential Rooftop',
      location: 'Jorhat, Assam',
      desc: 'Customized rooftop solar installations helping homeowners reduce electricity costs and increase energy independence.',
      image: '/assets/installations/home_solar.jpg'
    },
    {
      type: 'Commercial Grid-Tie',
      location: 'Guwahati, Assam',
      desc: 'Scalable solar solutions for offices, retail spaces, hotels and institutions across Assam.',
      image: '/assets/installations/backup_system.jpg'
    },
    {
      type: 'Industrial Solar Plant',
      location: 'Dibrugarh, Assam',
      desc: 'Large-scale solar installations engineered for high energy demand and long-term savings.',
      image: '/assets/office_building.png'
    }
  ];

  return (
    <section className="section clients-section" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', fontWeight: 800 }}>
            Our Work
          </span>
          <h2 className="section-title" style={{ marginTop: '12px' }}>
            Projects That Power Progress
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', marginTop: '10px' }}>
            Real-world solar installations engineered by Royall Solar across Assam.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((proj, index) => (
            <div key={index} style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            className="project-showcase-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.02)';
            }}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={proj.image} 
                  alt={proj.type} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', marginBottom: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '4px 10px', background: 'rgba(22, 101, 52, 0.1)', color: 'var(--accent-secondary)', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {proj.type}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    📍 {proj.location}
                  </span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/projects" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            View More Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Clients;
