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
const slides = [
  {
    title: "ADVANCED PAINT CORRECTION AND PROTECTIVE COATING",
    description:
      "We are the leading destination in Las Vegas for XPEL paint protection film, XPEL Prime XR Plus, and 3M Crystalline premium window tint. Additionally, we are certified in Ceramic Pro and Gyeon Quartz ceramic coatings, offering a comprehensive range of premium automotive services.",
    imageSrc: "src/img/exotics/img1.jpg",
  },
  {
    title: "PREMIUM COLOR-CHANGE VINYL WRAPPING",
    description:
      "We are meticulous with our complete color-change programs to restyle your high-performance and luxury vehicles, where perfection is the only option.",
    imageSrc: "src/img/exotics/img2.jpg",
  },
  {
    title: "CERTIFIED CERAMIC COATING EXPERTS",
    description:
      "We back our ceramic coatings with Ceramic Pro and Gyeon Quartz certifications and warranties to ensure that you are getting the true value of your service with us.",
    imageSrc: "src/img/exotics/img3.jpg",
  },
  {
    title: "COMPLETE CONCOURS DETAILING SERVICES",
    description:
      "We treat vehicles as if they were our own, taking measures of care to the next level, going above and beyond to provide you precisely what you expect and more.",
    imageSrc: "src/img/exotics/img4.jpg",
  },
  {
    title: "FULLY CUSTOMIZABLE PROTECTION PACKAGES",
    description:
      "We tailor every service and experience to what you are looking for, giving you full customizable ability to select the right protection options that fulfills your purpose.",
    imageSrc: "src/img/exotics/img5.jpg",
  },
];

const sliderContent = document.querySelector(".hero-text-box");
const sliderBtn = document.querySelectorAll(".slider-btn");
const heroContent = document.querySelector(".hero-container");

let currentIndexSlide = 0;

sliderBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    currentIndexSlide = index;
    updateSlide();
    updateSlideBtn();
  });
});

function updateSlide() {
  const currentSlide = slides[currentIndexSlide];
  sliderContent.querySelector(".heading-primary").textContent =
    currentSlide.title;
  sliderContent.querySelector(".hero-description").textContent =
    currentSlide.description;
  heroContent.querySelector(".hero-img").src = currentSlide.imageSrc;
}

function updateSlideBtn() {
  sliderBtn.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndexSlide);
  });
}

function nextSlide() {
  currentIndexSlide = (currentIndexSlide + 1) % slides.length;
  updateSlide();
  updateSlideBtn();
}

// Initial content update
updateSlide();

// Automatic sliding every 5 seconds
setInterval(nextSlide, 5000);
