//script to alter website text

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }


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
        el.style.fontSize = fontSize; // Change the font size
        el.style.color = fontColor; // Change the text color
    });

    //change headings
    headings.forEach(el => {
        el.style.fontFamily = fontFamily; // Change the font family
        el.style.fontSize = (1.5*fontSize); // Change the font size
        el.style.color = fontColor; // Change the text color
    });
}

//change the document background color, parameter in string form
document.getElementById("myButton").addEventListener("click", changeText);

function changeBgColor() {
    document.body.style.backgroundColor = "blue"; //can be "blue" or "#FFFFFF"
    alert('PLEASE WORKKKK');
}

function changeFontStyleAndSize() {
    // Change the font style and size here
    document.body.style.fontFamily = "Arial";
    document.body.style.fontSize = "24px";
  }
  
  // Listen for clicks on the browser action button
  chrome.browserAction.onClicked.addListener(changeFontStyleAndSize);

document.body.style.backgroundColor = "blue"; //can be "blue" or "#FFFFFF"
alert('PLEASE WORKKKK');