const displayMain = document.querySelector('.display_main');
  const displayMin = document.querySelector('.display_min');
  const buttons = document.querySelectorAll('.buttons button');

  let currentInput = '';
  let result = '';

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const value = button.dataset.value;
          handleInput(value);
          updateDisplay();
      });
  });

  function handleInput(value) {
      if (value === 'AC') {
          clearAll();
      } else if (value === 'CE') {
          clearEntry();
      } else if (value === '=') {
          compute();
      } else {
          appendInput(value);
      }
  }

  function updateDisplay() {
      displayMain.textContent = result;
      displayMin.textContent = currentInput;
  }

  function appendInput(value) {
      if (value === '.' && currentInput.slice(-1) === '.') return;
      currentInput += value;
  }

  function compute() {
      try {
          result = eval(currentInput);
      } catch (e) {
          result = 'Error';
      }
  }

  function clearAll() {
      currentInput = '';
      result = '';
  }

  function clearEntry() {
      currentInput = currentInput.slice(0, -1);
  }