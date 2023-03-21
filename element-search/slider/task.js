const slides = Array.from(document.querySelectorAll('.slider__item'));
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const dots = Array.from(document.querySelectorAll('.slider__dot'));

const findActiveElem = function (elem) {
    return elem.classList.contains('slider__item_active');
}

function setActiveImage (num) {
    let count = num;
    const activeSlidePosition = slides.findIndex(findActiveElem);
    
    slides[activeSlidePosition].classList.remove('slider__item_active');
    dots[activeSlidePosition].classList.remove('slider__dot_active');

    if (count < 0) {
        count = slides.length - 1;
    }
    if (count >= slides.length) {
        count = 0;
    }
    slides[count].classList.add('slider__item_active');
    dots[count].classList.add('slider__dot_active');
}

arrowNext.addEventListener('click', () => {
    let count = slides.findIndex(findActiveElem);
    count++;
    setActiveImage(count);
});

arrowPrev.addEventListener('click', () => {
    let count = slides.findIndex(findActiveElem);
    count--;
    setActiveImage(count);
});

dots.forEach((elem, idx) => {
    elem.addEventListener('click', (evt) => {
        setActiveImage(idx);
    });
});
