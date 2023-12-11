"use script";

// Slides function
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 5;

  const labels = document.querySelectorAll("#bullets label");

  function autoSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
    checkActive();
  }

  function checkActive() {
    labels.forEach(function (label, index) {
      if (!document.getElementById(`slide${index + 1}`).checked) {
        label.classList.remove("active");
      } else {
        label.classList.add("active");
      }
    });
  }

  let timer = setInterval(autoSlide, 5000);

  labels.forEach(function (label, index) {
    label.addEventListener("click", function () {
      console.log("click");
      clearInterval(timer);
      currentSlide = index + 1;
      document.getElementById(`slide${currentSlide}`).checked = true;
      timer = setInterval(autoSlide, 5000);
      checkActive();
    });
  });
});

// review slides
// Assuming you have references to the left and right arrow icons
const leftArrow = document.querySelector(".review-heading-left");
const rightArrow = document.querySelector(".review-heading-right");

// Assuming you have a reference to the #review-slides .innerrev element
const innerRev = document.querySelector("#review-slides .innerrev");

// Add click event listener for the left arrow
leftArrow.addEventListener("click", () => {
  // Subtract 100% from the current margin-left value
  const currentMarginLeft = parseFloat(innerRev.style.marginLeft) || 0;

  // Check if it's not already at the leftmost boundary (0%)
  if (currentMarginLeft < 0) {
    const newMarginLeft = currentMarginLeft + 100;

    // Set the new margin-left value
    innerRev.style.marginLeft = `${newMarginLeft}%`;
  }
});

// yee
// Add click event listener for the right arrow
rightArrow.addEventListener("click", () => {
  // Add 100% to the current margin-left value
  const currentMarginLeft = parseFloat(innerRev.style.marginLeft) || 0;

  // Check if it's not already at the rightmost boundary (-400%)
  if (currentMarginLeft > -400) {
    const newMarginLeft = currentMarginLeft - 100;

    // Set the new margin-left value
    innerRev.style.marginLeft = `${newMarginLeft}%`;
  }
});
