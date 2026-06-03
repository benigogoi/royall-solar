import './Testimonials.css';
import { Star } from 'lucide-react';
import { testimonials } from '../data/siteContent';

const Testimonials = () => {
  const reviews = testimonials.map((review, index) => ({
    ...review,
    rating: 5,
    avatar: `/assets/client_${index + 1}.png`
  }));

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Professional feedback from residential and commercial solar customers in Assam.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-bubble">
                <p>"{review.text}"</p>
                <div className="bubble-arrow"></div>
              </div>
              <div className="testimonial-user">
                <div className="user-avatar">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div className="user-info">
                  <h4>{review.name}</h4>
                  <div className="user-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
