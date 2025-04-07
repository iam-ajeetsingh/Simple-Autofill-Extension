// This code will directly execute the content script
const autofillButton = document.getElementById('autofillButton');

autofillButton.addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });

    console.log("Content script injected from popup!");
    window.close(); // Optional: Close the popup after injecting
  } catch (error) {
    console.error("Failed to inject content script:", error);
  }
});

// Todo: Send message to background script to execute content script
