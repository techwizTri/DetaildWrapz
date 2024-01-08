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

const exitButton = document.createElement("div");
exitButton.className = "exit-button";

// Create an SVG element
const svgElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgElement.setAttribute("fill", "none");
svgElement.setAttribute("viewBox", "0 0 24 24");
svgElement.setAttribute("stroke-width", "1.5");
svgElement.setAttribute("stroke", "currentColor");
svgElement.setAttribute("class", "w-6 h-6");

// Create a path element inside the SVG
const pathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
pathElement.setAttribute("stroke-linecap", "round");
pathElement.setAttribute("stroke-linejoin", "round");
pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");

// Append the path element to the SVG
svgElement.appendChild(pathElement);

// Append the SVG element to the exitButton
exitButton.appendChild(svgElement);

// Append the exitButton to the .img-placeholder element
document.querySelector(".img-placeholder").appendChild(exitButton);
