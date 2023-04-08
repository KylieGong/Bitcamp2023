//script to alter website code

//change the font elements in the website, all parameters are strings
function changeText(fontFamily, fontSize, fontColor) {
    // Select all text elements except for scripts and styles
    const textElements = document.querySelectorAll('*:not(script):not(style)'); 

    textElements.forEach(el => {
        el.style.fontFamily = fontFamily; // Change the font family
        el.style.fontSize = fontSize; // Change the font size
        el.style.color = fontColor; // Change the text color
    });
}

//change the document background color, parameter in string form
function changeBgColor(bgColor) {
    document.body.style.backgroundColor = bgColor;
}