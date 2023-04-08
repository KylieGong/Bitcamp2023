document.addEventListener('DOMContentLoaded', function() {
    function applyFont() {
      let fontStyle = document.getElementById('font-style').value;
      let fontSize = document.getElementById('font-size').value;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: function() {
            document.body.style.fontFamily = fontStyle;
            document.body.style.fontSize = fontSize + 'px';
            console.log("honest want to die");
          }
        });
      });
    }
  
    document.getElementById('apply-font').addEventListener('click', applyFont);
  });
  