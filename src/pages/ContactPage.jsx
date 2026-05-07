import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 300px)' }}>
      <PageHeader title="CONTACT US" bgImage="/solar_battery.png" />
      <Contact />
    </div>
  );
};

export default ContactPage;
