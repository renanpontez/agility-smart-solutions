/* Navbar toggle background */
const nav = document.querySelector('nav');
const purple = document.querySelector('.brand-purple');
const white = document.querySelector('.brand-white');

window.onscroll = () => {
  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    purple.classList.add('d-none');
    white.classList.remove('d-none');
    nav.classList.add('scrolled')
  } else {
    purple.classList.remove('d-none');
    white.classList.add('d-none');
    nav.classList.remove('scrolled')
  }
}


/* Close navbar on click links */
const links = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse')

links.forEach(link => {
  link.addEventListener('click', () => {
    navCollapse.classList.toggle('show');
  })
})


/* Modal values */
var modalTitle = document.getElementById('modalTitle');

/* Get cards description */
/* MAKE AN DATASET ELEMENT IN PORTFOLIO ITENS! EXAMPLE -> :*/

const portfolioCard = document.querySelectorAll('.portfolio_card');

portfolioCard.forEach(card => card.addEventListener('click', () => {
  const modalTitle = document.querySelector('.modal-title');
  const projectDescription = document.querySelector('.project-description');
  const projectClient = document.querySelector('.client-details');
  const projectTechs = document.querySelector('.techs-details');
  const projectDate = document.querySelector('.date-details');
  const projectURL = document.querySelector('.url-details');

  console.log(card.dataset)
  modalTitle.innerText = card.dataset.company;
  projectDescription.innerText = card.dataset.description;
  projectClient.innerText = card.dataset.client;
  projectTechs.innerText = card.dataset.techs;
  projectDate.innerText = card.dataset.date;
  projectURL.innerText = card.dataset.projecturl;
}));

