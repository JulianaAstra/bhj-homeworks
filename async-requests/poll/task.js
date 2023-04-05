const pollTitle = document.querySelector('#poll__title');
const buttonsContainer = document.querySelector('.poll__answers');
const answerButtons = Array.from(buttonsContainer.querySelectorAll('.poll__answer'));
const modal = document.querySelector('#modal_success');
const modalCloseButton = document.querySelector('.btn_success');

const createButtons = (amount) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const btn = document.createElement('button');
        btn.classList.add('poll__answer');
        fragment.appendChild(btn);
    }
    return fragment;
}

const onBtnContainerClick = (evt) => {
    if (evt.target.matches('button')) {
        modal.classList.remove('hidden');
        modalCloseButton.addEventListener('click', onCloseClick);
    }
}

const onCloseClick = (evt) => {
    modal.classList.add('hidden');
    modalClose.removeEventListener('click', onCloseClick);
    modalCloseButtun.removeEventListener('click', onCloseClick);
}

const drawButtons = (post, amount) => {
    const buttons = createButtons(amount);
    buttonsContainer.innerHTML = '';
    buttonsContainer.append(buttons);
    const answerButtons = Array.from(buttonsContainer.querySelectorAll('.poll__answer'));
    answerButtons.forEach((btn, idx) => btn.textContent = post.data['answers'][idx]);
}

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then( (response) => {
    if (response.ok) {
        return response;
    }
    throw new Error(`${response.status} - ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((post) => {
    pollTitle.textContent = post.data['title'];
    const btnsAmount = post.data['answers'].length;
    drawButtons(post, btnsAmount);
  })
  .catch((error) => console.log(error));

buttonsContainer.addEventListener('click', onBtnContainerClick);
