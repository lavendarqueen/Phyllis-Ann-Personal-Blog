function myFunction() {
  var element = document.body;
  element.classList.toggle("dark/light-mode");
}

const backButton = document.querySelector("#backButton");
const blogTitle = document.getElementById("blogTitle");
const userName = document.getElementById("userName");
const userBlog = document.getElementById("userBlog");
const postArea = document.getElementById("postArea");

backButton.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "index.html";
});

const myBlog = JSON.parse(localStorage.getItem("newBlogPost"));

console.log(myBlog[0].title);

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Blog till you drop!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.createElement("div");
  currentDiv.setAttribute("class", "currentDiv")

  for(let i = 0; i < myBlog.length; i++) {
    let cardEl = `
      <div class="card m-5" style="width: 12rem;">
          <div class="card-body">
            <h5 class="card-title">Title: ${myBlog[i].title}</h5>
            <p class="card-text">User Name: ${myBlog[i].userName}</p>
            <p class="card-text">Blog Post: ${myBlog[i].blogPost}</p>
          </div>
        </div>
    `;
    let htmDiv = document.createElement("section");
    htmDiv.innerHTML = cardEl
    currentDiv.appendChild(htmDiv)
  }

  postArea.appendChild(newDiv);
  postArea.appendChild(currentDiv);
}
//addElement()