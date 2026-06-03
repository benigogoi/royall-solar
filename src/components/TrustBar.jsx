import { Truck, CreditCard, Headphones, ShieldCheck } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const benefits = [
    {
      icon: <Truck size={32} />,
      title: 'All Assam',
      subtitle: 'Solar EPC Service'
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Custom Design',
      subtitle: 'Built Around Usage'
    },
    {
      icon: <Headphones size={32} />,
      title: '24/7 Support',
      subtitle: 'Customer Assistance'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Trusted Brands',
      subtitle: 'Quality Products'
    }
  ];

  return (
    <section className="trust-bar">
      <div className="container trust-grid">
        {benefits.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <div className="trust-text">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
