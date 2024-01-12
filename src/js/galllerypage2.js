"use script";

/**************************/
/* OPEN MODAL*/
/**************************/

const test = document.querySelectorAll(".img-full-screen");
const testArray = [...test];

let placeHolder = document.querySelector(".img-placeholder");
let currentIndex = 0;

testArray.forEach((element, index) => {
  element.style.cursor = "pointer";

  element.addEventListener("click", () => {
    console.log("click");
    currentIndex = index;
    console.log(currentIndex);
    let testImg = element.querySelector("img").getAttribute("src");
    // showImage();
    placeHolder.style.display = "block";
    placeHolder.style.backgroundImage = `url(${testImg})`;

    document.body.style.overflow = "hidden";
  });
});

/**************************/
/* CLOSE MODAL*/
/**************************/

// placeHolder.addEventListener("click", () => {
//   document.body.style.overflow = "auto";
//   placeHolder.style.display = "none";
// });

// exitButton.addEventListener("click", () => {
//   document.body.style.overflow = "auto";
//   placeHolder.style.display = "none";
// });

/**************************/
/* NEXT IMAGE*/
/**************************/

/**************************/
/* EXIT BUTTON*/
/**************************/

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

/**************************/
/* LEFT ARROW */
/**************************/

const leftArrow = document.createElement("div");
leftArrow.className = "left-arrow";

// Create an arrow SVG element
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

// Create a path element inside the arrow SVG for the arrow icon
const arrowLeftPathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
arrowLeftPathElement.setAttribute("stroke-linecap", "round");
arrowLeftPathElement.setAttribute("stroke-linejoin", "round");
arrowLeftPathElement.setAttribute("d", "M15.75 19.5 8.25 12l7.5-7.5");

// Append the path element to the arrow SVG
arrowLeftSvgElement.appendChild(arrowLeftPathElement);

leftArrow.appendChild(arrowLeftSvgElement);

// Append the arrow SVG element to the body or any other desired container
document.querySelector(".img-placeholder").appendChild(leftArrow);

/**************************/
/* RIGHT ARROW */
/**************************/

const rightArrow = document.createElement("div");
rightArrow.className = "right-arrow";

// Create an arrow SVG element
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

// Create a path element inside the arrow SVG for the arrow icon
const arrowRightPathElement = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
arrowRightPathElement.setAttribute("stroke-linecap", "round");
arrowRightPathElement.setAttribute("stroke-linejoin", "round");
arrowRightPathElement.setAttribute("d", "m8.25 4.5 7.5 7.5-7.5 7.5");

// Append the path element to the arrow SVG
arrowRightSvgElement.appendChild(arrowRightPathElement);

rightArrow.appendChild(arrowRightSvgElement);

// Append the arrow SVG element to the body or any other desired container
document.querySelector(".img-placeholder").appendChild(rightArrow);

// function showImage() {
//   let testImg = testArray[currentIndex]
//     .querySelector("img")
//     .getAttribute("src");
//   placeHolder.style.display = "block";
//   placeHolder.style.backgroundImage = `url(${testImg})`;
// }

rightArrow.addEventListener("click", () => {
  console.log("click");
  currentIndex = (currentIndex + 1) % testArray.length; // Move to the next image
  // showImage();

  let testImg = testArray[currentIndex]
    .querySelector("img")
    .getAttribute("src");
  placeHolder.style.display = "block";
  placeHolder.style.backgroundImage = `url(${testImg})`;
});

leftArrow.addEventListener();

svgElement.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  placeHolder.style.display = "none";
});
