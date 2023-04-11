const modalElement = document.querySelector('#subscribe-modal');
const modalCloseElement = document.querySelector('.modal__close');

const onLoad = () => {
    const cookies = document.cookie;
    if (!cookies.includes('modalClosed')) {
        modalElement.classList.add('modal_active');
    }
}

const onCloseClick = () => {
    modalElement.classList.remove('modal_active');
    document.cookie = 'modalClosed=true';
}

window.addEventListener('load', onLoad);
modalCloseElement.addEventListener('click', onCloseClick);
