import './PageHeader.css';

const PageHeader = ({ title, bgImage }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="page-header-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="page-title">
          <span className="outline-text">{title}</span>
          <br/>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
