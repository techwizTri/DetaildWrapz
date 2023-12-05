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
