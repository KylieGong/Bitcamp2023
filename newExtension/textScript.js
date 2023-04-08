//script to alter website text

//change the font elements in the website
//fontFamily should be entered as a string
//fontSize should be entered as an int, representing paragraph text size
//fontColor should be entered as a string
function changeText(fontFamily, fontSize, fontColor) {
    // Select all paragraph and heading elements
    const paragraphs = document.querySelectorAll('p');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    //change paragraphs
    paragraphs.forEach(el => {
        el.style.fontFamily = fontFamily; // Change the font family
        el.style.fontSize = fontSize.toString(); // Change the font size
        el.style.color = fontColor; // Change the text color
        console.log("changeText");
    });

    //change headings
    headings.forEach(el => {
        el.style.fontFamily = fontFamily; // Change the font family
        el.style.fontSize = (1.5*fontSize).toString(); // Change the font size
        el.style.color = fontColor; // Change the text color
        console.log("changeText");
    });
}

//change the document background color, parameter in string form
function changeBgColor(bgColor) {
    document.body.style.backgroundColor = bgColor; //can be "blue" or "#FFFFFF"
    console.log("changeBgColor");
}