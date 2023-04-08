//script to alter website code

// Select all text elements except for scripts and styles
const textElements = document.querySelectorAll('*:not(script):not(style)'); 

//fonts to choose from
var fontFamily;
var fontSize;
var fontColor;

textElements.forEach(el => {
    el.style.fontFamily = fontFamily; // Change the font family
    el.style.fontSize = fontSize; // Change the font size
    el.style.color = fontColor; // Change the text color
  });