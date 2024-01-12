"use script";

/**************************/
/* RIGHT ARROW */
/**************************/

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

/**************************/
/* LEFT ARROW */
/**************************/

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

// /**************************/
// /* EXIT BUTTON*/
// /**************************/

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
    placeHolder.style.display = "block";
    placeHolder.style.backgroundImage = `url(${testImg})`;

    document.body.style.overflow = "hidden";
  });
});

/**************************
/ * CLOSE MODAL*/
/**************************/

svgElement.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  placeHolder.style.display = "none";
});

/**************************/
/* DISPLAY IMAGE*/
/**************************/

function showImage() {
  let testImg = testArray[currentIndex]
    .querySelector("img")
    .getAttribute("src");
  placeHolder.style.backgroundImage = `url(${testImg})`;
}

/**************************/
/* NEXT IMAGE*/
/**************************/

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testArray.length;
  console.log(currentIndex);

  showImage();
});

/**************************/
/* PREVIOUS IMAGE*/
/**************************/

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testArray.length) % testArray.length;
  console.log(currentIndex);
  showImage();
});
