"use script";

const slides = [
  {
    title: "ADVANCED PAINT CORRECTION AND PROTECTIVE COATING",
    description:
      "We are the leading destination in Las Vegas for XPEL paint protection film, XPEL Prime XR Plus, and 3M Crystalline premium window tint. Additionally, we are certified in Ceramic Pro and Gyeon Quartz ceramic coatings, offering a comprehensive range of premium automotive services.",
    imageSrc: "src/img/exotics/img1.jpg",
  },
  {
    title: "HIGH-QUALITY CUSTOM COLOR TRANSFORMATION WITH VINYL WRAPPING",
    description:
      "We take great care in our comprehensive color-change programs to redefine the aesthetic of your high-performance and luxury vehicles, where achieving perfection is our singular objective.",
    imageSrc: "src/img/exotics/img2.jpg",
  },
  {
    title: "CERTIFIED CERAMIC COATING EXPERTS",
    description:
      "We support our ceramic coatings with certifications and warranties from Ceramic Pro and Gyeon Quartz, guaranteeing the genuine value of our services for you.",
    imageSrc: "src/img/exotics/img3.jpg",
  },
  {
    title: "COMPREHENSIVE CONCOURS DETAILING SOLUTIONS",
    description:
      "We approach vehicles with the same care as if they were our own, elevating our level of attention to go beyond your expectations and deliver more than anticipated.",
    imageSrc: "src/img/exotics/img4.jpg",
  },
  {
    title: "FULLY CUSTOMIZABLE PROTECTION PACKAGES",
    description:
      "We customize each service to match your preferences, providing you with the flexibility to choose the protection options that best suit your needs.",
    imageSrc: "src/img/exotics/img5.jpg",
  },
];

// const sliderContent = document.querySelector(".hero-text-box");
// const sliderBtn = document.querySelectorAll(".slider-btn");
// const heroContent = document.querySelector(".hero-container");

// let currentIndexSlide = 0;
// let timer;

// sliderBtn.forEach((btn, index) => {
//   btn.addEventListener("click", function () {
//     resetTimer();
//     currentIndexSlide = index;
//     updateSlide();
//     updateSlideBtn();
//   });
// });

// function updateSlide() {
//   const currentSlide = slides[currentIndexSlide];
//   sliderContent.querySelector(".heading-primary").textContent =
//     currentSlide.title;
//   sliderContent.querySelector(".hero-description").textContent =
//     currentSlide.description;
//   heroContent.querySelector(".hero-img").src = currentSlide.imageSrc;
// }

// function updateSlideBtn() {
//   sliderBtn.forEach((btn, index) => {
//     btn.classList.toggle("active", index === currentIndexSlide);
//   });
// }

// function nextSlide() {
//   currentIndexSlide = (currentIndexSlide + 1) % slides.length;
//   updateSlide();
//   updateSlideBtn();
// }

// function startTimer() {
//   timer = setInterval(nextSlide, 5000);
// }

// function resetTimer() {
//   clearInterval(timer);
//   startTimer();
// }

// updateSlide();

// startTimer();

//////////// Test

const sliderContent = document.querySelector(".hero-text-box");
const sliderBtn = document.querySelectorAll(".slider-btn");
const heroContent = document.querySelector(".hero-container");
const heroImg = document.querySelector(".hero-img");

let currentIndexSlide = 0;
let timer;

sliderBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    resetTimer();
    currentIndexSlide = index;
    updateSlide();
    updateSlideBtn();
  });
});

function updateSlide() {
  const currentSlide = slides[currentIndexSlide];

  // Add the appropriate class for sliding animation
  heroImg.classList.add("slide-exit");

  // Use a timeout to update the content and then slide in the new image
  setTimeout(() => {
    sliderContent.querySelector(".heading-primary").textContent =
      currentSlide.title;
    sliderContent.querySelector(".hero-description").textContent =
      currentSlide.description;
    heroContent.querySelector(".hero-img").src = currentSlide.imageSrc;

    // Remove the slide-exit class and add the slide-enter class to slide in the new image
    heroImg.classList.remove("slide-exit");
    heroImg.classList.add("slide-enter");

    // Use another timeout to remove the slide-enter class after the sliding animation completes
    setTimeout(() => {
      heroImg.classList.remove("slide-enter");
    }, 500); // You can adjust this value based on your transition duration
  }, 500); // You can adjust this value based on your transition duration
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

function startTimer() {
  timer = setInterval(nextSlide, 5000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

updateSlide();

startTimer();
