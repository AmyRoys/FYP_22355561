import '../styles/Forum.css';

const Forum = () => {
  return (
    <div className="forum">
      <h1>Hello Emily 👋</h1>
      <div className="forum-main">
        <div className="discussion">
          <div className="discussion-header">
            <h2>How can I detect inline deceptive CTAs in modals with JavaScript?</h2>
            <button className="add-discussion">Add to the discussion</button>
          </div>
          <p>
            I'm running into an issue where several e-commerce sites are using modal popups with misleading button styles and CTAs — like a "No Thanks" link styled to look disabled or hidden.
          </p>
          <pre>
            <code>
              {`const modals = document.querySelectorAll(".modal");
modals.forEach(modal => {
  const buttons = modal.querySelectorAll("button, a");
  // Check for visual cues here...
});`}
            </code>
          </pre>
          <p>
            But I'm unsure how to evaluate visual deception in code — like checking if a "Cancel" button is greyed out but still clickable. Has anyone done something like this before?
          </p>
          <button className="vote-button">Vote</button>
        </div>
        <div className="suggestions">
          <h3>Suggestions</h3>
          <textarea placeholder="Type here your wise suggestion"></textarea>
          <div className="suggestion-actions">
            <button className="cancel-button">Cancel</button>
            <button className="suggest-button">Suggest</button>
          </div>
        </div>
        <div className="direct-messages">
          <h3>Direct Messages</h3>
          <div className="message">
            <p><strong>You:</strong> Hey! Could you take a quick look at my evaluation for Duolingo? I would love a second opinion.</p>
            <p><strong>Gina:</strong> Sure, just did, looks good!</p>
            <p><strong>You:</strong> Thank you for your help! I'll update the notes and mark it as ready for review.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
