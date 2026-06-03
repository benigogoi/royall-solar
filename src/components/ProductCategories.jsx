import { productCategories } from '../data/siteContent';
import './ProductCategories.css';

const ProductCategories = () => {
  return (
    <section className="section product-categories-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Solar Solutions for Every Energy Need</h2>
          <p className="section-subtitle">Residential, commercial, industrial, and power backup services across Assam.</p>
        </div>

        <div className="categories-grid">
          {productCategories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-image">
                <img src={cat.image} alt={cat.title} />
              </div>
              <div className="category-info">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="category-footer">
                   <button className="view-btn">Request Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
