chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message received in background script:", message);

    // Store any message for hello.html to display
    if (
        message.type === "FROM_CONTENT_TO_POPUP" ||
        message.type === "TO_POPUP" ||
        message.type === "TO_HELLO_PAGE" ||
        message.type === "FROM_REACT" ||
        message.type === "FROM_REACT_TO_POPUP"
    ) {
        const value = `[${new Date().toLocaleTimeString()} ${Date.now()}] ${message.message || "No messages yet."}`;
        chrome.storage.local.set({ helloMessage: value }, () => {
            console.log("helloMessage set in storage:", value);
            chrome.storage.local.get("helloMessage", (result) => {
                console.log("helloMessage read back from storage:", result.helloMessage);
            });
        });
    }

    // Forward the message to the popup
    if (message.type === "FROM_CONTENT_TO_POPUP") {
        chrome.runtime.sendMessage({ type: "TO_POPUP", message: message.message });
    }

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
