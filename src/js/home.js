function handleSliderClick(clickedBtn) {
  const sliderBtns = document.querySelectorAll(".slider-btn");

  sliderBtns.forEach((btn) => {
    if (btn === clickedBtn) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

const sliderBtns = document.querySelectorAll(".slider-btn");

sliderBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    handleSliderClick(this);
  });
});
