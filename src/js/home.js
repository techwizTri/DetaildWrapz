"use script";

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 5;

  // Function to check the next slide
  function autoSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    document.getElementById(`slide${currentSlide}`).checked = true;
  }

  // Set interval to check the next slide every 5000 milliseconds (5 seconds)
  let timer = setInterval(autoSlide, 3000);

  const labels = document.querySelectorAll("#bullets label");

  labels.forEach(function (label) {
    label.addEventListener("click", function () {
      console.log("xlixk");
    });
  });
});

//   const labels = document.querySelectorAll("#controls label");

//   labels.forEach(function (label, index) {
//     label.addEventListener("click", function () {
//       clearInterval(intervalId);
//       currentSlide = (index + 2) % totalSlides || totalSlides;
//       document.getElementById(`slide${currentSlide}`).checked = true;
//       startInterval();
//     });
//   });
// });
