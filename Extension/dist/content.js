"use strict";
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
    // Optionally, send a response back to the React frontend
    window.postMessage({ type: "FROM_EXTENSION", message: "Acknowledged: " + event.data.message }, "*");
});

window.addEventListener("message", (event) => {
    // Only accept messages from the same window and from your React app
    if (event.source !== window) return;
    const { type, message } = event.data || {};
    if (type === "FROM_REACT" || type === "FROM_REACT_TO_POPUP") {
        console.log("Relaying message to background:", { type, message });
        chrome.runtime.sendMessage({ type, message });
    }
});
