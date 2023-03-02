
const countdown = function (start) {
  const intervalId = setInterval ( () => {
    start--;
    if (start === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
  }, 1000);
}

let timerStartValue = 59;
countdown(timerStartValue);

