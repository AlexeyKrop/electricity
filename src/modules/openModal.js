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
export default openModal;
