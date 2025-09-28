
  const commandInput = document.getElementById('commandInput');
  const displayArea = document.getElementById('terminalOutput');

  commandInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') { // hitting enter processes request
      const command = commandInput.value.trim().toLowerCase(); // makes commant lower case and removes whitespace for better processing

      // list of commands w/ actions
      if (command === 'help') {
        displayArea.textContent = 'todo: list of commands';
        commandInput.value = ''; // clear input field
      } else if (command.startsWith('echo ')) {
        const message = commandInput.substring(5); // get text after 'echo '
        displayArea.textContent += `echo: ${message}\n`; // display message
        commandInput.value = ''; // clear input field
      } else {
        displayArea.textContent = `Unknown command: ${command}`;
        commandInput.value = ''; // clear input field
      }
    }
  });