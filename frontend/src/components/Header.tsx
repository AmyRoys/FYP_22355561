const Header = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
      <h1>Hello Emily 👋</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <div>
          <h3>Flagged Instances</h3>
          <p>5,423</p>
        </div>
        <div>
          <h3>Reviews Contributed</h3>
          <p>1,893</p>
        </div>
        <div>
          <h3>Active Now</h3>
          <p>189</p>
        </div>
      </div>
    </div>
  );
};

export default Header;