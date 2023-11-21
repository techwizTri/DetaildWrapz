// const handleSliderBtn = function (clickedBtn) {
//   const sliderBtn = document.querySelectorAll(".slider-btn");

//   sliderBtn.forEach((btn) => {
//     if (btn === clickedBtn) {
//       clickedBtn.classList.add("active");
//     } else {
//       btn.classList.remove("active");
//     }
//   });
// };

// const sliderBtn = document.querySelectorAll(".slider-btn");
// sliderBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     handleSliderBtn(this);
//   });
// });

// JavaScript
const images = [
  "src/img/exotics/img1.jpg",
  "src/img/exotics/img2.jpg",
  "src/img/exotics/img3.jpg",
  "src/img/exotics/img4.jpg",
  "src/img/exotics/img5.jpg",
];

const heroImg = document.querySelector(".hero-img");
const sliderBtns = document.querySelectorAll(".slider-btn");

let currentImageIndex = 0;

sliderBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    currentImageIndex = index;
    updateHeroImage();
    updateSliderButtons();
  });
});

function updateHeroImage() {
  heroImg.src = images[currentImageIndex];
}

function updateSliderButtons() {
  sliderBtns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentImageIndex);
  });
}
