"use script";

/**************************/
/* SLIDER SECTION */
/**************************/
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

/**************************/
/* END SLIDER SECTION */
/**************************/

/**************************/
/* REVIEW SECTION */
/**************************/

const leftArrow = document.querySelector(".review-arrow-left");
const rightArrow = document.querySelector(".review-arrow-right");
const innerRev = document.querySelector("#review-slides .innerrev");

leftArrow.addEventListener("click", () => {
  const currentMarginLeft = parseFloat(innerRev.style.marginLeft) || 0;

  if (currentMarginLeft < 0) {
    const newMarginLeft = currentMarginLeft + 100;

    innerRev.style.marginLeft = `${newMarginLeft}%`;

    rightArrow.classList.remove("active");
  }
});

rightArrow.addEventListener("click", () => {
  const currentMarginLeft = parseFloat(innerRev.style.marginLeft) || 0;

  if (currentMarginLeft <= -300) {
    rightArrow.classList.add("active");
  }

  if (currentMarginLeft > -400) {
    const newMarginLeft = currentMarginLeft - 100;

    innerRev.style.marginLeft = `${newMarginLeft}%`;
  }
});
cece;

/**************************/
/* END REVIEW SECTION */
/**************************/

/**************************/
/* FAQ SECTION */
/**************************/

const faqDown = document.querySelectorAll(".faq-down");
const faqAnswer = document.querySelector(".faq-answer");

faqAnswer.addEventListener("click", () => {
  console.log("lick");
});

faqDown.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("clicked");
  });
});

/**************************/
/* END FAQ SECTION */
/**************************/
