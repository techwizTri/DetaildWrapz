// "use script";

// /**************************/
// /* OPEN MODAL*/
// /**************************/

// let imagePath;

// document.querySelectorAll(".img-full-screen").forEach(function (element) {
//   element.addEventListener("click", function () {
//     element.style.cursor = "pointer";

//     // Prevents scrolling
//     document.body.classList.add("scroll-disabled");

//     // Optional: Enables pinch and zoom
//     document
//       .querySelector("meta[name=viewport]")
//       .setAttribute(
//         "content",
//         "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=2.00, user-scalable=yes"
//       );

//     // Get image path source
//     let imagePath = this.querySelector("img").getAttribute("src");
//     console.log(imagePath);

//     // Set image path source
//     document.querySelector(".img-placeholder").style.backgroundImage =
//       "url(" + imagePath + ")";

//     // Show image
//     document.querySelector(".img-placeholder").style.display = "block";
//   });
// });

// /**************************/
// /* CLOSE MODAL*/
// /**************************/

// document
//   .querySelector(".img-placeholder")
//   .addEventListener("click", function () {
//     // Enables scrolling again
//     document.body.classList.remove("scroll-disabled");

//     // Optional: Disables pinch and zoom
//     document
//       .querySelector("meta[name=viewport]")
//       .setAttribute(
//         "content",
//         "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=1.00"
//       );

//     // Hide image
//     this.style.display = "none";
//   });

// /**************************/
// /* NEXT IMAGE*/
// /**************************/

// /**************************/
// /* EXIT BUTTON*/
// /**************************/

// const exitButton = document.createElement("div");
// exitButton.className = "exit-button";

// // Create an SVG element
// const svgElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "svg"
// );
// svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// svgElement.setAttribute("fill", "none");
// svgElement.setAttribute("viewBox", "0 0 24 24");
// svgElement.setAttribute("stroke-width", "1.5");
// svgElement.setAttribute("stroke", "currentColor");
// svgElement.setAttribute("class", "w-6 h-6");

// // Create a path element inside the SVG
// const pathElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "path"
// );
// pathElement.setAttribute("stroke-linecap", "round");
// pathElement.setAttribute("stroke-linejoin", "round");
// pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");

// // Append the path element to the SVG
// svgElement.appendChild(pathElement);

// // Append the SVG element to the exitButton
// exitButton.appendChild(svgElement);

// // Append the exitButton to the .img-placeholder element
// document.querySelector(".img-placeholder").appendChild(exitButton);

// /**************************/
// /* LEFT ARROW */
// /**************************/

// const leftArrow = document.createElement("div");
// leftArrow.className = "left-arrow";

// // Create an arrow SVG element
// const arrowLeftSvgElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "svg"
// );
// arrowLeftSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// arrowLeftSvgElement.setAttribute("fill", "none");
// arrowLeftSvgElement.setAttribute("viewBox", "0 0 24 24");
// arrowLeftSvgElement.setAttribute("stroke-width", "1.5");
// arrowLeftSvgElement.setAttribute("stroke", "currentColor");
// arrowLeftSvgElement.setAttribute("class", "w-6 h-6");

// // Create a path element inside the arrow SVG for the arrow icon
// const arrowLeftPathElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "path"
// );
// arrowLeftPathElement.setAttribute("stroke-linecap", "round");
// arrowLeftPathElement.setAttribute("stroke-linejoin", "round");
// arrowLeftPathElement.setAttribute("d", "M15.75 19.5 8.25 12l7.5-7.5");

// // Append the path element to the arrow SVG
// arrowLeftSvgElement.appendChild(arrowLeftPathElement);

// leftArrow.appendChild(arrowLeftSvgElement);

// // Append the arrow SVG element to the body or any other desired container
// document.querySelector(".img-placeholder").appendChild(leftArrow);

// /**************************/
// /* RIGHT ARROW */
// /**************************/

// const rightArrow = document.createElement("div");
// rightArrow.className = "right-arrow";

// // Create an arrow SVG element
// const arrowRightSvgElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "svg"
// );
// arrowRightSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// arrowRightSvgElement.setAttribute("fill", "none");
// arrowRightSvgElement.setAttribute("viewBox", "0 0 24 24");
// arrowRightSvgElement.setAttribute("stroke-width", "1.5");
// arrowRightSvgElement.setAttribute("stroke", "currentColor");
// arrowRightSvgElement.setAttribute("class", "w-6 h-6");

// // Create a path element inside the arrow SVG for the arrow icon
// const arrowRightPathElement = document.createElementNS(
//   "http://www.w3.org/2000/svg",
//   "path"
// );
// arrowRightPathElement.setAttribute("stroke-linecap", "round");
// arrowRightPathElement.setAttribute("stroke-linejoin", "round");
// arrowRightPathElement.setAttribute("d", "m8.25 4.5 7.5 7.5-7.5 7.5");

// // Append the path element to the arrow SVG
// arrowRightSvgElement.appendChild(arrowRightPathElement);

// rightArrow.appendChild(arrowRightSvgElement);

// // Append the arrow SVG element to the body or any other desired container
// document.querySelector(".img-placeholder").appendChild(rightArrow);

let imagePath;

document.querySelectorAll(".img-full-screen").forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.cursor = "pointer";
    document.body.classList.add("scroll-disabled");
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=2.00, user-scalable=yes"
      );
    imagePath = this.querySelector("img").getAttribute("src");
    document.querySelector(".img-placeholder").style.backgroundImage =
      "url(" + imagePath + ")";
    document.querySelector(".img-placeholder").style.display = "block";
  });
});

document
  .querySelector(".img-placeholder")
  .addEventListener("click", function () {
    document.body.classList.remove("scroll-disabled");
    document
      .querySelector("meta[name=viewport]")
      .setAttribute(
        "content",
        "width=device-width, initial-scale=1.00, minimum-scale=1.00, maximum-scale=1.00"
      );
    this.style.display = "none";
  });

const exitButton = document.createElement("div");
exitButton.className = "exit-button";
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
const pathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
pathElement.setAttribute("stroke-linecap", "round");
pathElement.setAttribute("stroke-linejoin", "round");
pathElement.setAttribute("d", "M6 18 18 6M6 6l12 12");
svgElement.appendChild(pathElement);
exitButton.appendChild(svgElement);
document.querySelector(".img-placeholder").appendChild(exitButton);

const leftArrow = document.createElement("div");
leftArrow.className = "left-arrow";
const arrowLeftSvgElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
arrowLeftSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
arrowLeftSvgElement.setAttribute("fill", "none");
arrowLeftSvgElement.setAttribute("viewBox", "0 0 24 24");
arrowLeftSvgElement.setAttribute("stroke-width", "1.5");
arrowLeftSvgElement.setAttribute("stroke", "currentColor");
arrowLeftSvgElement.setAttribute("class", "w-6 h-6");
const arrowLeftPathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
arrowLeftPathElement.setAttribute("stroke-linecap", "round");
arrowLeftPathElement.setAttribute("stroke-linejoin", "round");
arrowLeftPathElement.setAttribute("d", "M15.75 19.5 8.25 12l7.5-7.5");
arrowLeftSvgElement.appendChild(arrowLeftPathElement);
leftArrow.appendChild(arrowLeftSvgElement);
document.querySelector(".img-placeholder").appendChild(leftArrow);

const rightArrow = document.createElement("div");
rightArrow.className = "right-arrow";
const arrowRightSvgElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);
arrowRightSvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
arrowRightSvgElement.setAttribute("fill", "none");
arrowRightSvgElement.setAttribute("viewBox", "0 0 24 24");
arrowRightSvgElement.setAttribute("stroke-width", "1.5");
arrowRightSvgElement.setAttribute("stroke", "currentColor");
arrowRightSvgElement.setAttribute("class", "w-6 h-6");
const arrowRightPathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
arrowRightPathElement.setAttribute("stroke-linecap", "round");
arrowRightPathElement.setAttribute("stroke-linejoin", "round");
arrowRightPathElement.setAttribute("d", "m8.25 4.5 7.5 7.5-7.5 7.5");
arrowRightSvgElement.appendChild(arrowRightPathElement);
rightArrow.appendChild(arrowRightSvgElement);
document.querySelector(".img-placeholder").appendChild(rightArrow);

document.querySelector(".right-arrow").addEventListener("click", function () {
  let currentImage =
    document.querySelector(".img-placeholder").style.backgroundImage;
  let currentIndex = getImageIndex(currentImage);
  let nextIndex = (currentIndex + 1) % totalImages;
  let nextImagePath = getImagePath(nextIndex);
  updateImage(nextImagePath);
});

/**************************/
/* PREVIOUS IMAGE */
/**************************/

document.querySelector(".left-arrow").addEventListener("click", function () {
  let currentImage =
    document.querySelector(".img-placeholder").style.backgroundImage;
  let currentIndex = getImageIndex(currentImage);
  let previousIndex = (currentIndex - 1 + totalImages) % totalImages;
  let previousImagePath = getImagePath(previousIndex);
  updateImage(previousImagePath);
});

// Helper function to get the index of the current image
function getImageIndex(imagePath) {
  // Use the paths of your images to determine the index
  // For example, extract the number from the image path
  // Assuming your image paths have a pattern like "img1.jpg", "img2.jpg", etc.
  return parseInt(imagePath.match(/\d+/)[0]) - 1;
}

// Helper function to get the path of an image by index
function getImagePath(index) {
  // Use the index to generate the corresponding image path
  return `../src/img/gallery/projects/project1/img${index + 1}.jpg`;
}

// Helper function to update the image in the modal
function updateImage(imagePath) {
  document.querySelector(".img-placeholder").style.backgroundImage =
    "url(" + imagePath + ")";
}

// Total number of images (update this if you add or remove images)
const totalImages = 24;
