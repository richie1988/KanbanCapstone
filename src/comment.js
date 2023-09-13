const commentInput = document.getElementById('comment-input');
const addComment = document.getElementById('add-comment');
const commentLists = document.getElementById('comment-lists');
const commentCounts = document.getElementById('comment-counts');
const message = document.getElementById('message');
const errComment = document.getElementById('error-comment');

// Retrieve existing comments from local storage or initialize an empty array
let comments = JSON.parse(localStorage.getItem('comments')) || [];

function addCom() {
  if (commentInput.value && message.value) {
    const comment = {
      msg: message.value,
      uName: commentInput.value,
    };

    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    const userComment = document.createElement('li');
    userComment.className = 'comment-lists-items';

    const displayComment = document.createElement('p');
    displayComment.innerHTML = `${comment.msg} by ${comment.uName}`;
    displayComment.className = 'display-comment';

    commentCounts.textContent = comments.length;

    userComment.appendChild(displayComment);
    commentLists.appendChild(userComment);

    commentInput.value = '';
    message.value = '';
  } else {
    errComment.textContent = 'Please, enter the value input';
  }
}

addComment.addEventListener('click', addCom);

window.addEventListener('load', () => {
  // Retrieve existing comments from local storage
  const storedComments = JSON.parse(localStorage.getItem('comments'));
  if (storedComments) {
    comments = storedComments;
    commentCounts.textContent = comments.length;

    // Display existing comments
    comments.forEach((comment) => {
      const userComment = document.createElement('li');
      const displayComment = document.createElement('p');
      displayComment.innerHTML = `${comment.msg} by ${comment.uName}`;
      userComment.appendChild(displayComment);
      commentLists.appendChild(userComment);
    });
  }
});
