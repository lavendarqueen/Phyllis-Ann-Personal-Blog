const userNameInput = document.querySelector("#userName");
const inputTitle = document.querySelector("#inputTitle");
const blogPostInput = document.querySelector("#blogPostInput");
const blogPostButton = document.querySelector("#blogPost");

blogPostButton.addEventListener("submit", function (event) {
  event.preventDefault();

  const newBlogPost = {
    id: crypto.randomUUID(),
    userName: document.querySelector("#userName").value,
    title: document.querySelector("#inputTitle").value,
    blogPost: document.querySelector("#blogPostInput").value,
  };

  //   blogComment: "blogComment",
  if (
    newBlogPost.userName === "" ||
    newBlogPost.title === "" ||
    newBlogPost.blogPost === ""
  ) {
    window.alert(
      "Please enter a Username, Title, and BlogPost Comment in order to post"
    );
    return;
  } else {
    localStorage.setItem("newPost", JSON.stringify(newBlogPost));
    // window.location.href =
      // "https://lavendarqueen.github.io/Phyllis-Ann-Personal-Blog/blog.html";
    window.location.href = "blog.html";
  }
});
