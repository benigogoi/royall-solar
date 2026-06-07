import { Link } from 'react-router-dom';
import { productCategories } from '../data/siteContent';
import './ProductCategories.css';

const ProductCategories = () => {
  return (
    <section className="section product-categories-section" id="solutions">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Solar Solutions for Every Energy Need</h2>
          <p className="section-subtitle">Residential, commercial, industrial, and power backup services across Assam.</p>
        </div>

        <div className="categories-grid">
          {productCategories.slice(0, 3).map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-image">
                <img src={cat.image} alt={cat.title} />
              </div>
              <div className="category-info">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="category-footer">
                   <a href="#contact" className="view-btn" style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                     Request Details
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/products" className="view-all-products-btn">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
