const slider = () => {
  const topSlider = document.querySelector(".top-slider"),
    itemSlide = document.querySelectorAll(".item");
  let currentImageUrl = 0,
    imageUrls = [];
  imageUrls.push("url(images/slide1.jpg)");
  imageUrls.push("url(images/slide2.jpg)");
  imageUrls.push("url(images/slide3.jpg)");
  const changeSlide = () => {
    itemSlide[0].style.backgroundImage = imageUrls[currentImageUrl];
    currentImageUrl++;
    if (currentImageUrl === itemSlide.length) {
      currentImageUrl = 0;
    }
  };
  setInterval(changeSlide, 3000);
};
export default slider;
