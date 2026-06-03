import './SolutionsBanner.css';

const SolutionsBanner = () => {
  return (
    <section className="solutions-banner-section">
      <div className="container">
        <div className="banner-card" style={{ backgroundImage: 'url("/assets/complete_solutions_banner.png")' }}>
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h2>Projects That Power Progress <br /> Across Assam</h2>
            <button className="banner-btn">REQUEST CONSULTATION</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBanner;
