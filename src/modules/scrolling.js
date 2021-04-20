const scrolling = () => {
  const buttonUp = document.querySelector(".up");
  buttonUp.addEventListener("click", function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      buttonUp.classList.remove("visible");
    } else {
      buttonUp.classList.add("visible");
    }
  });
};
export default scrolling;
