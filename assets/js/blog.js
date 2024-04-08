function myFunction() {
  var element = document.body;
  element.classList.toggle("dark/light-mode");
}

const backButton = document.querySelector("#backButton");
const postArea = document.getElementById("postArea");
const blogContent = document.getElementById("blogContent");

backButton.addEventListener("click", function (event) {
  event.preventDefault();
});

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Blog till you drop!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
