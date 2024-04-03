function myFunction() {
  var element = document.body;
  element.classList.toggle("dark/light-mode");
}

const backButton = document.querySelector("#back");
const mainEl = documents.getElementById(blogContent);

backButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href =
    "https://github.com/lavendarqueen/Phyllis-Ann-Personal-Blog";
});

// $(document).ready(function () {
//   $(".radio-btn").on("click", function () {
//     $(".radio-inner").toggleClass("active");
//     $("body").toggleClass("dark");
//     console.log("I've been clicked");
//   });
// });

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
