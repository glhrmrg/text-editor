const field = document.querySelector('textarea');
const html = document.querySelector('html');
const darkmode = document.querySelector('#darkmode');
var left = document.getElementById('leftchk');
var right = document.getElementById('rightchk');
var center = document.getElementById('centerchk');

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

function leftcheck() {
    if (left.checked) {
        center.disabled = true;
        right.disabled = true;
    } else {
        center.disabled = false;
        right.disabled = false;
    }
}

function rightcheck() {
    if (right.checked) {
        center.disabled = true;
        left.disabled = true;
    } else {
        center.disabled = false;
        left.disabled = false;
    }
}

function centercheck() {
    if (center.checked) {
        left.disabled = true;
        right.disabled = true;
    } else {
        left.disabled = false;
        right.disabled = false;
    }
}

