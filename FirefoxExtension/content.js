// Get the current font family of the page
var currFont = document.body.style.fontFamily;

function changeFonts() {
    const font = "Arial"; // Change this to the font you want to use
    
    document.querySelectorAll("*").forEach(element => {
      element.style.fontFamily = font;
    });
  }
function increaseHeaderFontSize() {
    const headerTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const headerSizeMultiplier = 1.2; // Change this to adjust the header size
    
    headerTags.forEach(tag => {
      const elements = document.getElementsByTagName(tag);
      for (let i = 0; i < elements.length; i++) {
        const currentSize = parseInt(window.getComputedStyle(elements[i]).getPropertyValue("font-size"));
        const newSize = currentSize * headerSizeMultiplier;
        elements[i].style.fontSize = newSize + "px";
      }
    });
}

function increaseBodyFontSize() {
    const headerTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
    const bodyTags = ["p", "span", "a", "li", "ul", "ol", "div", "section", "article"];
    const bodySizeMultiplier = 1.2; // Change this to adjust the body text size
    
    bodyTags.forEach(tag => {
      const elements = document.getElementsByTagName(tag);
      for (let i = 0; i < elements.length; i++) {
        if (!headerTags.includes(tag)) {
          const currentSize = parseInt(window.getComputedStyle(elements[i]).getPropertyValue("font-size"));
          const newSize = currentSize * bodySizeMultiplier;
          elements[i].style.fontSize = newSize + "px";
        }
      }
    });
  }

function changeFontSize() {
    increaseHeaderFontSize();
    increaseBodyFontSize();
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