chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setFontStyleAndSize,
    });
});

function setFontStyleAndSize() {
    const font = prompt("Enter a font style (e.g. Arial, Times New Roman)");
    const size = prompt("Enter a font size (e.g. 12px, 16pt)");

    if (font && size) {
        document.body.style.fontFamily = font;
        document.body.style.fontSize = size;
    }
}