const nameInput = document.getElementById('nameInput');
const textInput = document.getElementById('textInput');
const postButton = document.getElementById('postButton');
const outputSection = document.getElementById('outputSection');
const resetButton = document.getElementById('resetButton');

// Load saved posts from localStorage
window.onload = () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  savedPosts.reverse().forEach(post => displayPost(post)); // Reverse to show oldest at bottom, newest at top
};

// Save and display a new post
postButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    const now = new Date();
    const timeString = now.toLocaleString();

    // Create a new post object
    const post = { time: timeString, name: name, text: text };

    // Save to localStorage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.unshift(post); // Add new post to the beginning of the array
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    // Display the post
    displayPost(post);

    // Clear inputs
    nameInput.value = '';
    textInput.value = '';
  } else {
    alert('Please fill in both the name and the text!');
  }
});

// Function to display a post
function displayPost(post) {
  const postContainer = document.createElement('div');
  postContainer.classList.add('post-container');

  const timeElement = document.createElement('p');
  timeElement.classList.add('post-time');
  timeElement.textContent = post.time;

  const nameElement = document.createElement('p');
  nameElement.classList.add('post-name');
  nameElement.textContent = `${post.name}'s answer: `;

  const textElement = document.createElement('p');
  textElement.classList.add('post-text');
  textElement.style.whiteSpace = 'pre-wrap';
  textElement.textContent = post.text;

  postContainer.appendChild(timeElement);
  postContainer.appendChild(nameElement);
  postContainer.appendChild(textElement);

  // Add the post to the top of the output section
  outputSection.prepend(postContainer);
}

// Reset button functionality
resetButton.addEventListener('click', () => {
  if (confirm('Are you sure you want to delete all posts?')) {
    localStorage.removeItem('posts'); // Clear localStorage
    outputSection.innerHTML = ''; // Clear the output section
  }
});
