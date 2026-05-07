import PageHeader from '../components/PageHeader';
import { Building2 } from 'lucide-react';
import './ClientsPage.css';
import { dealershipBenefits } from '../data/siteContent';

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <PageHeader title="DEALERSHIP" bgImage="/hero_solar.png" />
      
      <div className="container clients-content">
        <p className="clients-intro">
          The reference site places strong emphasis on dealership and business reach, so this page now presents Royall
          Solar as a partnership-ready brand for channel growth, installer collaboration, and regional product
          expansion without changing the visual system of your existing website.
        </p>

        <div className="clients-grid">
          {dealershipBenefits.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientCard = ({ client }) => {
  return (
    <div className="client-logo-card glass-panel dealership-card">
      <Building2 size={32} className="client-icon" />
      <h3 className="partner-title">{client.title}</h3>
      <p className="partner-copy">{client.description}</p>
    </div>
  );
};

export default ClientsPage;
