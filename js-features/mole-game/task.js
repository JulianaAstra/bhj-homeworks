const holeCollection = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;

for (let i = 0; i < holeCollection.length; i++) {
    holeCollection[i].addEventListener('click', () => {
        if (holeCollection[i].classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
        } else{
        lostCount++;
        lost.textContent = lostCount;
        }

        if (lostCount === 5) {
            alert('Вы проиграли');
            lostCount = 0;
            deadCount = 0;
            dead.textContent = deadCount;
            lost.textContent = lostCount;
        } 
        if (deadCount === 10) {
            alert('Вы выиграли');
            lostCount = 0;
            deadCount = 0;
            dead.textContent = deadCount;
            lost.textContent = lostCount;
        }
    });
};