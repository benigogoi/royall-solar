const PlaceholderPage = ({ title }) => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
        This page is under construction. Content will be updated soon.
      </p>
    </div>
  );
};

export default PlaceholderPage;
