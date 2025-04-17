chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background script:", message);

    // Forward the message to the content script
    if (message.message === "Hello from popup!") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]?.id) {
                chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
                    console.log("Response from content script:", response);
                    sendResponse(response);
                });
            }
        });
        return true; // Keep the message channel open for async response
    }
});
