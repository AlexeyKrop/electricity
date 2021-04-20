const openAccordion = () => {
  const accordion = document.querySelector(".accordeon"),
    elements = accordion.querySelectorAll(".element");
  elements.forEach((item) => {
    const elementContent = item.querySelector(".element-content");
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        elementContent.style.display = "block";
      } else {
        elementContent.style.display = "none";
      }
    });
  });
};
export default openAccordion;
