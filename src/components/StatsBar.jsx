import './StatsBar.css';
import { Star } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '10+', label: 'Years Combined Experience' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
