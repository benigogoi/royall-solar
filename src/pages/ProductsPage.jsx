import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import FeaturedProducts from '../components/FeaturedProducts';

const ProductsPage = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 300px)' }}>
      <PageHeader title="PRODUCTS" bgImage="/hero_solar.png" />
      <Services />
      <FeaturedProducts />
    </div>
  );
};

export default ProductsPage;
