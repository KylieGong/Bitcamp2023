const form = document.querySelector('form');
const select = document.querySelector('#font');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const font = select.value;
  chrome.storage.sync.set({ font: font }, function() {
    alert('Font choice saved!');
  });
});