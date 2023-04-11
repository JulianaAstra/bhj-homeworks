const textElement = document.querySelector('#editor');
const resetButtonElement = document.querySelector('input[type="reset"]');

const onInput = () => {
    const text = textElement.value;
    localStorage.setItem('text', text);
}

const onBtnClick = () => {
    textElement.value = '';
    localStorage.clear();
}

const onLoad = () => {
    textElement.value = localStorage.getItem('text');
}

textElement.addEventListener('input', onInput);
resetButtonElement.addEventListener('click', onBtnClick);
window.addEventListener('load', onLoad);