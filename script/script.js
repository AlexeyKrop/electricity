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

// функция валидации
const validations = () => {
  const form = document.querySelectorAll("form"),
    formBtn = document.querySelector(".feedback"),
    input = document.querySelectorAll("input");
  input.forEach((item) => {
    item.setAttribute("required", true);
  });
  form.forEach((item) => {
    item.addEventListener("input", (event) => {
      const target = event.target;
      if (target.placeholder === "Ваше имя") {
        target.value = target.value.replace(/[^А-Яа-яЁё\ ]/, "");
      } else if (target.placeholder === "Телефон*") {
        maskPhone(".tel");
        if (target.value.length === 18) {
          target.style.border = "2px solid green";
          formBtn.disabled = false;
        }
      }
    });
  });
};
validations();

// функция коррекции введенных данных
const checkData = () => {
  const form = document.querySelectorAll("form"),
    formBtn = document.querySelector(".feedback");
  form.forEach((item) => {
    item.addEventListener("focusout", (event) => {
      const target = event.target;
      if (target.placeholder === "Ваше имя") {
        target.value = target.value
          .trim()
          .replace(/[^\s\da-zа-я]/gi, "")
          .replace(/\s+/g, " ");
        if (target.value !== "") {
          target.value = target.value
            .split(" ")
            .map(function (word) {
              return word[0].toUpperCase() + word.substr(1);
            })
            .join(" ");
        }
        if (target.value.search(/[^A-Za-z]/)) {
          // alert("Необходимо ввести имя на русском языке");
          target.value = "";
        }
      } else if (target.placeholder === "Телефон*") {
        if (target.value.length !== 18) {
          target.style.border = "2px solid red";
          alert("Введите корректный номер телефона");
          formBtn.disabled = true;
        }
      }
    });
  });
};
checkData();

// отправка формы на сервер
const sendForm = () => {
  const errorMessage = "Что то пошло не так...",
    loadMessage = "Загрузка...",
    successMessage = "Спасибо...Мы скоро с вами свяжемся";
  const form = document.querySelectorAll("form"),
    statusMessage = document.createElement("div");
  statusMessage.style.color = "red";
  const inputs = document.querySelectorAll("input"),
    modalCallback = document.getElementById("callback"),
    modalOverlay = document.querySelector(".modal-overlay");
  const cleanInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };
  // настройка отправки
  const postData = (body) => {
    return fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (event) => {
      event.preventDefault();
      item.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(item);
      let body = {};
      formData.forEach((item, key) => {
        body[key] = item;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("status network not 200");
          }
          statusMessage.textContent = successMessage;
          cleanInputs();
          setTimeout(() => {
            statusMessage.textContent = "";
          }, 2000);

          setTimeout(() => {
            modalOverlay.style.display = "none";
            modalCallback.style.display = "none";
          }, 2000);
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  });
};
sendForm();
