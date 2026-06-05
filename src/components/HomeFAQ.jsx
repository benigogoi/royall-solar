import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: 'How much does a solar installation cost?',
      a: 'The cost depends on system size, energy requirements, equipment selection and installation complexity. Royall Solar provides customized solutions and free consultations to help determine the most suitable option.'
    },
    {
      q: 'What is the difference between On-Grid, Off-Grid and Hybrid Solar Systems?',
      a: 'On-Grid systems are connected to the utility grid and help reduce electricity bills. Off-Grid systems operate independently using batteries for energy storage. Hybrid systems combine solar, battery storage and grid connectivity for both savings and backup power.'
    },
    {
      q: 'Do solar systems work during power cuts?',
      a: 'Standard On-Grid systems typically shut down during outages for safety reasons. Hybrid and Off-Grid systems can continue supplying power using stored battery energy.'
    },
    {
      q: 'How long do solar panels last?',
      a: 'Most quality solar panels are designed to perform efficiently for 25 years or more with minimal maintenance.'
    },
    {
      q: 'How much roof space is required?',
      a: 'The required roof area depends on system capacity. Our team conducts a site assessment to determine the optimal installation layout.'
    },
    {
      q: 'What maintenance is required for solar systems?',
      a: 'Solar systems generally require minimal maintenance. Periodic cleaning and routine inspections help ensure optimal performance.'
    },
    {
      q: 'Do you provide installation services across Assam?',
      a: 'Yes. Royall Solar provides consultation, installation and support services throughout Assam for residential, commercial and industrial customers.'
    },
    {
      q: 'Which brands do you work with?',
      a: 'We work with trusted brands including Waaree, Adani Solar, UTL, Luminous, Livguard, Exide, Microtek, Havells, Tata Power Solar and other leading manufacturers.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-home-section" style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '80px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-primary)', fontWeight: 800 }}>
            Frequently Asked Questions
          </span>
          <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
            Common Questions About Solar Energy Solutions
          </h2>
          <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Find answers to some of the most common questions about solar systems, installation, energy savings and maintenance. We are a trusted <strong>solar company Assam</strong> and <strong>solar EPC company Assam</strong> helping clients switch to reliable <strong>rooftop solar Assam</strong> and custom <strong>hybrid solar systems Assam</strong>.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                style={{
                  borderBottom: '1px solid #e2e8f0',
                  padding: '8px 0'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '22px 0',
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--accent-primary)' : '#0f172a',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    transition: 'color 0.2s ease'
                  }}
                  className="faq-question-btn"
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease', 
                      color: isOpen ? 'var(--accent-primary)' : '#64748b',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }} 
                  />
                </button>
                
                <div style={{
                  maxHeight: isOpen ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                  opacity: isOpen ? 1 : 0
                }}>
                  <p style={{ 
                    color: '#475569', 
                    fontSize: '1rem', 
                    lineHeight: '1.65', 
                    paddingBottom: '24px',
                    margin: 0
                  }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Below FAQ */}
        <div style={{ 
          textAlign: 'center',
          background: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 6px rgba(0,0,0,0.01)'
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
            Need More Answers?
          </h3>
          <p style={{ color: '#64748b', fontSize: '1rem', marginBottom: '24px' }}>
            Our experts are happy to help.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '12px 36px', display: 'inline-inline-block', textDecoration: 'none' }}>
            Talk to an Expert
          </a>
        </div>

      </div>
      <style>{`
        .faq-question-btn:hover {
          color: var(--accent-primary) !important;
        }
      `}</style>
    </section>
  );
};

export default HomeFAQ;
