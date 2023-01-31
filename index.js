/* eslint-disable no-unused-vars */
const menuiconId = document.querySelector('#menu-icon');
const logoId = document.querySelector('#logo');
const openmenuId = document.querySelector('#open_menu');
const portfolioicon = document.querySelector('#portfolio-icon');
const abouticon = document.querySelector('#about-icon');
const contacticon = document.querySelector('#contact-icon');

// eslint-disable-next-line no-unused-vars, func-names
const changeIcon = function (icon) {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('change-menu');
  icon.classList.toggle('change-menu-color');
  logoId.classList.toggle('change-logo');
  openmenuId.classList.toggle('change-open_menu');
};
