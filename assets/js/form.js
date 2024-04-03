const userNameInput = document.querySelector("#userName");
const titleInput = document.querySelector("#title");
const commentInput = document.querySelector("#blogPostInput");
const blogPostButton = document.querySelector("#blogPost");

blogPostButton.addEventListener("click", function (event) {
  event.preventDefault();

  const newBlogPost = {
    id: crypto.randomUUID(),
    userName: document.querySelector("#userName").value,
    title: document.querySelector("#title").value,
    blogPost: document.querySelector("#blogPost").value,
  };

  //   blogComment: "blogComment",
  if (username === "" || title === "" || post === "") {
    window.alert(
      "Please enter a Username, Title, and BlogPost Comment in order to post"
    );
    return;
  } else {
    localStorage.setItem("newPost", JSON.stringify(newBlogPost));
    window.location.href =
      "https://lavendarqueen.github.io/Phyllis-Ann-Personal-Blog/blog.html";
    // window.location.href = "blog.html";
  }
});
