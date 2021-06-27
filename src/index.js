import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import 'modern-normalize/modern-normalize.css';
import menuEvents from './menu.json';
import eventsTemplates from './templates/events.hbs';
import './sass/main.scss';




const menuOrder = document.querySelector('.js-menu');
menuOrder.insertAdjacentHTML('afterbegin', eventsTemplates(menuEvents));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const swichToggleTheme = document.querySelector('.js-theme-switch__toggle');
const bodyTheme = document.querySelector('body');
let isLightTheme = true;
swichToggleTheme.addEventListener('change', (e) => {
   const savedTheme = e.target.value;
   if (isLightTheme) {
      //light
      bodyTheme .classList.remove('dark-theme');
      bodyTheme.classList.add('light-theme');
      localStorage.removeItem('dark-theme', savedTheme);
      localStorage.setItem('light-theme', savedTheme )
   }
   else {
      //dark
      bodyTheme .classList.remove('light-theme');
      bodyTheme.classList.add('dark-theme');
      localStorage.removeItem('light-theme', savedTheme);
      localStorage.setItem('dark-theme', savedTheme)
   }
   isLightTheme = !isLightTheme;
});

function saveCurrentTheme() {
   const onSaveCurentTheme = localStorage.getItem('dark-theme')
   if (onSaveCurentTheme) {
      bodyTheme.value = onSaveCurentTheme;
   }
   }
