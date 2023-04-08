const form = document.querySelector('form');
const select = document.querySelector('#font');

chrome.runtime.onInstalled.addListener(function() {
    // This code will be executed when the extension is installed, updated, or reloaded.
  
    // Wait for the chrome.runtime or chrome.extension APIs to be fully initialized.
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
      if (message.action === 'apply-font') {
        chrome.storage.sync.get(['font'], function(result) {
          const font = result.font || 'Arial, sans-serif';
          const style = document.createElement('style');
          style.innerHTML = `
            body {
              font-family: ${font} !important;
            }
          `;
          document.head.appendChild(style);
        });
      }
    });
  
    // Register the context menu item.
    chrome.contextMenus.create({
      id: 'apply-font',
      title: 'Apply Font',
      contexts: ['page', 'selection', 'frame'],
    });
  });

  var slider = options.getElementById("sizeslider");
  var output = document.getElementById("demo");

  slider.oninput = function(){
    websitetext = getElementById("one");
    websitetext.style.fontSize = slider%
  }

  browser.tabs
  .executeScript({ file: "/content.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);