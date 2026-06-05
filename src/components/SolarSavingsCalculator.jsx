import React, { useState, useRef } from 'react';
import './SolarSavingsCalculator.css';
import { IndianRupee, MapPin, Zap, ArrowRight, Sparkles, LayoutGrid, Calculator, X } from 'lucide-react';

const SolarSavingsCalculator = () => {
  const [pinCode, setPinCode] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('3000');
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  const billVal = parseFloat(monthlyBill) || 0;
  const recommendedKW = Math.max(1, Math.round((billVal / 1000) * 10) / 10) || 3;
  const roofArea = Math.round(recommendedKW * 60); // 3 kW -> 180 sq.ft
  
  const monthlySavings = Math.round(billVal * 0.85);
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings = yearlySavings * 25; // 25-Year Savings

  const handleCalculate = (e) => {
    e.preventDefault();
    setShowResults(true);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  const handleProposalClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section calculator-placeholder-section" id="savings-calculator">
      <div className="container">
        <div className="calculator-header text-center">
          <span className="calc-badge">Solar Savings Calculator</span>
          <h2 className="section-title">Calculate Your Solar Savings</h2>
          <p className="section-subtitle">
            Enter your details below to estimate your custom rooftop solar capacity, system size, and financial returns in Assam.
          </p>
        </div>

        <div className="calculator-grid">
          {/* Left Side: Inputs */}
          <div className="calculator-inputs-card">
            <h3>Estimate Your Solar Potential</h3>
            <p className="inputs-note">Configure your bill and location to calculate real savings instantly.</p>
            
            <form onSubmit={handleCalculate}>
              <div className="calc-form-group">
                <label htmlFor="pin-code">
                  <MapPin size={18} />
                  Enter PIN Code (Assam)
                </label>
                <input 
                  type="text" 
                  id="pin-code" 
                  placeholder="e.g. 781001" 
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  required
                />
              </div>

              <div className="calc-form-group">
                <label htmlFor="monthly-bill">
                  <IndianRupee size={18} />
                  Average Monthly Electricity Bill
                </label>
                <div className="bill-slider-container">
                  <input 
                    type="range" 
                    id="monthly-bill" 
                    min="1000" 
                    max="25000" 
                    step="500" 
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                  />
                  <div className="bill-value">₹{parseFloat(monthlyBill).toLocaleString('en-IN')} / month</div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block calc-submit-btn">
                Calculate Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>

          {/* Right Side: Clean Solar Visual */}
          <div className="calculator-visual-panel">
            <div className="visual-graphic">
              <div className="visual-grid-bg">
                <LayoutGrid size={120} className="grid-icon-bg" />
              </div>
              <div className="visual-hero-circle">
                <Calculator size={48} className="calc-hero-icon" />
              </div>
            </div>
            <div className="visual-caption">
              <h4>Switch to Solar, Save Instantly</h4>
              <p>Rooftop solar systems convert clean sunlight into high-performance electricity for homes and businesses across Assam.</p>
            </div>
          </div>
        </div>

        {/* Expanded Results Section */}
        <div 
          ref={resultsRef}
          className={`calculator-results-wrapper ${showResults ? 'expanded' : ''}`}
        >
          {showResults && (
            <div className="calculator-results-box">
              <button className="results-close-btn" onClick={handleCloseResults} aria-label="Close results">
                <X size={20} />
              </button>

              {/* Top Section */}
              <div className="results-top-summary">
                <div className="results-spark">
                  <Sparkles size={16} /> Instant Estimate
                </div>
                <div className="savings-giant-number">
                  ₹{(lifetimeSavings / 100000).toFixed(1)} Lakhs
                </div>
                <h3>Estimated Lifetime Savings</h3>
                <p>Based on your electricity bill and estimated solar generation.</p>
              </div>

              {/* Middle Section Grid */}
              <div className="results-metrics-grid">
                <div className="metric-card">
                  <span className="metric-lbl">System Size</span>
                  <strong className="metric-val">{recommendedKW} kW</strong>
                </div>
                <div className="metric-card">
                  <span className="metric-lbl">Roof Area Required</span>
                  <strong className="metric-val">{roofArea} sq.ft</strong>
                </div>
                <div className="metric-card">
                  <span className="metric-lbl">Monthly Savings</span>
                  <strong className="metric-val">₹{monthlySavings.toLocaleString('en-IN')}</strong>
                </div>
                <div className="metric-card">
                  <span className="metric-lbl">Annual Savings</span>
                  <strong className="metric-val">₹{yearlySavings.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              {/* CTA Section */}
              <div className="results-cta-panel">
                <button onClick={handleProposalClick} className="btn btn-primary results-cta-btn">
                  Get My Free Solar Proposal <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolarSavingsCalculator;
