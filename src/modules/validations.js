import maskPhone from "./maskPhone";
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
        target.value = target.value.replace(/[^7+]/, "");
        maskPhone(".tel");
        if (target.value.length === 18) {
          target.style.border = "2px solid green";
          formBtn.disabled = false;
        }
      }
    });
  });
};
export default validations;
