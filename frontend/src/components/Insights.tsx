import '../styles/Insights.css';

const Insights = () => {
  return (
    <div className="insights">
      <h1>Hello Emily 👋</h1>
      <div className="insights-summary">
        <div className="summary-card">
          <h2>1k+</h2>
          <p>AI Flagged Issues</p>
          <span>+8% from yesterday</span>
        </div>
        <div className="summary-card">
          <h2>300</h2>
          <p>Reviews Endorsed</p>
          <span>+5% from yesterday</span>
        </div>
        <div className="summary-card">
          <h2>5</h2>
          <p>New Trends</p>
          <span>+1.2% from yesterday</span>
        </div>
        <div className="summary-card">
          <h2>8</h2>
          <p>Critical Violations</p>
          <span>-0.5% from yesterday</span>
        </div>
      </div>
      <div className="insights-charts">
        <div className="chart engagement-issues">
          <h3>Engagement Issues</h3>
          {/* Placeholder for chart */}
        </div>
        <div className="chart positive-negative">
          <h3>Positive vs Negative</h3>
          {/* Placeholder for chart */}
        </div>
      </div>
      <div className="insights-bottom">
        <div className="table top-patterns">
          <h3>Top Patterns</h3>
          {/* Placeholder for table */}
        </div>
        <div className="chart user-satisfaction">
          <h3>User Satisfaction</h3>
          {/* Placeholder for chart */}
        </div>
      </div>
    </div>
  );
};

export default Insights;
