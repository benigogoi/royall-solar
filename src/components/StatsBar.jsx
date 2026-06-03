import './StatsBar.css';
import { Star } from 'lucide-react';

const StatsBar = () => {
  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '1000+', label: 'Satisfied Customers' },
    { value: '10+', label: 'Years of Combined Experience' },
    { value: '24/7', label: 'Customer Support' },
    { value: 'All Assam', label: 'Service Coverage', hasStars: true }
  ];

  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            {stat.hasStars && (
              <div className="stat-stars">
                {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
                <Star size={14} fill="#e2e8f0" color="#e2e8f0" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
