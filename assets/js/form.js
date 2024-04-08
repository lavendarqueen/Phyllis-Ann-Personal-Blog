const userNameInput = document.querySelector("#userName");
const inputTitle = document.querySelector("#inputTitle");
const blogPostInput = document.querySelector("#blogPostInput");
const blogPostButton = document.querySelector("#submit");

blogPostButton.addEventListener("submit", function (event) {
  event.preventDefault();

//Capture user values
//Assign values to an object
const newBlogPost = {
  id: crypto.randomUUID(),
  userName: document.getElementById("#userName").value,
  title: document.getElementByhId("#inputTitle").value,
  blogPost: document.getElementById("#blogPostInput").value
},

//Console log variable newUser
//Validation here
//If passed validation push new object into array in local storage
if (newBlogPost.userName === "" ||
    newBlogPost.title === "" ||
    newBlogPost.blogPost === "") 
  {
    
     window.alert(
       "Please enter a Username, Title, and BlogPost Comment in order to post"
  )

  } else {

//Storing local storage data in blogPostArr variable.
  const blogPostArr = JSON.parse(localStorage.getItem("newBlogPost"));

  for (let i = 0; i < blogPostArr.length; i++) {
  const newBlogPost = blogPostArr[i];

    blogPostArr.push(newBlogPost);

  console.log(blogPostArr);

  localStorage.setItem("newBlogPost", JSON.stringify(blogPostArr));
    newBlogPost.userName = document.querySelector("#userName").value = "";
    window.location.href = "blog.html";
  }
 }
}

// //validate input here
// if (newBlogPost.userName === "" ||
//     newBlogPost.title === "" ||
//     newBlogPost.blogPost === "") {
    
//     window.alert(
//       "Please enter a Username, Title, and BlogPost Comment in order to post"
//     );

// } else {

// //Storing local storage data in blogPostArr variable.
// const blogPostArr = JSON.parse(localStorage.getItem("newBlogPost"));

// //
// for (let i = 0; i < blogPostArr.length; i++) {
//   const newBlogPost = blogPostArr[i];

//   blogPostArr.push(newBlogPost);

// console.log(blogPostArr);

// localStorage.setItem("newBlogPost", JSON.stringify(blogPostArr));
//     newBlogPost.userName = document.querySelector("#userName").value = "";
//     window.location.href = "blog.html";
//   }
