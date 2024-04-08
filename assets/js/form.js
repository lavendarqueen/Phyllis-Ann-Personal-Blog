const userNameInput = document.querySelector("#userName");
const inputTitle = document.querySelector("#inputTitle");
const blogPostInput = document.querySelector("#blogPostInput");
const blogPostButton = document.querySelector("#blogPost");

blogPostButton.addEventListener("submit", function (event) {
  event.preventDefault();

    id: crypto.randomUUID();
    userName: document.getElementById("#userName").value;
    title: document.getElementByhId("#inputTitle").value;
    blogPost: document.getElementById("#blogPostInput").value;
  })

    const newblogPost = JSON.parse(localStorage.getItem("blogPostArr"));

  for (let i = 0; i < blogPostArr.length; i++) {
    const newBlogPost = blogPostArr[i];

    blogPostArr.push(newBlogPost)

  if (
    newBlogPost.userName === "" ||
    newBlogPost.title === "" ||
    newBlogPost.blogPost === "" ||
  )
   

  {
    window.alert(
      "Please enter a Username, Title, and BlogPost Comment in order to post"
    )
    return
  } else {
    localStorage.setItem("newBlogPost", JSON.stringify(blogPostArr));
    newBlogPost.userName = document.querySelector("#userName").value = "";
    // window.location.href =
    // "https://lavendarqueen.github.io/Phyllis-Ann-Personal-Blog/blog.html";
    window.location.href = "blog.html";
  }
};
