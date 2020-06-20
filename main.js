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
const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.atrr.value,
    addForm.elements.value.value,


));