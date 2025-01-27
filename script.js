const nameInput = document.getElementById('nameInput');
const textInput = document.getElementById('textInput');
const postButton = document.getElementById('postButton');
const outputSection = document.getElementById('outputSection');

// Add a new post when the Post button is clicked
postButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    const now = new Date();
    const timeString = now.toLocaleString();

    // Create a new post object
    const post = { time: timeString, name: name, text: text };

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
