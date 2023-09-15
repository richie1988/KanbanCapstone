import buttonEventListener from './popuphandler.js';
import { movieAPI } from './commenthandler.js';
import { handleLikeClick } from './likescounter.js';

const homeContent = async () => {
  const contentContainer = document.getElementById('content-container');

  const response = await fetch(movieAPI);
  const episodeData = await response.json();

  episodeData.forEach((episode) => {
    const list = document.createElement('li');
    list.id = episode.id;

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    list.appendChild(imgContainer);

    const img = document.createElement('img');
    img.alt = 'episode banner';
    img.classList.add('image');

    if (episode.image && episode.image.medium) {
      img.src = episode.image.medium;
    } else {
      img.src = 'fallback-image-url.jpg'; // Provide a fallback image URL
    }

    imgContainer.appendChild(img);

    const container = document.createElement('div');
    container.classList.add('title-like-container');
    list.appendChild(container);

    const title = document.createElement('div');
    title.classList.add('movie-title');
    title.textContent = `${episode.name}`;
    container.appendChild(title);

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    container.appendChild(subContainer);

    const like = document.createElement('div');
    like.classList.add('like');
    like.id = episode.id;
    like.innerHTML = '&hearts;';
    subContainer.appendChild(like);

    const likeCount = document.createElement('div');
    likeCount.classList.add('like-count');
    likeCount.innerHTML = 0;
    subContainer.appendChild(likeCount);

    const commentBTN = document.createElement('button');
    commentBTN.classList.add('comment-button');
    commentBTN.textContent = 'Comments';
    commentBTN.type = 'button';
    list.appendChild(commentBTN);

    contentContainer.appendChild(list);
  });

  const likeEle = document.querySelectorAll('.like');
  const openPopButtons = document.querySelectorAll('.comment-button');

  likeEle.forEach((button) => {
    button.addEventListener('click', handleLikeClick);
  });

  openPopButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      buttonEventListener(e.target.parentElement.id);
    });
  });
};

export default homeContent;
