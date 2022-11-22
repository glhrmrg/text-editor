const field = document.querySelector('textarea');
const clear = document.getElementById('clear');
const send = document.querySelector('send');

function printText () {
    let typedText = field.value;
    const list = document.createElement("li");
    const insertlist = document.createTextNode(typedText);
    list.appendChild(insertlist);
    
    if(textarea.style.fontWeight == "bold") {
        list.setAttribute("class", "bold"); 
    } else if (textarea.style.fontStyle == "italic") {
        list.setAttribute("class", "italic"); 
    }

    document.getElementById("textList").appendChild(list);
}

function bold() {
    if (document.getElementById("textarea").style.fontWeight == "bold") {
        document.getElementById("textarea").style.fontWeight = "normal";
    }else {
        document.getElementById("textarea").style.fontWeight = "bold";
    }
}

function italic() {
    if (document.getElementById("textarea").style.fontStyle == "italic") {
        document.getElementById("textarea").style.fontStyle = "normal";
    }else {
        document.getElementById("textarea").style.fontStyle = "italic";
    }
}

function centered() {
    if (document.getElementById("textarea").style.fontStyle == "italic") {
        document.getElementById("textarea").style.fontStyle = "normal";
    }else {
        document.getElementById("textarea").style.fontStyle = "italic";
    }
}

function italic() {
    if (document.getElementById("textarea").style.fontStyle == "italic") {
        document.getElementById("textarea").style.fontStyle = "normal";
    }else {
        document.getElementById("textarea").style.fontStyle = "italic";
    }
}

function removeText () {
    const remove = document.getElementById("textList")
    remove.removeChild(remove.firstElementChild)
}
