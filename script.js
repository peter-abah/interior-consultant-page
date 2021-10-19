'use strict';

const toggleMenu = (event) => {
  // toggles the css class for the icons in the button to swap them
  menuIcons.forEach((icon) => {
    ['absolute', 'top-0', 'left-0', 'opacity-0'].forEach((cls) => {
      icon.classList.toggle(cls);
    });
  });

  ['w-0', 'w-screen'].forEach((cls) => nav.classList.toggle(cls))
}

const menuButton = document.querySelector('#menu');
const menuIcons = [...menuButton.children];
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', toggleMenu);