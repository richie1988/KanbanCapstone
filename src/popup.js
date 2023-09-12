const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const popuPontainer1 = document.querySelector('.popup-container1');
const popuPontainer2 = document.querySelector('.popup-container2');

const closePopupB = document.querySelector('.close-popupB');
const closePopupA = document.querySelector('.close-popupA');

export default function popA() {
  btn1.addEventListener('click', () => {
    popuPontainer1.classList.remove('d-none');
  });
}

export function popB() {
  btn2.addEventListener('click', () => {
    popuPontainer2.classList.remove('d-none');
  });
}

// close popup

export function closeA() {
  closePopupA.addEventListener('click', () => {
    popuPontainer1.classList.add('d-none');
    document.body.style.overflowY = 'auto';
  });
}

export function closeB() {
  closePopupB.addEventListener('click', () => {
    popuPontainer2.classList.add('d-none');
    document.body.style.overflowY = 'auto';
  });
}
