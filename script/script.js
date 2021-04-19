"use strict";
// модальноe окно
const openModal = () => {
  const header = document.querySelector(".header"),
    modalCallback = document.getElementById("callback"),
    modalOverlay = document.querySelector(".modal-overlay"),
    buttonService = document.querySelector(".button-services"),
    modalClose = document.querySelector(".modal-close");
  // открытие модального окна
  const openMenu = () => {
    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
  };
  const closeModal = () => {
    modalCallback.style.display = "none";
    modalOverlay.style.display = "none";
  };
  header.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".callback-btn")) {
      event.preventDefault();
      openMenu();
    }
  });
  buttonService.addEventListener("click", (event) => {
    event.preventDefault();
    openMenu();
  });
  // закрытие модального окна
  modalClose.addEventListener("click", () => {
    closeModal();
  });
  modalOverlay.addEventListener("click", () => {
    closeModal();
  });
};
openModal();

// // слайдер
// const portfolioSlider = () => {
//   const potfolioContent = document.querySelector(".top-slider"),
//     portfolioItem = document.querySelectorAll(".item");
//   let currentIndex = 0;
//   portfolioItem[1].style.overflow = "visible";
// };
// portfolioSlider();

// // слайдер-карусель
// const sliderCarusel = () => {
//   const servicesArrow = document.querySelector(".services-arrow");
//   servicesArrow.addEventListener("click", (event) => {
//     let target = event.target;
//     console.log(target);
//   });
// };
// sliderCarusel();

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
const buttonUp = document.querySelector(".up");
buttonUp.addEventListener("click", function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log(window.scrollY);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      buttonUp.classList.add("visible");
    } else {
      buttonUp.classList.remove("visible");
    }
  });
});
