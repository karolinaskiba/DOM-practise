const addElement = (e, node = 'div', txt = 'text', atrr = 'style', value = 'font-size:20px;') => {
    e.preventDefault();//zatrzymanie domyślego odświeżania strony
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (atrr) {
        element.setAttribute(atrr, value);
    }

    document.querySelector('.content').appendChild(element);
}

const searchElements = (e, nameElement) => {
    e.preventDefault();
    console.log('searching');
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);

    if (elements.length) {
        infoElement.innerHTML = `<p class="result_info"> w tym doumencie znalzałam ${elements.length} elementów</p>`;
        showInfo(elements, infoElement);
    } else {
        infoElement.innerHTML = `<p class="result_info"> w tym doumencie nie znalzałam ${nameElement} elementów</p>`;
        return;
    };
}

const showInfo = (el, iel) => {
    el.forEach((item) => {
        const divItem = document.createElement('div');
        divItem.className = "element-info";
        divItem.innerHTML =
            `<div>${item.nodeName}</div>
        <div>klasa/klasy${item.className}</div>
        <div>wysokość elementu${item.offsetHeight}</div>
        <div>szerokość elementu${item.offsetWidth}</div>
        <div>odległość od lewej elementu${item.offsetLeft}</div>
        <div>odległość od góry elementu${item.offsetTop}</div>
        <div>liczba elementów dzieci${item.childElementCount}</div>
       
        `
        iel.appendChild(divItem)
    })
};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    //pobranie wartości z odpowiednich inputów
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.atrr.value,
    addForm.elements.value.value,

));

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));