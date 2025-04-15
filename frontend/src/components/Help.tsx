import '../styles/Help.css';

const Help = () => {
  return (
    <div className="help">
      <h1>Help Center</h1>
      <div className="help-content">
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>How do I add a new task?</strong>
              <p>Navigate to the Evaluations page and use the input box to add a new task.</p>
            </li>
            <li>
              <strong>How do I drag and drop tasks?</strong>
              <p>Click and hold a task, then drag it to the desired column.</p>
            </li>
            <li>
              <strong>Where can I view insights?</strong>
              <p>Go to the Insights page to view AI-generated insights and trends.</p>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact Support</h2>
          <p>If you need further assistance, please reach out to our support team:</p>
          <ul>
            <li>Email: support@nightguard.com</li>
            <li>Phone: +1-800-555-1234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Help;
