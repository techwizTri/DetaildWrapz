"use strict";
// // Add these JavaScript functions to your existing script
// function showImage(src) {
//   // Display the modal
//   document.getElementById("imageModal").style.display = "block";

//   // Set the image source in the modal
//   document.getElementById("modalImage").src = src;
// }

// function closeModal() {
//   // Close the modal
//   document.getElementById("imageModal").style.display = "none";
// }
// Makes the clicked image full screen (uses a <div> with a background image)
document.querySelectorAll(".img-full-screen").forEach(function (element) {
  element.addEventListener("click", function () {
    // Prevents scrolling
    document.body.classList.add("scroll-disabled");

    // Optional: Enables pinch and zoom
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=2.00, user-scalable=yes"
      );

    // Get image path source
    let imagePath = this.getAttribute("src");

    // Set image path source
    document.querySelector(".img-placeholder").style.backgroundImage =
      "url(" + imagePath + ")";

    // Show image
    document.querySelector(".img-placeholder").style.display = "block";
  });
});

document
  .querySelector(".img-placeholder")
  .addEventListener("click", function () {
    // Enables scrolling again
    document.body.classList.remove("scroll-disabled");

    // Optional: Disables pinch and zoom
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=1.00"
      );

    // Hide image
    this.style.display = "none";
  });
