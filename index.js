const menuIconId = document.querySelector('#menu-icon');
const logoId = document.querySelector('#logo');
const openMenuId = document.querySelector('#open_menu');
const portfolioIcon = document.querySelector('#portfolio-icon');
const aboutIcon = document.querySelector('#about-icon');
const contactIcon = document.querySelector('#contact-icon');

menuIconId.addEventListener('click', () => {
  menuIconId.classList.toggle('fa-times');
  menuIconId.classList.toggle('change-menu');
  menuIconId.classList.toggle('change-menu-color');
  logoId.classList.toggle('change-logo');
  openMenuId.classList.toggle('change-open_menu');
});

portfolioIcon.addEventListener('click', () => {
  menuIconId.classList.remove('change-menu-color');
  menuIconId.classList.remove('fa-times');
  menuIconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openMenuId.classList.remove('change-open_menu');
});

aboutIcon.addEventListener('click', () => {
  menuIconId.classList.remove('change-menu-color');
  menuIconId.classList.remove('fa-times');
  menuIconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openMenuId.classList.remove('change-open_menu');
});

contactIcon.addEventListener('click', () => {
  menuIconId.classList.remove('change-menu-color');
  menuIconId.classList.remove('fa-times');
  menuIconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openMenuId.classList.remove('change-open_menu');
});
