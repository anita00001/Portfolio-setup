// // For menu toggle /////
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

let navBarArray = [portfolioIcon, aboutIcon, contactIcon]
for (let i = 0; i < navBarArray.length; i++) {
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
// Events for Menu toggle ends here //////

/////////////// For pop-up work section /////////////
const navBarSection = document.querySelector('#nav-bar');
const headlineSection = document.querySelector('#headline');
const workSection = document.querySelector('#work');
const aboutMeSection = document.querySelector('#about_me');
const contactFormSection = document.querySelector('#contact_form');
const socialMediaSection = document.querySelector('#social_media');
const seeProjectButton = document.getElementsByClassName('see-project-button');

const closeButton = document.querySelector('.close-button');
const modalContainer = document.querySelector('.modal');

const projectInfo = [
  {
    mTitle: "Multi-Post Stories",
    dTitle: "Keeping track of hundreds of components website",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg.jfif",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Profesional Art Printing Data More",
    techList: ["HTML", "Bootstrap", "Ruby"],
    backgroundImg: "images/modal-bg-1-4.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Data Dashboard Healthcare",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg-2-5.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Website Protfolio",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg-3-6.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Profesional Art Printing Data More",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg-1-4.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Data Dashboard Healthcare",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg-2-5.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window",
  },

  {
    mTitle: "Profesional Art Printing Data",
    dTitle: "Website Protfolio",
    techList: ["HTML", "Bootstrap", "Ruby on Rails"],
    backgroundImg: "images/modal-bg-3-6.png",
    p: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    buttonOne: "See Live",
    liveLink: "https://anita00001.github.io/Portfolio-setup/",
    buttonTwo: "See Source",
    sourceLink: "https://github.com/anita00001/Portfolio-setup/tree/popup-window"
  }
]
//////////////

//////////// Create an Array to store the information for the Pop-up window ////////////////
const card0 = document.querySelector('#see-project-button-0');
const card1 = document.querySelector('#see-project-button-1');
const card2 = document.querySelector('#see-project-button-2');
const card3 = document.querySelector('#see-project-button-3');
const card4 = document.querySelector('#see-project-button-4');
const card5 = document.querySelector('#see-project-button-5');
const card6 = document.querySelector('#see-project-button-6');

cardButton = [card0, card1, card2, card3, card4, card5, card6];
/////////////////

///// javascript object to display pop-up when clicked on cardButton ///////////////

for (let i=0; i<cardButton.length;i++){
  
  cardButton[i].addEventListener('click', () => {
    navBarSection.classList.toggle('active');
    headlineSection.classList.toggle('active');
    workSection.classList.toggle('active');
    aboutMeSection.classList.toggle('active');
    contactFormSection.classList.toggle('active');
    socialMediaSection.classList.toggle('active');
    projectInfo.forEach((items, index) => {
      // const items = projectInfo[index];
      const modalWindow = document.querySelector('body');
      const section = document.createElement('section');
      modalWindow.appendChild(section);
      section.innerHTML = `<div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">${items.mTitle}</h2>
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
            <a href="${items.liveLink}"><button class="see-project">${items.buttonOne}<i class="fa-regular fa-arrow-right"></i></button></a>
            <a href="${items.sourceLink}"><button class="see-source">${items.buttonTwo}<i class="fa-brands fa-github"></i></button></a>
          </div>
        </section>
      </div>
     </div>`;  
      const heading1 = document.querySelector('.modal-title');
      if (cardButton[i] === card0) {
        heading1.innerHTML = `${projectInfo[0].mTitle}`;
      }
      if (cardButton[i] === card1) {
        heading1.innerHTML = `${projectInfo[1].mTitle}`;
      }
      if (cardButton[i] === card2) {
        heading1.innerHTML = `${projectInfo[2].mTitle}`;
      }
      if (cardButton[i] === card3) {
        heading1.innerHTML = `${projectInfo[3].mTitle}`;
      }
      if (cardButton[i] === card4) {
        heading1.innerHTML = `${projectInfo[4].mTitle}`;
      }
      if (cardButton[i] === card5) {
        heading1.innerHTML = `${projectInfo[5].mTitle}`;
      }
      if (cardButton[i] === card6) {
        heading1.innerHTML = `${projectInfo[6].mTitle}`;
      }
    });
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.close-button');
    modal.classList.toggle('modal-active');
    closeButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal-active')
    navBarSection.classList.remove('active');
    headlineSection.classList.remove('active');
    workSection.classList.remove('active');
    aboutMeSection.classList.remove('active');
    contactFormSection.classList.remove('active');
    socialMediaSection.classList.remove('active');

    let modalWindow = document.querySelector('body')
    modalWindow.removeChild(modalWindow.lastElementChild);
    });
  });
}

  
