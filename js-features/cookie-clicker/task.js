const cookie = document.querySelector('.clicker__cookie');
const counter = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter');

let count = 0;
let date = 0;

cookie.onclick = () => {
  counter.textContent = count;
  count++;
  if (count % 2 === 0) {
    cookie.style.width = '220px';        
  } else {
    cookie.style.width = '200px';
  }

  const time = new Date().getTime();
  const clickSpeed = 1 / ((time - date) / 1000);
  speedCounter.textContent = clickSpeed.toFixed(2);
  date = time;
}