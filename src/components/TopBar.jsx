import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-dot" />
          <span className="top-bar-text">Assam's trusted rooftop solar partner</span>
        </div>
        <div className="top-bar-brand">
          <span className="top-bar-label">A unit of</span>
          <div className="top-bar-divider" />
          <img src="/parentBrand.png" alt="Royal Infratech" className="top-bar-logo" />
          <span className="top-bar-brand-name">Royal Infratech</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
