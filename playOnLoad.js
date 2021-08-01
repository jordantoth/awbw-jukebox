console.log("Are we in the page context?");
chrome.runtime.sendMessage({ body: "Hello we loaded the page!" });
