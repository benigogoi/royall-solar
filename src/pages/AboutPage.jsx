import PageHeader from '../components/PageHeader';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 300px)' }}>
      <PageHeader title="ABOUT US" bgImage="/hero_solar.png" />
      <About />
    </div>
  );
};

export default AboutPage;
