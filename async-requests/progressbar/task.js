const uploadButton = document.querySelector('#send');
const form = document.querySelector('#form');
const progressBar = document.querySelector('#progress');
const successText = document.querySelector('.success')

form.addEventListener('submit', (evt) => {
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    request.upload.addEventListener('progress', onProgress);
    request.addEventListener('load', onLoad);
    request.send(formData);
    evt.preventDefault();
})

const onProgress = (evt) => {
    progressBar.max = evt.total;
    progressBar.value = evt.loaded;
}

const onLoad = () => {
    successText.textContent = "Файл загружен";
}

