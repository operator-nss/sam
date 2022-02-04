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


document.querySelector('.button').onmousemove = (e) => {

   const x = e.pageX - e.target.offsetLeft
   const y = e.pageY - e.target.offsetTop

   e.target.style.setProperty('--x', `${ x }px`)
   e.target.style.setProperty('--y', `${ y }px`)

 }
