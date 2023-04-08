chrome.storage.sync.get(['font'], function(result) {
    const font = result.font || 'Arial, sans-serif';
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: ${font} !important;
      }
    `;
    document.head.appendChild(style);
  });