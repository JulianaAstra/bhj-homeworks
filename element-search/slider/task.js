const slides = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let count = 0;

const moveForward = () => {
    count++;
    if (count >= slides.length) {
        slides[count - 1].classList.remove('slider__item_active');
        count = 0;
        slides[count].classList.add('slider__item_active');
    } else {
        slides[count - 1].classList.remove('slider__item_active');
        slides[count].classList.add('slider__item_active');
    }
}

const moveBackward = () => {
    count--;
    if (count < 0) {
        slides[count + 1].classList.remove('slider__item_active');
        count = slides.length - 1;
        slides[count].classList.add('slider__item_active');
    } else {
        slides[count + 1].classList.remove('slider__item_active');
        slides[count].classList.add('slider__item_active');
    }
}


arrowNext.addEventListener('click', () => {
    moveForward();
});

arrowPrev.addEventListener('click', () => {
    moveBackward();
});

