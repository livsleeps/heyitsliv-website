// learning javascript as i go so may be bad code (；′⌒`)
// tried to add comments for myself and to improve readability
const commandInput = document.getElementById('commandInput');
const displayArea = document.getElementById('terminalOutput');

// load external html into terminal div
function inputHTML(divId,filePath) {
  fetch(`commands/${filePath}`) // load file from specified path

  .then(response => { // verify file was found and loaded
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })

  .then(html => { // find target div
    const targetDiv = document.getElementById(divId);
    if (targetDiv) {
      targetDiv.innerHTML = html;
    } else {
      console.error('Target div not found');
    }
  })

  .catch(error => { // handle errors
    console.error('Error loading HTML file:', error);
  });
}

// test function call
inputHTML('terminalOutput', 'test.html');

// event listener for command input
commandInput.addEventListener('keyup', (event) => {
  if (event.key === `Enter`) { // hitting enter processes request
    const command = commandInput.value.trim().toLowerCase(); // makes commant lower case and removes whitespace for better processing

    // list of commands w/ actions
    if (command === 'help') {
      displayArea.textContent = 'todo: list of commands';
      commandInput.value = ''; // clear input field
    } else if (command.startsWith('echo ')) {
      const message = commandInput.value.substring(5); // get text after 'echo '
      displayArea.textContent += `echo: ${message}\n`; // display message
      commandInput.value = ''; // clear input field
    } else {
      displayArea.textContent = `Unknown command: ${command}`;
      commandInput.value = ''; // clear input field
    }
  }
});