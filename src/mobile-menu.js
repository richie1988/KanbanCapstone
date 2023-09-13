import './style.css';

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');

export default function initializeMobileMenu() {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    desktopMenu.classList.toggle('active');
  });
}
