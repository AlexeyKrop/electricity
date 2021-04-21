const openAccordion = () => {
  const accordion = document.querySelector(".accordeon"),
    elements = accordion.querySelectorAll(".element");
  elements.forEach((item) => {
    item.addEventListener("click", (event) => {
      const target = event.target;
      elements.forEach((item) => {
        const elementContent = item.querySelector(".element-content");
        item.classList.remove("active");
        elementContent.style.display = "none";
      });
      target.closest(".element").classList.add("active");
      if (item.classList.contains("active")) {
        const elementContent = item.querySelector(".element-content");
        elementContent.style.display = "block";
      }
    });
  });
};
export default openAccordion;
