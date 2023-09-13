const text = document.getElementById('reservation-input');
const date1 = document.getElementById('reservation-input-dateA');
const date2 = document.getElementById('reservation-input-dateB');
const addBtn = document.getElementById('add');
const lists = document.getElementById('lists');
const counts = document.getElementById('counts');
const errReserve = document.getElementById('error-reservation');

// Retrieve existing reservations from local storage or initialize an empty array
let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

function add() {
  if (date1.value && date2.value && text.value) {
    const reservation = {
      start: date1.value,
      end: date2.value,
      userName: text.value,
    };

    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    const list = document.createElement('li');
    list.className = 'reservation-lists-items';

    const displayReservations = document.createElement('p');
    displayReservations.innerHTML = `${reservation.start} - ${reservation.end} by ${reservation.userName}`;
    displayReservations.className = 'display-reservations';

    counts.textContent += 1;

    list.append(displayReservations);
    lists.append(list);

    date1.value = '';
    date2.value = '';
    text.value = '';
  } else {
    errReserve.textContent = 'Please, enter the value input';
  }
}
addBtn.addEventListener('click', add);

window.addEventListener('load', () => {
// Retrieve existing reservations from local storage
  const storedReservations = JSON.parse(localStorage.getItem('reservations'));
  if (storedReservations) {
    reservations = storedReservations;
    counts.textContent = reservations.length;

    // Display existing reservations
    reservations.forEach((reservation) => {
      const list = document.createElement('li');
      const displayReservations = document.createElement('p');
      displayReservations.innerHTML = `${reservation.start} - ${reservation.end} by ${reservation.userName}`;
      list.appendChild(displayReservations);
      lists.appendChild(list);
    });
  }
});
