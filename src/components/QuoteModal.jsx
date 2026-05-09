import { X } from 'lucide-react';
import './QuoteModal.css';
import { productCategories } from '../data/siteContent';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote requested!");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>Get Free Quote</h2>
        <p>Tell us what you need. We will call you back within 1 hour.</p>
        
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Full name" required />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 9707670101" required />
          </div>
          
          <div className="form-group">
            <label>What Do You Need?</label>
            <select required defaultValue="">
              <option value="" disabled>Select a product</option>
              {productCategories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
              <option value="Other">Not Sure / Other</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Get Quote Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
