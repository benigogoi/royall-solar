import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'ONGC', logo: '/assets/clients/ongc.svg' },
    { name: 'Wipro', logo: '/assets/clients/wipro.svg' },
    { name: 'Tata', logo: '/assets/clients/tata.svg' },
    { name: 'NTPC', logo: '/assets/clients/ntpc.svg' },
    { name: 'Adani', logo: '/assets/clients/adani.svg' }
  ];

  return (
    <section className="section clients-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Projects That Power Progress</h2>
        </div>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p className="disclaimer">From residential rooftops to commercial and industrial installations, our projects are helping customers across Assam generate clean and affordable energy.</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
