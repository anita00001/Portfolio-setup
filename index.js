const menuiconId = document.querySelector('#menu-icon');
const logoId = document.querySelector('#logo');
const openmenuId = document.querySelector('#open_menu');
const portfolioicon = document.querySelector('#portfolio-icon');
const abouticon = document.querySelector('#about-icon');
const contacticon = document.querySelector('#contact-icon');

const changeIcon = function (icon) {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('change-menu');
  icon.classList.toggle('change-menu-color');
  logoId.classList.toggle('change-logo');
  openmenuId.classList.toggle('change-open_menu');
};

portfolioicon.addEventListener('click', () => {
  menuiconId.classList.remove('change-menu-color');
  menuiconId.classList.remove('fa-times');
  menuiconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openmenuId.classList.remove('change-open_menu');
});

abouticon.addEventListener('click', () => {
  menuiconId.classList.remove('change-menu-color');
  menuiconId.classList.remove('fa-times');
  menuiconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openmenuId.classList.remove('change-open_menu');
});

contacticon.addEventListener('click', () => {
  menuiconId.classList.remove('change-menu-color');
  menuiconId.classList.remove('fa-times');
  menuiconId.classList.remove('change-menu');
  logoId.classList.remove('change-logo');
  openmenuId.classList.remove('change-open_menu');
});
