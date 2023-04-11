const signInContainerElement = document.querySelector('#signin');
const formElement = document.querySelector('#signin__form');
const submitBtnElement = document.querySelector('#signin__btn');
const welcomeElement = document.querySelector('#welcome');
const userIdElement = document.querySelector('#user_id');
const btnContainerElement = document.querySelector('.btn__row');
const inputElements = document.querySelectorAll('.control');
const exitBtnElement = document.querySelector('.exit_button');

const showSuccessMesage = (data) => {
    welcomeElement.classList.add('welcome_active');
    signInContainerElement.classList.remove('signin_active');
    userIdElement.textContent = `${data}`;
}

const showErrorMessage = () => {
    const errorMessage = document.createElement('span');
    errorMessage.textContent = 'Неверный логин/пароль';
    btnContainerElement.append(errorMessage);
    formElement.reset();
}

const onLoad = () => {
    const storageData = localStorage.getItem('userId');
    console.log(storageData);
    if (storageData) {
        showSuccessMesage(storageData);
        return;
    }
}

const onExitBtnClick = () => {
    welcomeElement.classList.remove('welcome_active');
    signInContainerElement.classList.add('signin_active');
    localStorage.removeItem('userId');
}

const onSubmit = (evt) => {
    evt.preventDefault();
    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    body: new FormData(formElement) 
    })
  .then( (response) => {
    if (response.ok) {
        return response;
    }
    throw new Error(`${response.status} - ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((post) => {
    console.log(post);
    if (post.success) {
        const userId = post['user_id'];
        showSuccessMesage(userId);
        localStorage.setItem('userId', userId);
        formElement.reset();
        return;
    }
    showErrorMessage();
  })
  .catch((error) => console.log(error));
}

window.addEventListener('load', onLoad);
formElement.addEventListener('submit', onSubmit);
exitBtnElement.addEventListener('click', onExitBtnClick);
