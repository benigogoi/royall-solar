import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Building2 } from 'lucide-react';
import './ClientsPage.css';

const CLIENTS = [
  { name: "Indian Railways", domain: "indianrailways.gov.in" },
  { name: "ICICI Bank", domain: "icicibank.com" },
  { name: "Exide Industrial", domain: "exideindustries.com" },
  { name: "BSNL", domain: "bsnl.co.in" },
  { name: "Airtel", domain: "airtel.in" },
  { name: "TATA", domain: "tata.com" },
  { name: "HP", domain: "hp.com" },
  { name: "Coca-Cola", domain: "coca-cola.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "IndianOil", domain: "iocl.com" },
  { name: "ONGC", domain: "ongcindia.com" },
  { name: "Blue Dart", domain: "bluedart.com" },
  { name: "State Bank of India", domain: "sbi.co.in" },
  { name: "Union Bank", domain: "unionbankofindia.co.in" },
  { name: "IDBI Bank", domain: "idbibank.in" },
  { name: "Indian Navy", domain: "indiannavy.nic.in" },
  { name: "CPWD", domain: "cpwd.gov.in" },
  { name: "IIT Guwahati", domain: "iitg.ac.in" },
  { name: "Assam University", domain: "aus.ac.in" },
  { name: "Star Cement", domain: "starcement.co.in" }
];

const ClientsPage = () => {
  return (
    <div className="clients-page">
      <PageHeader title="CLIENTS" bgImage="/hero_solar.png" />
      
      <div className="container clients-content">
        <p className="clients-intro">
          We take pleasure in introducing <strong>ROYALL SOLAR SERVICES PVT. LTD.</strong> as a company devoted in the field of Power Protection and Solar Equipments. We have been extending our rich experience of providing Uninterruptible Power Supply and other power protection products to a widest range of clients. As India has entered into a fast paced trajectory, the subsequent demand in infrastructure is bound to grow, and we are here to support it.
        </p>

        <div className="clients-grid">
          {CLIENTS.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ClientCard = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="client-logo-card glass-panel">
      {!imgError ? (
        <img 
          src={`https://logo.clearbit.com/${client.domain}`} 
          alt={client.name} 
          className="real-client-logo"
          onError={() => setImgError(true)}
        />
      ) : (
        <Building2 size={32} className="client-icon" />
      )}
      <span className="client-name">{client.name}</span>
    </div>
  );
};

export default ClientsPage;
