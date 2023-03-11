const slides = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = document.querySelectorAll('.slider__dot');

let count = 0;

const moveForward = () => {
    count++;
    if (count >= slides.length) {
        slides[count - 1].classList.remove('slider__item_active');
        dots[count - 1].classList.remove('slider__dot_active');
        count = 0;
        slides[count].classList.add('slider__item_active');
        dots[count].classList.add('slider__dot_active');
    } else {
        slides[count - 1].classList.remove('slider__item_active');
        slides[count].classList.add('slider__item_active');
        dots[count - 1].classList.remove('slider__dot_active');
        dots[count].classList.add('slider__dot_active');
    }
}

const moveBackward = () => {
    count--;
    if (count < 0) {
        slides[count + 1].classList.remove('slider__item_active');
        dots[count + 1].classList.remove('slider__dot_active');
        count = slides.length - 1;
        slides[count].classList.add('slider__item_active');
        dots[count].classList.add('slider__dot_active');
    } else {
        slides[count + 1].classList.remove('slider__item_active');
        slides[count].classList.add('slider__item_active');
        dots[count + 1].classList.remove('slider__dot_active');
        dots[count].classList.add('slider__dot_active');
    }
}

const changePicture = (evt) => {   
    const activePicture = document.querySelector('.slider__item_active');
    const activeDot = document.querySelector('.slider__dot_active');
    activePicture.classList.remove('slider__item_active');
    let index = Array.from(dots).indexOf(evt.target);

    slides[index].classList.add('slider__item_active');
    activeDot.classList.remove('slider__dot_active');
    dots[index].classList.add('slider__dot_active');
}

arrowNext.addEventListener('click', () => {
    moveForward();
});

arrowPrev.addEventListener('click', () => {
    moveBackward();
});

dots.forEach(element => {
    element.addEventListener('click', (evt) => {
        changePicture(evt);
    });
});