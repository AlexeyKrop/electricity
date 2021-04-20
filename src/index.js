"use strict";
import openModal from "./modules/openModal";
import slider from "./modules/slider";
import openAccordion from "./modules/openAccordion";
import scrolling from "./modules/scrolling";
import validations from "./modules/validations";
import checkData from "./modules/checkData";
import sendForm from "./modules/sendForm";
import carousel from "./modules/sliderCarousel";
// модальное окно
openModal();
// Слайдер
slider();
// слайдер-карусель
carousel.init();
// блок аккордион
openAccordion();
// блок проккуртки страницы
scrolling();
// функция валидации
validations();
// функция коррекции введенных данных
checkData();
// отправка формы на сервер
sendForm();
