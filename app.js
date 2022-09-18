const primary = document.querySelector('.primary');
const secondary = document.querySelector('.secondary');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    console.log(e)
  if (e.target.classList.contains('num')) {
    if (primary.textContent === '0') {
      primary.textContent = e.target.innerHTML;
    } else {
      primary.textContent =
        primary.textContent + e.target.innerHTML;
    }
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('oper')) {
    if (primary.textContent !== '0') {
      secondary.textContent =
        primary.textContent + e.target.innerHTML;

      primary.textContent = 0;
    }
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('pink equals')) {
    let result = 0;
    const value1 = Number(secondary.textContent.replace(/[×+−÷]/g, ''));
    const value2 = Number(primary.textContent);
    const oper = secondary.textContent.replace(/[0-9.]/g, '');
    switch (oper) {
      case '+':
        result = value1 + value2;
        break;
      case '−':
        result = value1 - value2;
        break;
      case '×':
        result = value1 * value2;
        break;
      case '÷':
        result = value1 / value2;
        break;
    }
    secondary.textContent = result;
    primary.textContent = 0;
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('clear')) {
    secondary.textContent = '';
    primary.textContent = 0;
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('sign')) {
    if (!primary.textContent.includes('-')) {
      primary.textContent = '-' + primary.textContent;
    } else {
      primary.textContent = primary.textContent.replace(
        /[-]/g,
        ''
      );
    }
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('percent')) {
    secondary.textContent = primary.textContent / 100;
    primary.textContent = 0;
  }
});

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('decimal')) {
    if (!primarytextContent.includes('.')) {
      primary.textContent = primary.textContent + '.';
    }
  }
});