import './styles.css';

import menu from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };


const menuRef = document.querySelector('.js-menu');
const inputThemeSwitchRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

const localTheme = localStorage.getItem("theme");

if(localTheme){
    bodyRef.classList.add(localTheme);
    inputThemeSwitchRef.checked = (localTheme === Theme.DARK);
} else {bodyRef.classList.add(Theme.LIGHT)};

const switchTheme =  () => {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
    if(bodyRef.classList.contains(Theme.LIGHT)){
        localStorage.setItem("theme", Theme.LIGHT);
    } else {
        localStorage.setItem("theme", Theme.DARK)
    };
};

inputThemeSwitchRef.addEventListener("click", switchTheme);