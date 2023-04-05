const loader = document.querySelector('#loader');
const valuteItems = document.querySelector('#items');

const makeElement = (charCode, value) => {
    const container = document.createElement('div');
    const codeElem = document.createElement('div');
    const valueElem = document.createElement('div');
    const currencyElem = document.createElement('div');

    container.classList.add('item');
    codeElem.classList.add('item__code');
    valueElem.classList.add('item__value');
    currencyElem.classList.add('item__currency');

    codeElem.textContent = charCode;
    valueElem.textContent = value;
    currencyElem.textContent =  'руб.'; 
    container.append(codeElem, valueElem, currencyElem);
    return container;   
}

const getValuteItems = (data) => {
    const fragment = document.createDocumentFragment();  
    for (const key in data) {
        const code = data[key]['CharCode'];
        const value = data[key]['Value'];
        const element = makeElement(code, value);
        fragment.append(element);
    }
    return fragment;
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then((response) => {
        if (response.ok) {
            return response;
        }
        throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((post) => {
        loader.classList.remove('loader_active');
        const valuteData = post.response['Valute'];
        const elements = getValuteItems(valuteData);
        valuteItems.append(elements);
    })
    .catch((error) => console.log(error));