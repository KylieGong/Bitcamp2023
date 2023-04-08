chrome.action.onClicked.addListener(function(tab) {
    chrome.action.setPopup({tabId: tab.id, popup: 'popup.html'});
    chrome.tabs.executeScript(tab.id, {file: "script.js"});
  });