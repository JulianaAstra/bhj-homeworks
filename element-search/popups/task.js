const popupMain = document.querySelector('#modal_main');
const popupSuccess = document.querySelector('#modal_success');
const close = document.querySelectorAll('.modal__close_times');

popupMain.classList.add('modal_active');

popupMain.querySelector('.show-success').addEventListener('click', () => {
    popupMain.classList.remove('modal_active');
    popupSuccess.classList.add('modal_active');
});

close.forEach(element => {
    element.addEventListener('click', () => {
        popupSuccess.classList.remove('modal_active');
        popupMain.classList.remove('modal_active');
    });
});



