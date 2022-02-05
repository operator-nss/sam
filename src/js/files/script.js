// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";


const burger = document.querySelector('.menu-burger');

burger.addEventListener('click', () => {
   setTimeout(() => {
      burger.classList.toggle('_background');
   }, 200);
})
