import PageHeader from '../components/PageHeader';
import FeaturedProducts from '../components/FeaturedProducts';
import { productCategories } from '../data/siteContent';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import './ProductsPage.css';

const ProductsPage = () => {
  

  const whyChoosePoints = [
    'Genuine products from leading brands',
    'Professional installation services',
    'Customized system recommendations',
    'Warranty and after-sales support',
    'Solutions for homes, businesses and industries'
  ];

  return (
    <div className="products-page">
      <PageHeader 
        title="Our Products & Solutions" 
        subtitle="Reliable Solar & Power Solutions for Every Need" 
        bgImage="/assets/installations/products_header.png" 
      />
      
      {/* Introduction with SEO Keywords */}
      <section className="section bg-subtle" style={{ padding: '40px 0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
            Royall Solar offers a complete range of high-quality <strong>Solar Products in Assam</strong>, including high-performance <strong>Solar Panels Assam</strong> and advanced <strong>Solar Inverters Assam</strong> for residential, commercial and industrial customers across the state. As a leading <strong>Solar EPC Company Assam</strong>, we partner with trusted brands to deliver customized <strong>Hybrid Solar Systems</strong>, efficient <strong>Solar Battery Solutions</strong>, and durable <strong>Solar Water Pumps</strong> backed by professional installation. Whether you need residential setups or scaled <strong>Commercial Solar Solutions Assam</strong>, our team is ready to deliver.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">We offer complete solar EPC and power backup products tailored to deliver maximum efficiency and performance.</p>
          
          <div className="categories-grid">
            {productCategories.map((cat) => (
              <div key={cat.id} className="category-card">
                <div className="category-image" style={{ background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: cat.image.includes('products') ? '20px' : '0' }}>
                  <img src={cat.image} alt={cat.title} style={{ objectFit: cat.image.includes('products') ? 'contain' : 'cover' }} />
                </div>
                <div className="category-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <ul className="category-features">
                    {cat.features.map((f, i) => (
                      <li key={i}>
                        <Check size={16} style={{ color: '#166534', flexShrink: 0 }} /> 
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact#contact" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                    Request Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Why Choose Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Quality Products Backed by Expert Support</h2>
          <p className="section-subtitle">We don't just sell products; we deliver end-to-end solar solutions with lifetime value.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
            {whyChoosePoints.map((point, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ width: '40px', height: '40px', background: '#fff', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>
                  <Check size={20} />
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Final CTA Section */}
      <section className="section" style={{ background: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: '#fff' }}>Need Help Choosing the Right Solution?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
            Our experts will evaluate your energy requirements and recommend the most suitable solar or power backup solution for your property.
          </p>
          <Link to="/contact#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '14px 40px' }}>
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
