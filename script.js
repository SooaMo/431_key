const textInput = document.getElementById('textInput');
const postButton = document.getElementById('postButton');
const outputSection = document.getElementById('outputSection');

postButton.addEventListener('click', () => {
  const text = textInput.value;

  if (text) {
    // Create a new paragraph element to display the text
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    // Append the paragraph to the output section
    outputSection.appendChild(paragraph);

    // Clear the input field
    textInput.value = '';
  }
});
