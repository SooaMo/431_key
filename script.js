const nameInput = document.getElementById('nameInput');
const textInput = document.getElementById('textInput');
const postButton = document.getElementById('postButton');
const outputSection = document.getElementById('outputSection');

postButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();

  if (name && text) {
    // Get the current time
    const now = new Date();
    const timeString = now.toLocaleString(); // Format: "YYYY/MM/DD, HH:MM:SS"

    // Create a container for the post
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');

    // Create a time element
    const timeElement = document.createElement('p');
    timeElement.classList.add('post-time');
    timeElement.textContent = timeString;

    // Create a name element
    const nameElement = document.createElement('p');
    nameElement.classList.add('post-name');
    nameElement.textContent = `${name}'s answer:`;

    // Create a text element
    const textElement = document.createElement('p');
    textElement.classList.add('post-text');
    textElement.style.whiteSpace = 'pre-wrap'; // Preserve newlines
    textElement.textContent = text;

    // Add time, name, and text to the post container
    postContainer.appendChild(timeElement);
    postContainer.appendChild(nameElement);
    postContainer.appendChild(textElement);

    // Insert the post container at the top of the output section
    outputSection.prepend(postContainer);

    // Clear the input fields
    nameInput.value = '';
    textInput.value = '';
  } else {
    alert('Please fill in both the name and the text!');
  }
});
