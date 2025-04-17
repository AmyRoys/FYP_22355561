chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "Hello from popup!") {
    console.log("Message received from popup:", request.message);

    // Send a message to the React frontend
    window.postMessage({ type: "FROM_EXTENSION", message: "Hello from the browser extension!" }, "*");

    sendResponse({ response: "Hello from content script!" });
  }
});

// Listen for messages from the React frontend
window.addEventListener("message", (event) => {
  if (event.source !== window || event.data.type !== "FROM_REACT") {
    return;
  }
  console.log("Message received from React frontend:", event.data.message);

  // Display the message on the webpage
  const messageDiv = document.createElement("div");
  messageDiv.textContent = `React says: ${event.data.message}`;
  messageDiv.style.position = "fixed";
  messageDiv.style.bottom = "10px";
  messageDiv.style.right = "10px";
  messageDiv.style.backgroundColor = "#333";
  messageDiv.style.color = "#fff";
  messageDiv.style.padding = "10px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.zIndex = "10000";
  document.body.appendChild(messageDiv);

  // Remove the message after 5 seconds
  setTimeout(() => {
    document.body.removeChild(messageDiv);
  }, 5000);
});

window.addEventListener("message", (event) => {
  if (event.source !== window || event.data.type !== "FROM_REACT_TO_POPUP") {
    return;
  }
  console.log("Message received from React frontend for popup:", event.data.message);

  // Forward the message to the background script
  chrome.runtime.sendMessage({ type: "FROM_CONTENT_TO_POPUP", message: event.data.message });
});