import { X } from 'lucide-react';
import './QuoteModal.css';
import { productCategories } from '../data/siteContent';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent default form behavior and simulate a submit
    console.log("Quote requested!");
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2>Get a <span className="text-gradient">Quote</span></h2>
        <p>Tell us what you need and our team will get back to you immediately.</p>
        
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="John Doe" required />
          </div>
          
          <div className="form-group">
            <label>Phone No.</label>
            <input type="tel" placeholder="+91-9876543210" required />
          </div>
          
          <div className="form-group">
            <label>Interested Service</label>
            <select required defaultValue="">
              <option value="" disabled>Select a product or service</option>
              {productCategories.map((category) => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
              <option value="Other">Other Power Solution</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
