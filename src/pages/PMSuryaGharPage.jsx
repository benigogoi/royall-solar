import React, { useState } from 'react';
import { contactDetails } from '../data/siteContent';
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Zap, 
  DollarSign, 
  Sparkles, 
  Leaf, 
  Home, 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  FileCheck, 
  UserCheck, 
  CreditCard, 
  Maximize, 
  Clock, 
  Award 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './PMSuryaGharPage.css';

const PMSuryaGharPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Reduce Electricity Bills",
      desc: "Offset your monthly power consumption and save up to 90% on electricity charges."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Government Subsidy Support",
      desc: "Receive direct-to-bank subsidies up to ₹78,000 for residential installations."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "25+ Years Lifetime",
      desc: "Solar panels come with a 25-year performance warranty for long-term peace of mind."
    },
    {
      icon: <Leaf size={24} />,
      title: "Green Eco-friendly Energy",
      desc: "Reduce carbon footprint and contribute to a sustainable future for Assam."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Increase Property Value",
      desc: "Equipping your home with rooftop solar increases its independent energy rating and value."
    },
    {
      icon: <Home size={24} />,
      title: "Protection from Tariffs",
      desc: "Shield yourself from future electricity tariff hikes by generating your own power."
    }
  ];

  const eligibility = [
    "Residential households in Assam",
    "Properties with independent shadow-free rooftop space",
    "Active grid electricity connection with local DISCOM (APDCL)",
    "Valid electricity consumer number linked with Aadhaar"
  ];

  const subsidyData = [
    { size: "1 kW", cost: "₹60,000 – ₹70,000", subsidy: "₹30,000", net: "₹30,000 – ₹40,000" },
    { size: "2 kW", cost: "₹1,20,000 – ₹1,40,000", subsidy: "₹60,000", net: "₹60,000 – ₹80,000" },
    { size: "3 kW", cost: "₹1,80,000 – ₹2,00,000", subsidy: "₹78,000", net: "₹1,02,000 – ₹1,22,000" },
    { size: "4 kW", cost: "₹2,40,000 – ₹2,70,000", subsidy: "₹78,000", net: "₹1,62,000 – ₹1,92,000" },
    { size: "5 kW", cost: "₹3,00,000 – ₹3,40,000", subsidy: "₹78,000", net: "₹2,22,000 – ₹2,62,000" },
    { size: "6 kW", cost: "₹3,60,000 – ₹4,00,000", subsidy: "₹78,000", net: "₹2,82,000 – ₹3,22,000" },
    { size: "7 kW", cost: "₹4,20,000 – ₹4,60,000", subsidy: "₹78,000", net: "₹3,42,000 – ₹3,82,000" },
    { size: "8 kW", cost: "₹4,80,000 – ₹5,20,000", subsidy: "₹78,000", net: "₹4,02,000 – ₹4,42,000" }
  ];

  const capacityGuide = [
    { size: "2 kW", target: "Small Homes", load: "Lights, Fans, TV, Refrigerator, WiFi Router" },
    { size: "3 kW", target: "Medium Homes", load: "Lights, Fans, TV, Refrigerator, Washing Machine, 1 Ton AC" },
    { size: "4 kW", target: "Large Homes", load: "Lights, Fans, TV, Refrigerator, Washing Machine, 1.5 Ton AC, Water Pump" },
    { size: "5 kW - 8 kW", target: "Premium Residences", load: "Heavy Load, Multiple ACs, Geysers, Water Pumps, Complete Home Backup" }
  ];

  const roofRequirements = [
    { capacity: "2 kW", space: "~200 sq. ft." },
    { capacity: "3 kW", space: "~300 sq. ft." },
    { capacity: "4 kW", space: "~400 sq. ft." },
    { capacity: "5 kW", space: "~500 sq. ft." },
    { capacity: "6 kW", space: "~600 sq. ft." },
    { capacity: "8 kW", space: "~800 sq. ft." }
  ];

  const documents = [
    { title: "Aadhaar Card", desc: "For identity verification" },
    { title: "Latest Electricity Bill", desc: "To verify connection & consumer ID" },
    { title: "Bank Passbook/Cheque", desc: "For direct subsidy credit" },
    { title: "Address Proof", desc: "To verify residency details" },
    { title: "Active Mobile Number", desc: "Linked with Aadhaar for OTP" },
    { title: "Rooftop Photo/Ownership", desc: "For site ownership validation" }
  ];

  const steps = [
    { num: "01", title: "Portal Registration", desc: "Register on the National Solar Portal with your mobile and electricity bill details." },
    { num: "02", title: "Submit Application", desc: "Log in and submit your rooftop solar installation request on the official portal." },
    { num: "03", title: "Select Approved Vendor", desc: "Choose an empanelled, MNRE-approved solar provider like Royall Solar (Royal Infratech)." },
    { num: "04", title: "System Installation", desc: "Our certified professionals install high-efficiency panels and safety equipment." },
    { num: "05", title: "Net Meter & Inspection", desc: "Local DISCOM (APDCL) inspects the system and installs a smart bidirectional meter." },
    { num: "06", title: "Commissioning Certificate", desc: "Get the system online and submit the final commissioning certificate on the portal." },
    { num: "07", title: "Direct Subsidy Receipt", desc: "Government transfers your subsidy directly to your registered bank account within 30 days." }
  ];

  const timeline = [
    { event: "Registration & Approval", time: "1–3 Days" },
    { event: "Site Audit & Design", time: "2–4 Days" },
    { event: "Installation", time: "5–7 Days" },
    { event: "DISCOM Inspection & Metering", time: "10–15 Days" },
    { event: "Subsidy Processing & Credit", time: "30–45 Days" }
  ];

  const faqs = [
    {
      q: "What is PM Surya Ghar: Muft Bijli Yojana?",
      a: "It is a flagship Government of India scheme aiming to provide free electricity to households by assisting them in installing rooftop solar systems. Households get directly credited subsidies for up to 3 kW capacity."
    },
    {
      q: "How much subsidy can I get under this scheme?",
      a: "For residential systems, the subsidy structure is ₹30,000 per kW for the first 2 kW of solar capacity, and ₹18,000 for the 3rd kW. The maximum subsidy is capped at ₹78,000 for systems of 3 kW capacity or higher."
    },
    {
      q: "Which solar panels are eligible for the subsidy?",
      a: "Only Domestic Content Requirement (DCR) solar panels manufactured in India are approved for government subsidies under the PM Surya Ghar scheme. We supply MNRE-approved high-efficiency DCR panels."
    },
    {
      q: "Who handles the installation and grid synchronization (Net Metering) in Assam?",
      a: "Royall Solar (a unit of Royal Infratech) handles the entire end-to-end process, including site survey, DCR solar panel installation, bidirectional net-meter application, inspection coordination with APDCL, and subsidy documentation."
    },
    {
      q: "How long does it take to get the subsidy amount?",
      a: "After successful commissioning and installation of the net meter by APDCL, the subsidy is credited directly to your bank account via PFMS within 30 to 45 days."
    }
  ];

  return (
    <div className="surya-ghar-page">
      {/* Custom Hero — PM Surya Ghar Scheme */}
      <section className="pmsg-hero">
        <div className="pmsg-tricolor-bar">
          <span className="tc-saffron"></span>
          <span className="tc-white"></span>
          <span className="tc-green"></span>
        </div>
        <div className="pmsg-hero-inner container">
          {/* LEFT: Text Content */}
          <div className="pmsg-hero-text">
            <div className="pmsg-scheme-badge">
              <span className="scheme-dot"></span>
              Government of India — Flagship Scheme
            </div>
            <h1 className="pmsg-hero-title">
              PM <span className="pmsg-accent">Surya Ghar</span>
              <br />Muft Bijli Yojana
            </h1>
            <p className="pmsg-hero-subtitle">
              Get rooftop solar installed with up to <strong>₹78,000 direct subsidy</strong> from the Government of India. Available for homes in Assam through MNRE-approved partners.
            </p>
            <div className="pmsg-hero-stats">
              <div className="pmsg-stat">
                <span className="pmsg-stat-value">₹78,000</span>
                <span className="pmsg-stat-label">Max Subsidy</span>
              </div>
              <div className="pmsg-stat-divider"></div>
              <div className="pmsg-stat">
                <span className="pmsg-stat-value">300 Units</span>
                <span className="pmsg-stat-label">Free/Month</span>
              </div>
              <div className="pmsg-stat-divider"></div>
              <div className="pmsg-stat">
                <span className="pmsg-stat-value">25 Years</span>
                <span className="pmsg-stat-label">Panel Life</span>
              </div>
            </div>
            <div className="pmsg-hero-actions">
              <Link to="/contact" className="btn btn-primary">Apply Now — It's Free</Link>
              <a href="#subsidy-table" className="btn btn-outline">View Subsidy Rates</a>
            </div>
          </div>

          {/* RIGHT: Modi Image — No masking, bold frame */}
          <div className="pmsg-hero-image-col">
            <div className="pmsg-image-frame">
              <div className="pmsg-image-corner pmsg-corner-tl"></div>
              <div className="pmsg-image-corner pmsg-corner-tr"></div>
              <div className="pmsg-image-corner pmsg-corner-bl"></div>
              <div className="pmsg-image-corner pmsg-corner-br"></div>
              <img
                src="/assets/modiJi.png"
                alt="PM Narendra Modi — PM Surya Ghar Yojana"
                className="pmsg-modi-img"
              />
              <div className="pmsg-image-badge">
                <span>🇮🇳</span> PM Narendra Modi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container intro-container">
          <div className="intro-text-block">
            <span className="eyebrow">National Solar Mission</span>
            <h2 className="section-title text-left">What is the PM Surya Ghar Scheme?</h2>
            <p className="lead-text">
              PM Surya Ghar: Muft Bijli Yojana is a visionary government initiative designed to bring clean, free, and sustainable solar energy straight to residential rooftops. By offering substantial direct financial subsidies, the government makes transitioning to solar power affordable for families across India and Assam.
            </p>
            <p>
              As an MNRE-approved solar solution partner in Assam, **Royall Solar** simplifies the entire process. We manage everything from documentation and portal application to high-quality DCR panel installation and APDCL grid integration.
            </p>
            <div className="action-row">
              <Link to="/contact" className="btn btn-primary">Start Your Application</Link>
              <a href="#subsidy-table" className="btn btn-outline">Check Subsidy Rates</a>
            </div>
          </div>
          <div className="intro-banner-graphic">
            <div className="badge-card">
              <Award className="icon-gold" size={32} />
              <div>
                <strong>Direct Subsidy</strong>
                <span>Up to ₹78,000 Capped</span>
              </div>
            </div>
            <div className="badge-card">
              <Sparkles className="icon-gold" size={32} />
              <div>
                <strong>Free Electricity</strong>
                <span>Save Up to 300 Units/Month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section bg-subtle">
        <div className="container">
          <h2 className="section-title">Key Benefits of Rooftop Solar</h2>
          <p className="section-subtitle">Why thousands of families across Assam are switching to residential solar.</p>
          
          <div className="benefits-grid">
            {benefits.map((item, idx) => (
              <div className="benefit-card-premium" key={idx}>
                <div className="benefit-icon-wrapper">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & Subsidy Table */}
      <section className="section bg-light" id="subsidy-table">
        <div className="container">
          <h2 className="section-title">Government Subsidy Structure</h2>
          <p className="section-subtitle">Standard system costs, subsidies, and estimated net costs for residential homeowners.</p>
          
          <div className="table-responsive-wrapper">
            <table className="subsidy-premium-table">
              <thead>
                <tr>
                  <th>Solar System Size</th>
                  <th>Average System Cost</th>
                  <th>Government Subsidy</th>
                  <th>Net Cost After Subsidy</th>
                </tr>
              </thead>
              <tbody>
                {subsidyData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="font-bold highlight-cell">{row.size}</td>
                    <td>{row.cost}</td>
                    <td>
                      <span className="badge badge-success">{row.subsidy}</span>
                    </td>
                    <td className="font-bold text-green">{row.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="note-card bg-subtle">
            <strong>Important Note:</strong> Government subsidy is capped at ₹78,000 for residential systems of 3 kW or higher. For general categories, the subsidy is calculated as ₹30,000/kW for the first 2 kW and ₹18,000/kW for the 3rd kW.
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section bg-subtle">
        <div className="container split-grid">
          {/* Eligibility */}
          <div className="info-box-card">
            <h3 className="card-heading-border">Who Can Apply?</h3>
            <p className="small-desc">Check if your household meets the criteria for PM Surya Ghar subsidy application:</p>
            <ul className="custom-bullets">
              {eligibility.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} className="bullet-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="alert-badge text-amber">
              * Note: Commercial, agricultural, and industrial properties are not eligible for government subsidies under this specific residential scheme.
            </div>
          </div>

          {/* Documents */}
          <div className="info-box-card">
            <h3 className="card-heading-border">Documents Required</h3>
            <p className="small-desc">Keep these documents ready for registration on the National Solar Portal:</p>
            <div className="documents-grid-mini">
              {documents.map((item, idx) => (
                <div className="doc-item" key={idx}>
                  <FileText className="text-green" size={20} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guide: What Can You Run & Space Required */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">System Sizing & Roof Planning</h2>
          <p className="section-subtitle">Determine the right solar capacity and estimate your rooftop space requirements.</p>

          <div className="split-grid-guide">
            {/* Appliance Loads */}
            <div className="sizing-guide-container">
              <h3 className="sub-heading-modern">Load Capacity Guide</h3>
              <div className="capacity-list">
                {capacityGuide.map((item, idx) => (
                  <div className="capacity-row" key={idx}>
                    <div className="capacity-badge">{item.size}</div>
                    <div className="capacity-details">
                      <h4>{item.target}</h4>
                      <p>{item.load}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rooftop Space */}
            <div className="space-guide-container">
              <h3 className="sub-heading-modern">Space Requirements</h3>
              <div className="space-grid-bubble">
                {roofRequirements.map((item, idx) => (
                  <div className="space-bubble-card" key={idx}>
                    <span className="size-label">{item.capacity}</span>
                    <strong className="space-label">{item.space}</strong>
                    <span className="info-txt">Usable Roof Area</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply (Steps) */}
      <section className="section bg-dark text-white-section">
        <div className="container">
          <h2 className="section-title text-white">How to Apply for Subsidy</h2>
          <p className="section-subtitle text-white-subtitle">The complete 7-step process from portal registration to bank credit.</p>

          <div className="process-timeline-vertical">
            {steps.map((item, idx) => (
              <div className="timeline-node-premium" key={idx}>
                <div className="timeline-number-ring">{item.num}</div>
                <div className="timeline-content-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Schedule Table */}
          <div className="timeline-table-container">
            <h3 className="sub-heading-modern text-center text-white">Estimated Processing Duration</h3>
            <div className="timeline-grid-bar">
              {timeline.map((row, idx) => (
                <div className="timeline-bar-item" key={idx}>
                  <span className="event-name">{row.event}</span>
                  <span className="duration-pill">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Get quick answers to common queries about government solar subsidies in Assam.</p>

          <div className="faq-wrapper-modern">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className="faq-modern-item" key={idx}>
                  <button 
                    className={`faq-trigger ${isOpen ? 'active' : ''}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="arrow-icon" />
                  </button>
                  <div className={`faq-collapse-body ${isOpen ? 'show' : ''}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-green-gradient text-center text-white">
        <div className="container cta-container-premium">
          <h2>Start Your Solar Savings Journey Today</h2>
          <p>
            Ready to apply for PM Surya Ghar Yojana in Assam? Contact our local solar experts at Royall Solar. We will assist you with portal applications, site surveys, net metering, and final subsidy credits.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn btn-primary btn-large">Get Free Solar Quote</Link>
            <a href={`tel:${contactDetails.mobilePhone.replace(/\s/g, '')}`} className="btn btn-secondary btn-large">Call Us: {contactDetails.mobilePhone}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PMSuryaGharPage;
