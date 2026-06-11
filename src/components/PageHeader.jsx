import './PageHeader.css';

const PageHeader = ({ title, subtitle, bgImage, imageStyle }) => {
  return (
    <div className="page-header-v2">
      <div className="container page-header-container">
        <div className="page-header-text">
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
      </div>
      
      {bgImage && (
        <div className="page-header-banner">
          <img 
            src={bgImage} 
            alt={title} 
            className="page-header-img" 
            style={imageStyle}
          />
        </div>
      )}
    </div>
  );
};

export default PageHeader;
