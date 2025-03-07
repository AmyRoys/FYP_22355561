console.log("This is a popup!");
// Example of using the Chrome API with TypeScript
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];
  if (activeTab && activeTab.id) {
    chrome.tabs.sendMessage(activeTab.id, { message: "Hello from popup!" });
  }
});
