document.addEventListener('DOMContentLoaded', function() {
    function applyFont() {
      let fontStyle = document.getElementById('font-style').value;
      let fontSize = document.getElementById('font-size').value;
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          {code: `
            document.body.style.fontFamily = '${fontStyle}';
            document.body.style.fontSize = '${fontSize}px';
          `});
      });
    }
  
    document.getElementById('apply-font').addEventListener('click', applyFont);
  });
  