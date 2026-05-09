import './PageHeader.css';

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-header-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
