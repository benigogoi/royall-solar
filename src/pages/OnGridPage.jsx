import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { solarSolutions } from '../data/siteContent';
import { CheckCircle2, Zap, Shield, TrendingDown, Sun, Globe, Award, HelpCircle, ClipboardCheck, Settings, ChevronRight } from 'lucide-react';
import './SolarSolutionPage.css';

const OnGridPage = () => {
  const data = solarSolutions.find(s => s.id === 'on-grid');

  return (
    <div className="solution-page ongrid-page-wrapper">
      {/* Main Intro Banner */}
      <section className="section ongrid-intro-banner">
        <div className="container text-center">
          <h2 className="banner-title">RoyallSolar On-Grid Solar Solution</h2>
          <p className="banner-text">
            Looking for a reliable way to cut down your electricity bills and take advantage of government solar subsidies?
            <strong> RoyallSolar On-Grid Solar System</strong> is your complete solution — combining
            <strong> high-efficiency solar panels</strong>, <strong>BIS certified MPPT on grid solar inverter</strong>,
            and <strong>installation accessories</strong> in a single powerful combo.
          </p>
        </div>
      </section>

      {/* Section 1: What is On-Grid? */}
      <section className="section bg-white">
        <div className="container">
          <div className="technical-info-grid">
            <div className="tech-visual">
              <img src="/assets/products/ongrid_flow.png" alt="How On-grid solar works" className="tech-diagram" />
            </div>
            <div className="tech-text">
              <div className="section-badge">Technology Overview</div>
              <h2 className="section-title text-left">What Is an On-Grid Solar System?</h2>
              <p className="tech-p">An On-grid solar system is a grid-connected solar power plant that works in sync with your local electricity provider (APDCL). During the day, the panels generate power for your home; any excess energy is automatically sent to the main grid through a <strong>Net-Meter</strong>.</p>

              <div className="tech-feature-list">
                <div className="tech-feature">
                  <Sun className="tech-icon" />
                  <div>
                    <h4>Best for Stable Grids</h4>
                    <p>Ideal for areas where power cuts are rare and you want to focus on bill reduction.</p>
                  </div>
                </div>
                <div className="tech-feature">
                  <TrendingDown className="tech-icon" />
                  <div>
                    <h4>Maximum Savings</h4>
                    <p>The fastest ROI (Return on Investment) of any solar technology available today.</p>
                  </div>
                </div>
                <div className="tech-feature">
                  <Award className="tech-icon" />
                  <div>
                    <h4>Subsidy Approved</h4>
                    <p>Fully compliant with PM Surya Ghar scheme for direct government cashback.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Advantages Section */}
      <section className="section bg-subtle advantages-section-wrapper">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Choose an On-Grid System?</h2>
            <p className="section-subtitle">Experience the most cost-effective way to transition to renewable energy.</p>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="adv-icon-wrapper">
                <TrendingDown size={32} className="adv-icon" />
              </div>
              <h3>Zero Electricity Bills</h3>
              <p>Generate your own power and drop your monthly electricity bills to near zero through the net-metering system.</p>
            </div>
            <div className="advantage-card">
              <div className="adv-icon-wrapper">
                <ClipboardCheck size={32} className="adv-icon" />
              </div>
              <h3>Low Maintenance</h3>
              <p>Since there are no batteries involved, the system requires virtually no maintenance other than occasional panel cleaning.</p>
            </div>
            <div className="advantage-card">
              <div className="adv-icon-wrapper">
                <Zap size={32} className="adv-icon" />
              </div>
              <h3>High ROI (Fast Payback)</h3>
              <p>With government subsidies and massive bill savings, recover your entire investment in just 3 to 5 years.</p>
            </div>
            <div className="advantage-card">
              <div className="adv-icon-wrapper">
                <Globe size={32} className="adv-icon" />
              </div>
              <h3>Eco-Friendly</h3>
              <p>Reduce your carbon footprint immediately. A 3kW system saves as much CO2 as planting 100+ trees annually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Pricing and Sizing Table */}
      <section className="section bg-white">
        <div className="container">
          <div className="pricing-table-container">
            <h2 className="section-title text-center">On-Grid System Capacities & Estimates</h2>
            <p className="section-subtitle text-center">Find the right system size for your home. Prices are approximate and subject to site conditions.</p>

            <div className="table-responsive">
              <table className="solar-data-table">
                <thead>
                  <tr>
                    <th>System Size</th>
                    <th>Ideal For</th>
                    <th>Space Required</th>
                    <th>Monthly Generation</th>
                    <th>Max Subsidy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>2 kW</strong></td>
                    <td>1-2 BHK (No AC)</td>
                    <td>200 sq. ft.</td>
                    <td>240 Units</td>
                    <td><span className="table-highlight">₹60,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>3 kW</strong></td>
                    <td>2-3 BHK (1 AC)</td>
                    <td>300 sq. ft.</td>
                    <td>360 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>5 kW</strong></td>
                    <td>3-4 BHK (2 ACs)</td>
                    <td>500 sq. ft.</td>
                    <td>600 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                  <tr>
                    <td><strong>10 kW</strong></td>
                    <td>Large Home / Office</td>
                    <td>1000 sq. ft.</td>
                    <td>1200 Units</td>
                    <td><span className="table-highlight">₹78,000</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="table-note">* Generation depends on weather conditions. Contact us for a precise quote based on your roof and load profile.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Recommended Products */}
      <section className="section bg-subtle product-showcase">
        <div className="container">
          <h2 className="section-title">RECOMMENDED PRODUCTS</h2>
          <p className="section-subtitle">We use high-performance RoyallSolar components for maximum reliability.</p>
          <div className="product-grid-detailed">
            {data.products.map((product, i) => (
              <div key={i} className="product-card-solution">
                <div className="product-image-box">
                  <img src={product.icon === 'zap' ? '/assets/products/shinex.png' : '/assets/products/mono_panel.png'} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <div className="product-spec">{product.spec}</div>
                <p>Ideal for: {product.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Subsidy Guide */}
      <section className="section subsidy-guide-section">
        <div className="container">
          <div className="subsidy-guide-card">
            <h2 className="section-title">How to Claim Your Subsidy in 3 Simple Steps</h2>
            <p className="section-subtitle">We handle everything — registration, net metering, installation, and subsidy claim — so you can enjoy a smooth and stress-free solar journey.</p>

            <div className="subsidy-steps-grid">
              <div className="subsidy-step-card">
                <div className="step-icon-box">1</div>
                <h3>Apply Online</h3>
                <p>Apply online on the National Rooftop Solar Portal with our assistance.</p>
              </div>
              <div className="step-arrow-container">
                <ChevronRight className="step-arrow" size={48} />
              </div>
              <div className="subsidy-step-card">
                <div className="step-icon-box">2</div>
                <h3>Select Vendor</h3>
                <p>Select RoyallSolar from the approved vendor list for trusted installation.</p>
              </div>
              <div className="step-arrow-container">
                <ChevronRight className="step-arrow" size={48} />
              </div>
              <div className="subsidy-step-card">
                <div className="step-icon-box">3</div>
                <h3>Get Subsidy</h3>
                <p>Install your system and receive the subsidy directly in your bank account.</p>
              </div>
            </div>

            <div className="subsidy-footer text-center">
              <div className="eligibility-box">
                <h4 className="eligibility-title">Eligibility Requirements</h4>
                <ul className="subsidy-highlights">
                  <li><CheckCircle2 size={18} className="text-success" /> Only <strong>residential rooftop systems</strong> are eligible</li>
                  <li><CheckCircle2 size={18} className="text-success" /> Only <strong>On-Grid and Hybrid</strong> solar systems qualify</li>
                  <li><CheckCircle2 size={18} className="text-success" /> <strong>No subsidy</strong> for systems above 10 kW</li>
                </ul>
              </div>
              
              <p className="subsidy-bottom-note">We handle everything — registration, net metering, installation, and subsidy claim — so you can enjoy a smooth and stress-free solar journey.</p>
              
              <button className="btn btn-primary subsidy-cta">Learn About Subsidies</button>
            </div>
          </div>

          <div className="subsidy-structure-box has-image">
            <div className="structure-content">
              <div className="text-center">
                <div className="section-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>PM Surya Ghar: Muft Bijli Yojana</div>
                <h3 className="structure-title">Latest Subsidy Structure (2025)</h3>
                <p className="structure-desc" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>The Government of India aims to empower homes with solar energy and provide up to 300 units of free electricity every month.</p>
              </div>

              <div className="structure-list">
                <div className="structure-list-item">
                  <CheckCircle2 className="check-icon" />
                  <div>
                    <strong>₹30,000 per kW</strong> for systems up to 2 kW
                  </div>
                </div>
                <div className="structure-list-item">
                  <CheckCircle2 className="check-icon" />
                  <div>
                    <strong>₹18,000 per kW</strong> for the next 1 kW (up to 3kW)
                  </div>
                </div>
                <div className="structure-list-item highlight-item">
                  <CheckCircle2 className="check-icon" />
                  <div>
                    <strong>Maximum Subsidy: ₹78,000</strong> for systems 3 kW and above
                  </div>
                </div>
              </div>
            </div>
            <div className="structure-image">
              <img src="/assets/modiJi.png" alt="PM Surya Ghar Yojana Subsidy" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: One-Stop Solution / Peace of Mind */}
      <section className="section peace-of-mind-section">
        <div className="container">
          <div className="peace-main-box">
            <div className="text-center">
              <h2 className="section-title">Complete On-Grid Solution Under One Roof</h2>
              <p className="tech-p" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>Why deal with multiple vendors? At RoyallSolar, we provide a single point of responsibility for your entire solar journey.</p>
            </div>

            <div className="peace-features-grid">
              <div className="peace-feature-card">
                <ClipboardCheck size={32} className="peace-icon" />
                <h3>End-to-End Execution</h3>
                <p>From paperwork to commissioning, we handle the entire process.</p>
              </div>
              <div className="peace-feature-card">
                <Settings size={32} className="peace-icon" />
                <h3>Optimized Components</h3>
                <p>High-efficiency panels and inverters perfectly matched for performance.</p>
              </div>
              <div className="peace-feature-card">
                <HelpCircle size={32} className="peace-icon" />
                <h3>Single Point Service</h3>
                <p>One dedicated number for all your technical and maintenance needs.</p>
              </div>
            </div>

            <div className="peace-cta-row">
              <div className="cta-box">
                <strong>25 Years</strong>
                <span>Panel Warranty</span>
              </div>
              <div className="cta-box">
                <strong>100%</strong>
                <span>Subsidy Assistance</span>
              </div>
            </div>

            <div className="peace-visual">
              <img src="/assets/products/peace_of_mind_anime.png" alt="Happy customer with RoyallSolar" className="peace-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Assam State Subsidy Advantage */}
      <section className="section assam-subsidy-section bg-subtle">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Exclusive Assam Benefit</div>
            <h2 className="section-title">Double Subsidy Advantage for Assam Homes</h2>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              RoyallSolar customers in Assam benefit from both **Central Govt. (MNRE)** and **Govt. of Assam** subsidies, making solar installation more affordable than ever.
            </p>
          </div>

          <div className="subsidy-table-wrapper">
            <table className="assam-subsidy-table">
              <thead>
                <tr>
                  <th>Solar Plant Capacity</th>
                  <th>Central Subsidy (MNRE)</th>
                  <th>State Subsidy (Assam)</th>
                  <th className="total-col">Total Subsidy Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 KW System</strong></td>
                  <td>₹33,000</td>
                  <td>₹15,000</td>
                  <td className="total-val">₹48,000</td>
                </tr>
                <tr>
                  <td><strong>2 KW System</strong></td>
                  <td>₹66,000</td>
                  <td>₹35,000</td>
                  <td className="total-val">₹96,000</td>
                </tr>
                <tr>
                  <td><strong>3 KW System</strong></td>
                  <td>₹85,800</td>
                  <td>₹45,000</td>
                  <td className="total-val">₹1,30,800</td>
                </tr>
                <tr>
                  <td><strong>Above 3 KW</strong></td>
                  <td>₹85,800 (Max)</td>
                  <td>₹45,000 (Max)</td>
                  <td className="total-val">₹1,30,800</td>
                </tr>
              </tbody>
            </table>
            
            <div className="subsidy-footer-note text-center mt-4">
              <p>Prices and subsidies are subject to the latest government notifications. We handle the entire application process for both subsidies for you.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default OnGridPage;
