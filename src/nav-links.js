import './style.css';

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');

export default function initializeNavLinks() {
  document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    desktopMenu.classList.remove('active');
  }));
}
