chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "script.js"});
  });