const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const popuPontainer1 = document.querySelector('.popup-container1');
const popuPontainer2 = document.querySelector('.popup-container2');
btn1.addEventListener('click', () => {
  popuPontainer1.classList.remove('d-none');
});

btn2.addEventListener('click', () => {
  popuPontainer2.classList.remove('d-none');
});

// close popup
const closePopupA = document.querySelector('.close-popupA');
closePopupA.addEventListener('click', () => {
  popuPontainer1.classList.add('d-none');
  document.body.style.overflowY = 'auto';
});

const closePopupB = document.querySelector('.close-popupB');
closePopupB.addEventListener('click', () => {
  popuPontainer2.classList.add('d-none');
  document.body.style.overflowY = 'auto';
});