/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
   Navigation,
   Pagination
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.mainslider__slider')) { // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.mainslider__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 100,
         // autoHeight: true,
         speed: 800,
         mousewheel: {
            sensitivity: 1,
            // eventsTarget: ".mainslider__slide",
         },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.mainslider-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.mainslider-button__prev',
            nextEl: '.mainslider-button__next',
         },

         // Брейкпоинты
         /*
         breakpoints: {
         	320: {
         		slidesPerView: 1,
         		spaceBetween: 0,
         		autoHeight: true,
         	},
         	768: {
         		slidesPerView: 2,
         		spaceBetween: 20,
         	},
         	992: {
         		slidesPerView: 3,
         		spaceBetween: 20,
         	},
         	1268: {
         		slidesPerView: 4,
         		spaceBetween: 30,
         	},
         },
         */
         // События
         on: {



         }
      });

      new Swiper('.best-sale__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // autoHeight: true,
         speed: 800,
         // mousewheel: {
         //    sensitivity: 1,
         //    // eventsTarget: ".mainslider__slide",
         // },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.best-sale-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.best-sale-button__prev',
            nextEl: '.best-sale-button__next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 29,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {



         }
      });
      new Swiper('.new__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // autoHeight: true,
         speed: 800,
         // mousewheel: {
         //    sensitivity: 1,
         //    // eventsTarget: ".mainslider__slide",
         // },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.new-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.new-button__prev',
            nextEl: '.new-button__next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 29,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {



         }
      });


      new Swiper('.reccomends__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // autoHeight: true,
         speed: 800,
         // mousewheel: {
         //    sensitivity: 1,
         //    // eventsTarget: ".mainslider__slide",
         // },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.reccomends-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.reccomends-button__prev',
            nextEl: '.reccomends-button__next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 29,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {



         }
      });


      new Swiper('.disconts__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // autoHeight: true,
         speed: 800,
         // mousewheel: {
         //    sensitivity: 1,
         //    // eventsTarget: ".mainslider__slide",
         // },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.disconts-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.disconts-button__prev',
            nextEl: '.disconts-button__next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 29,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {



         }
      });


      new Swiper('.think__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         // autoHeight: true,
         speed: 800,
         // mousewheel: {
         //    sensitivity: 1,
         //    // eventsTarget: ".mainslider__slide",
         // },

         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */

         // Пагинация

         pagination: {
            el: '.think-pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
         	el: '.swiper-scrollbar',
         	draggable: true,
         },
         */

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.think-button__prev',
            nextEl: '.think-button__next',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 29,
            },
            // 1268: {
            //    slidesPerView: 4,
            //    spaceBetween: 30,
            // },
         },

         // События
         on: {



         }
      });

   }

}


// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   // Добавление классов слайдера
   // при необходимости отключить
   bildSliders();

   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
