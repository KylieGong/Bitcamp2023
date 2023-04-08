// Get the current font family of the page
var currFont = document.body.style.fontFamily;

function changeFonts() {
    const font = "Arial"; // Change this to the font you want to use
    
    document.querySelectorAll("*").forEach(element => {
      element.style.fontFamily = font;
    });
  }

function changeFontSize() {
    const currentSize = parseInt(window.getComputedStyle(document.body).getPropertyValue("font-size"));
    const newSize = currentSize + 4; // Increase the font size by 2 pixels

    document.querySelectorAll("*").forEach(element => {
    element.style.fontSize = newSize + "px";
  });
}
  
changeFonts();
changeFontSize();

// // Load the saved font preference, if any, when the content script is loaded
// browser.storage.sync.get('font').then(function(result) {
//     var selectedFont = result.font;
//     console.log(selectedFont)
//     if (selectedFont) {
//       document.body.style.fontFamily = selectedFont;
//     }
//   });