"use strict";
// модальное окно
const openModal = () => {
  const fancyboxModal = document.querySelectorAll(".fancyboxModal"),
    modalOverlay = document.querySelector(".modal-overlay"),
    modalCallback = document.getElementById("callback"),
    modalClose = document.querySelector(".modal-close");
  const getMenu = (display) => {
    modalCallback.style.display = display;
    modalOverlay.style.display = display;
  };
  fancyboxModal.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      getMenu("block");
    });
  });
  modalClose.addEventListener("click", () => {
    getMenu("none");
  });
  modalOverlay.addEventListener("click", () => {
    getMenu("none");
  });
};
openModal();

// блок аккордион
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
openAccordion();

// блок проккуртки страницы
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
scrolling();

const imgWrapper = document.querySelectorAll(".absolute");
imgWrapper.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("привет");
  });
});
