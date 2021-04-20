const slider = () => {
  const topSlider = document.querySelector(".top-slider"),
    table = document.querySelectorAll(".table"),
    itemSlide = document.querySelectorAll(".item");
  let currentSlide = 0;
  const changeSlide = () => {
    table[currentSlide].classList.remove("active");
    itemSlide[currentSlide].style.display = "none";
    currentSlide++;
    if (currentSlide >= table.length) {
      currentSlide = 0;
    }
    itemSlide[currentSlide].style.display = "block";
    table[currentSlide].classList.add("active");
  };
  setInterval(changeSlide, 3000);
};
export default slider;
