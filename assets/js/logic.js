$(document).ready(function () {
  $(".radio-btn").on("click", function () {
    $(".radio-inner").toggleClass("active");
    $("body").toggleClass("dark");
    console.log("I've been clicked");
  });
});
