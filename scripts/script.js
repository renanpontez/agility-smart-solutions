/* Navbar toggle background */
const nav = document.querySelector('nav');
const purple = document.querySelector('.brand-purple');
const white = document.querySelector('.brand-white');

window.onscroll = () => {
  // pageYOffset or scrollY
  if (window.pageYOffset > 80) {
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
  const cardTitle = document.querySelector('.title-project');
  const projectLink = document.querySelector('.project-link');
  projectLink.setAttribute('href', card.dataset.url);
  projectLink.setAttribute('target', '_blank');
  cardTitle.innerText = card.dataset.title

}));

