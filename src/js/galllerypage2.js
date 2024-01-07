"use script";

document.querySelectorAll(".img-full-screen").forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.cursor = "pointer";

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
    let imagePath = this.querySelector("img").getAttribute("src");
    console.log(imagePath);

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
