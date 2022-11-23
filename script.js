const field = document.querySelector('textarea');
const clear = document.getElementById('clear');
const bold = document.getElementById('bold');
const italic = document.getElementById('italic');
const right = document.getElementById('right');
const left = document.getElementById('left');
const center = document.getElementById('center');
const html = document.querySelector('html');
const darkmode = document.querySelector('#checkbox');

let styles = [];

darkmode.addEventListener('change', function () {
    html.classList.toggle('dark');
});

send.onclick = function printText() {
    let typedText = field.value;
    const list = document.createElement("li");
    const insertlist = document.createTextNode(typedText);
    const dados = {
        text: typedText,
        styles: styles
    }
    const getListValues = JSON.parse(localStorage.getItem('textList')) || [];
    localStorage.setItem('textList', JSON.stringify([...getListValues, dados]));

    styles.forEach((style) => {
        list.classList.add(style)
    });

    document.getElementById("textList").appendChild(list);
    list.appendChild(insertlist);


    field.value = "";
}


window.onload = function () {
    const getListValues = JSON.parse(localStorage.getItem('textList')) || [];
    getListValues.forEach((item) => {
        const list = document.createElement("li");
        const insertlist = document.createTextNode(item.text);
        item.styles.forEach((style) => {
            list.classList.add(style)
        })
        list.appendChild(insertlist);
        document.getElementById("textList").appendChild(list);
    })
}

clear.onclick = function deleteAllTexts() {
    const remove = document.getElementById("textList")
    remove.removeChild(remove.lastElementChild)
    while (remove.firstChild) {
        remove.removeChild(remove.firstChild);
        localStorage.removeItem('textList')
    }
}


function addStyle(style) {

    if (styles.includes(style)) {
        styles = styles.filter((styledNow) => styledNow !== style);
    } else {
        styles.push(style);
    }
}