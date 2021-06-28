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
upCurrentdarkTheme();
upCurrentLightTheme();
let isLightTheme = true;
swichToggleTheme.addEventListener('change', (e) => {
   const savedTheme = e.target.value;
   e.preventDefault();
   
   if (isLightTheme) {
      //light
      bodyTheme .classList.remove('dark-theme');
      bodyTheme.classList.add('light-theme');
      localStorage.removeItem('dark-theme', savedTheme);
      upCurrentLightTheme();
      localStorage.setItem('light-theme', savedTheme);
   }
   else {
      //dark
      bodyTheme .classList.remove('light-theme');
      bodyTheme.classList.add('dark-theme');
      localStorage.removeItem('light-theme', savedTheme);
      upCurrentdarkTheme();
      localStorage.setItem('dark-theme', savedTheme)
   }
   isLightTheme = !isLightTheme;
});

function upCurrentdarkTheme() {
   bodyTheme.value = localStorage.getItem('dark-theme');  
};
   function upCurrentLightTheme() {
   bodyTheme.value = localStorage.getItem('light-theme');  
};
