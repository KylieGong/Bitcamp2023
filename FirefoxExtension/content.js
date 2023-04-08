// Get the current font family of the page
var currentFont = document.body.style.fontFamily;

// Load the saved font preference, if any, when the content script is loaded
browser.storage.sync.get('font').then(function(result) {
    var selectedFont = result.font;
    console.log(selectedFont)
    if (selectedFont) {
      document.body.style.fontFamily = selectedFont;
    }
  });