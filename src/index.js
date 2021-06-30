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

 bodyTheme.classList.add(Theme.LIGHT);

swichToggleTheme.addEventListener('change', function () {
   if (this.checked) {
      //dark
     
       bodyTheme.classList.remove(Theme.LIGHT);
      bodyTheme.classList.add(Theme.DARK);
      localStorage.removeItem('theme', Theme.LIGHT)
       localStorage.setItem('theme', Theme.DARK )
   }
   else {
      //light
       bodyTheme.classList.remove(Theme.DARK);
      bodyTheme.classList.add(Theme.LIGHT);
      localStorage.removeItem('theme', Theme.DARK)
       localStorage.setItem('theme', Theme.LIGHT);
   };
});
const upCurrentTheme = localStorage.getItem('theme');

if (upCurrentTheme === Theme.DARK) {
   bodyTheme.classList.add(Theme.DARK);
  swichToggleTheme.checked = true;
}



