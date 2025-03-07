chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "Hello from popup!") {
    console.log("Message received from popup:", request.message);
    sendResponse({ response: "Hello from content script!" });
  }
});