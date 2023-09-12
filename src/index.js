import './style.css';

import './popup.js';

// Custom error-handling and logging function
function handleError(message, error) {
  // For now, let's just log them to the browser's console
  if (error) {
    // eslint-disable-next-line no-console
    console.error(`${message}: ${error}`);
  } else {
    // eslint-disable-next-line no-console
    console.error(message);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('home-page');
  const appId = 'abc234'; // Replace with your actual appId

  // Function to fetch data from the base API
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      handleError('Error fetching data', error);
      // Handle errors here (e.g., display an error message)
      return []; // Return an empty array when an error occurs
    }
  }

  // Function to get the like count for a specific item
  function getLikeCount(likesData, itemId) {
    const likeData = likesData.find((like) => like.item_id === itemId);
    return likeData ? likeData.likes : 0;
  }

  // Fetch likes data and populate the home page
  async function populateHomePage() {
    try {
      const likesData = await fetchData(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`);
      const data = await fetchData('https://api.tvmaze.com/shows/1/episodes?specials=1');

      if (Array.isArray(data)) {
        data.forEach((item) => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          itemElement.id = item.id;
          itemElement.innerHTML = `
            <img src='${item.image.medium}' alt='image'>
            <h2>${item.name}</h2>
            <p>${item.number}</p>
            <p>${item.summary}</p>
            <button class="like-button" data-item-id="${item.id}">Like</button>
            <button class="comment-button" data-item-id="${item.id}">Comments</button>
            <button class="reserve-button" data-item-id="${item.id}">Reserve</button>
            <p>Likes: ${getLikeCount(likesData, item.id)}</p>
          `;
          homePage.appendChild(itemElement);
        });
      } else {
        // Handle the case where 'data' is not an array (e.g., API response error)
        handleError('Data is not an array', data);
        // You can display an error message or handle it as needed
      }
    } catch (error) {
      // Handle errors here (e.g., display an error message)
      handleError('Error populating home page', error);
    }
  }

  // Add event listeners for "Like," "Comments," and "Reserve" buttons
  homePage.addEventListener('click', async (event) => {
    if (event.target.classList.contains('like-button')) {
      const itemId = event.target.getAttribute('data-item-id');

      try {
        // Send a POST request to the Involvement API to record the like
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item_id: itemId }),
        });

        if (response.status === 201) {
          // Successfully recorded the like, update the UI as needed
          event.target.disabled = true; // Disable the "Like" button
          event.target.innerText = 'Liked';

          // Update the "Likes" count in the UI
          const likeCountElement = event.target.nextElementSibling;
          const currentLikes = parseInt(likeCountElement.textContent.split(' ')[1], 10);
          likeCountElement.textContent = `Likes: ${currentLikes + 1}`;
        } else {
          // Handle errors
          handleError('Error recording like', response.statusText);
        }
      } catch (error) {
        // Handle errors here
        handleError('Error recording like', error);
      }
    } else if (event.target.classList.contains('comment-button')) {
      // Show the comments popup and load comments data
      // Implement this part
    } else if (event.target.classList.contains('reserve-button')) {
      // Show the reservations popup and load reservations data
      // Implement this part
    }
  });

  // Populate the home page when the DOM is loaded
  populateHomePage();
});
