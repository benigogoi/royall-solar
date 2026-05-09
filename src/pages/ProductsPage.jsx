import PageHeader from '../components/PageHeader';
import FeaturedProducts from '../components/FeaturedProducts';
import Contact from '../components/Contact';
import { productCategories } from '../data/siteContent';
import { Check, Phone } from 'lucide-react';
import { contactDetails } from '../data/siteContent';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <PageHeader title="Our Products" subtitle="Solar solutions for homes, farms, shops, and businesses in Assam" bgImage="/assets/installations/home_solar.jpg" />
      
      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">We provide end-to-end solar solutions. From rooftop panels to water pumps — everything your home or business needs.</p>
          
          <div className="categories-grid">
            {productCategories.map((cat) => (
              <div key={cat.id} className="category-card">
                <div className="category-image">
                  <img src={cat.image} alt={cat.title} />
                  <div className="category-badge">{cat.navLabel}</div>
                </div>
                <div className="category-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <ul className="category-features">
                    {cat.features.map((f, i) => <li key={i}><Check size={16} style={{ color: '#166534', flexShrink: 0 }} /> {f}</li>)}
                  </ul>
                  <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                    <Phone size={18} style={{ marginRight: '8px' }} />
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* CTA Section */}
      <section className="section" style={{ background: '#0f172a', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#fff' }}>Need a Custom System for Your Building?</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Our engineers will visit your site, check your roof, and design the right system for your needs and budget.</p>
          <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-primary" style={{ marginTop: '16px' }}>
            <Phone size={18} style={{ marginRight: '8px' }} />
            Call For Free Site Visit
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ProductsPage;
