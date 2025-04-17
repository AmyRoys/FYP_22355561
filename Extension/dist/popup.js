"use strict";
console.log("This is a popup!");

document.addEventListener("DOMContentLoaded", () => {
    const messageDiv = document.getElementById("message");
    // Add a manual test button for debugging
    if (messageDiv) {
        const testBtn = document.createElement("button");
        testBtn.textContent = "Set Test Message";
        testBtn.onclick = () => {
            chrome.storage.local.set({ helloMessage: "Test message from options page" }, () => {
                console.log("Test message set from options page");
            });
        };
        messageDiv.parentNode.appendChild(testBtn);

        // Add a manual reload button for debugging
        const reloadBtn = document.createElement("button");
        reloadBtn.textContent = "Reload Message";
        reloadBtn.onclick = () => {
            chrome.storage.local.get("helloMessage", (result) => {
                console.log("Manual reload from storage:", result.helloMessage);
                messageDiv.textContent = result.helloMessage || "No messages yet.";
            });
        };
        messageDiv.parentNode.appendChild(reloadBtn);
    }
    if (messageDiv && typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get("helloMessage", (result) => {
            console.log("Read from storage on load:", result.helloMessage);
            if (typeof result.helloMessage === "undefined") {
                messageDiv.textContent = "No messages yet.";
            } else {
                messageDiv.textContent = result.helloMessage;
            }
        });
        chrome.storage.onChanged.addListener((changes, area) => {
            if (area === "local" && changes.helloMessage) {
                console.log("Storage changed:", changes.helloMessage.newValue);
                messageDiv.textContent = changes.helloMessage.newValue || "No messages yet.";
                console.log("Options page DOM updated:", messageDiv.textContent);
            }
        });

        // Poll every 2 seconds for debugging
        setInterval(() => {
            chrome.storage.local.get("helloMessage", (result) => {
                console.log("Polled helloMessage:", result.helloMessage);
                messageDiv.textContent = result.helloMessage || "No messages yet.";
            });
        }, 2000);
    } else if (messageDiv) {
        messageDiv.textContent = "Please open this page as a Chrome extension (chrome-extension://...)";
    }
});
