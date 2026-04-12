import { X } from 'lucide-react';
import './QuoteModal.css';

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
            <select required>
              <option value="" disabled selected>Select a product or service</option>
              <option value="Line Interactive UPS">Line Interactive UPS</option>
              <option value="Online Single Phase UPS">Online Single Phase UPS</option>
              <option value="Online 3 Phase UPS">Online 3 Phase UPS</option>
              <option value="Modular UPS">Modular UPS</option>
              <option value="Li-ion Based ESS">Li-ion Based ESS</option>
              <option value="Solar Plant">Solar Plant</option>
              <option value="Industrial Stabilizer">Industrial Stabilizer</option>
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
