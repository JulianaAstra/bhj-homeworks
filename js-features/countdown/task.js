const timer = document.getElementById('timer');

const countdown = (start) => {
  const intervalId = setInterval ( () => {
    start--;
    timer.textContent = start;
    if (start < 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
  }, 1000);
}

// let timerStartValue = 59;
// countdown(timerStartValue);

const countdown2 = (start) => {
    const intervalId = setInterval(() => {

      let hours = Math.floor(start / 3600);
      let minutes = Math.floor((start % 3600) / 60);
      let seconds = Math.floor(start % 60);
  
      hours = (hours < 10) ? `0${hours}` : hours;
      minutes = (minutes < 10) ? `0${minutes}` : minutes;
      seconds = (seconds < 10) ? `0${seconds}` : seconds;
  
      console.log(`${hours}:${minutes}:${seconds}`);
      start--;

      if (start < 0) {
        clearInterval(intervalId);
        const link = document.querySelector('.link');
        link.click();
      }
    }, 1000);
  };

// countdown2(59);


