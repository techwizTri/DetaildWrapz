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

const leftArrow = document.querySelector(".review-arrow-left");
const rightArrow = document.querySelector(".review-arrow-right");
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

    // Reset the color of the right arrow to white
    rightArrow.style.color = "white";
  }
});

// Add click event listener for the right arrow
rightArrow.addEventListener("click", () => {
  // Add 100% to the current margin-left value
  const currentMarginLeft = parseFloat(innerRev.style.marginLeft) || 0;

  // Check if it's at the last slide
  if (currentMarginLeft <= -300) {
    rightArrow.style.color = "rgb(58, 57, 57)";

    // rightArrow.style.transition = "transform 0.3s ease"; // Add transition for smooth animation
    // rightArrow.style.transform = "scale(1)";

    // rightArrow.addEventListener("mouseover", () => {
    //   rightArrow.style.transform = "scale(1.2)";
    // });

    // rightArrow.addEventListener("mouseout", () => {
    //   rightArrow.style.transform = "scale(1)";
    // });
  } else {
    rightArrow.style.color = "white";
  }

  // Check if it's not already at the rightmost boundary (-400%)
  if (currentMarginLeft > -400) {
    const newMarginLeft = currentMarginLeft - 100;

    // Set the new margin-left value
    innerRev.style.marginLeft = `${newMarginLeft}%`;
  }
});

if (rightArrow.style.color === "rgb(58, 57, 57)") {
  console.log("true");
  rightArrow.style.cursor = "alias";
  rightArrow.style.transform = "scale(1)";
}

// // Add hover effect using CSS
// rightArrow.style.transition = "transform 0.3s ease"; // Add transition for smooth animation
// rightArrow.style.transform = "scale(1)";

// rightArrow.addEventListener("mouseover", () => {
//   rightArrow.style.transform = "scale(1.2)";
// });

// rightArrow.addEventListener("mouseout", () => {
//   rightArrow.style.transform = "scale(1)";
// });
