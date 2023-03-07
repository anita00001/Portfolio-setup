/// /// mobile menu toggle starts /// /// /// ///
const menuIconId = document.querySelector('#menu-icon');
const logoId = document.querySelector('#logo');
const openMenuId = document.querySelector('#open_menu');
const portfolioIcon = document.querySelector('#portfolio-icon');
const aboutIcon = document.querySelector('#about-icon');
const contactIcon = document.querySelector('#contact-icon');

/// /// open menu /// /// /// ///
menuIconId.addEventListener('click', () => {
  menuIconId.classList.toggle('fa-times');
  menuIconId.classList.toggle('change-menu');
  menuIconId.classList.toggle('change-menu-color');
  logoId.classList.toggle('change-logo');
  openMenuId.classList.toggle('change-open_menu');
});

/// /// /// /// close mobile menu /// /// ///
const navBarArray = [portfolioIcon, aboutIcon, contactIcon];
for (let i = 0; i < navBarArray.length; i += 1) {
  navBarArray.forEach((items) => {
    items.addEventListener('click', () => {
      menuIconId.classList.remove('fa-times');
      menuIconId.classList.toggle('change-menu');
      menuIconId.classList.toggle('change-menu-color');
      logoId.classList.toggle('change-logo');
      openMenuId.classList.toggle('change-open_menu');
    });
  });
}

/// /// /// /// Modal starts /// /// /// ///
const navBarSection = document.querySelector('#nav-bar');
const headlineSection = document.querySelector('#headline');
const workSection = document.querySelector('#work');
const aboutMeSection = document.querySelector('#about_me');
const contactFormSection = document.querySelector('#contact_form');
const socialMediaSection = document.querySelector('#social_media');

/// /// /// /// See project buttons on each card /// /// /// ///
const cardButton = [
  document.querySelector('#see-project-button-0'),
  document.querySelector('#see-project-button-1'),
  document.querySelector('#see-project-button-2'),
  document.querySelector('#see-project-button-3'),
  document.querySelector('#see-project-button-4'),
  document.querySelector('#see-project-button-5'),
  document.querySelector('#see-project-button-6'),
];

/// /// /// /// Array of Project information /// /// /// /// ///
const projectInfo = [
  {
    mTitle: 'To-Do List',
    dTitle: 'Today To-Do List',
    techList: ['HTML', 'CSS', 'JavaScript'],
    backgroundImg: 'images/todo.JPG',
    p: 'A to-do list app is a digital tool that allows users to create lists of tasks, edit and delete tasks, and track their progress as they complete items on their list.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/To-do-List/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/To-do-List',
  },

  {
    mTitle: 'My Awesome Book',
    dTitle: 'My Awesome Book',
    techList: ['HTML', 'CSS', 'JavaScript'],
    backgroundImg: 'images/book-display.JPG',
    p: 'The book managing app allows users to add entries for a book using the title and author name, reject duplicate entries, and delete books.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/My-awesome-book/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/My-awesome-book',
  },

  {
    mTitle: 'LOCUS Exhibition',
    dTitle: 'LOCUS: Technical Exhibition',
    techList: ['HTML', 'CSS', 'JavaScript'],
    backgroundImg: 'images/locus-about.JPG',
    p: 'The technical Exhibition page includes event details about the engineering projects, allowing participants to register for the competition.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/Exhibition-Page/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/Exhibition-Page',
  },

  {
    mTitle: 'Profesional Art Printing Data',
    dTitle: 'Website Protfolio',
    techList: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    backgroundImg: 'images/modal-bg-3-6.png',
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/Portfolio-setup/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/Portfolio-setup/tree/popup-window',
  },

  {
    mTitle: 'Profesional Art Printing Data',
    dTitle: 'Profesional Art Printing Data More',
    techList: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    backgroundImg: 'images/modal-bg-1-4.png',
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/Portfolio-setup/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/Portfolio-setup/tree/popup-window',
  },

  {
    mTitle: 'Profesional Art Printing Data',
    dTitle: 'Data Dashboard Healthcare',
    techList: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    backgroundImg: 'images/modal-bg-2-5.png',
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/Portfolio-setup/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/Portfolio-setup/tree/popup-window',
  },

  {
    mTitle: 'Profesional Art Printing Data',
    dTitle: 'Website Protfolio',
    techList: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    backgroundImg: 'images/modal-bg-3-6.png',
    p: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonOne: 'See Live',
    liveLink: 'https://anita00001.github.io/Portfolio-setup/',
    buttonTwo: 'See Source',
    sourceLink: 'https://github.com/anita00001/Portfolio-setup/tree/popup-window',
  },
];

/// /// /// /// Link Buttons with their respective Project Information /// /// ///
cardButton.forEach((cardButtonItem, index) => {
  const items = projectInfo[index];
  /// /// /// /// Open Modal /// /// /// ///
  cardButtonItem.addEventListener('click', () => {
    /// /// Blur background when click event happens /// /// ///
    navBarSection.classList.toggle('active');
    headlineSection.classList.toggle('active');
    workSection.classList.toggle('active');
    aboutMeSection.classList.toggle('active');
    contactFormSection.classList.toggle('active');
    socialMediaSection.classList.toggle('active');
    /// /// /// /// Modal HTML /// /// /// /// ///
    const modalWindow = document.querySelector('body');
    const section = document.createElement('section');
    modalWindow.appendChild(section);
    section.innerHTML = `<div class="modal" id='modal'>
      <div class="modal-header">
        <h2 class="modal-mobile">${items.mTitle}</h2>
        <h2 class="modal-desktop">${items.dTitle}</h2>
        <button class="close-button">&times;</button>
      </div>
      <div class="tech-list">
        <span class="tech-list-span">${items.techList[0]}</span>
        <span class="tech-list-span">${items.techList[1]}</span>
        <span class="tech-list-span">${items.techList[2]}</span>
      </div>
      <div class="modal-body">
        <img class="bg-img-modal" src="${items.backgroundImg}" alt="Featuring image">
        <section class="modal-description">
          <p>${items.p}</p>
          <div class="see-modal-button">
            <a target="_blank" href="${items.liveLink}"><button class="see-project">${items.buttonOne} <img src="/images/Icon-see-live.png" alt="iconseeliveimg"></button></a>
            <a target="_blank" href="${items.sourceLink}"><button class="see-source">${items.buttonTwo}<i class="fa-brands fa-github"></i></button></a>
          </div>
        </section>
      </div>
    </div>`;

    /// /// /// Close the modal /// /// /// /// ///
    const modalheader = document.querySelector('.modal-header');
    modalheader.addEventListener('click', () => {
      const modalContainer = document.querySelector('.modal');
      modalContainer.classList.toggle('modal-close');
      navBarSection.classList.remove('active');
      headlineSection.classList.remove('active');
      workSection.classList.remove('active');
      aboutMeSection.classList.remove('active');
      contactFormSection.classList.remove('active');
      socialMediaSection.classList.remove('active');
      const modalWindow = document.querySelector('body');
      modalWindow.removeChild(modalWindow.lastElementChild);
    });
  });
});

/// /// /// /// Form Validation /// /// /// /// ///
function formValidation(e) {
  const email = document.querySelector('#youremail');
  if (email.value !== email.value.toLowerCase()) {
    document.querySelector('.form-validation').innerHTML = '* Invalid Email !!! <br> All character on the email should be in lowercase !!*';
    e.preventDefault();
    e.stopPropagation();
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', formValidation());

/// /// /// /// Local Storage /// /// ///
const userInfo = document.querySelector('.form');
let formObject = JSON.parse(localStorage.getItem('userInfo'));
if (!formObject) {
  formObject = {
    name: '',
    email: '',
    textareamessage: '',
  };
}
document.querySelector('#yourname').value = formObject.name;
document.querySelector('#youremail').value = formObject.email;
document.querySelector('#yourmessage').value = formObject.message;

userInfo.addEventListener('input', () => {
  const info = {
    name: document.querySelector('#yourname').value,
    email: document.querySelector('#youremail').value,
    message: document.querySelector('#yourmessage').value,
  };
  localStorage.setItem('userInfo', JSON.stringify(info));
});