let elements = document.querySelectorAll('*');
let font = prompt("Enter font name:");
let size = prompt("Enter font size:");

for (let i = 0; i < elements.length; i++) {
  elements[i].style.fontFamily = font;
  elements[i].style.fontSize = size + "px";
}