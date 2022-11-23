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

darkmode.addEventListener('change', function(){
    html.classList.toggle('dark');
});

send.onclick = function printText () {
    let typedText = field.value;
    const list = document.createElement("li");
    const insertlist = document.createTextNode(typedText);
    list.appendChild(insertlist);
    styles.forEach((style) => {
        list.classList.add(style)
    });
    
    field.value = "";
    document.getElementById("textList").appendChild(list);
}

clear.onclick = function removeText () {
    const remove = document.getElementById("textList")
    remove.removeChild(remove.lastElementChild)
}

function addStyle (style) 
{
    if (styles.includes(style)) 
    {
        styles = styles.filter((styledNow) => styledNow !== style);
    } else {
        styles.push(style);
    }
}

// bold.onclick = function bold() {
//     if (document.getElementById("textarea").style.fontWeight == "bold") {
//         document.getElementById("textarea").style.fontWeight = "normal";
//     }else {
//         document.getElementById("textarea").style.fontWeight = "bold";
//     }
// }

// italic.onclick = function italic() {
//     if (document.getElementById("textarea").style.fontStyle == "italic") {
//         document.getElementById("textarea").style.fontStyle = "normal";
//     }else {
//         document.getElementById("textarea").style.fontStyle = "italic";
//     }
// }

// center.onclick = function center() {
//     if (document.getElementById("textarea").style.textAlign == "center") {
//         document.getElementById("textarea").style.textAlign = "left";
//     }else {
//         document.getElementById("textarea").style.textAlign = "center";
//     }
// }

// right.onclick = function right() {
//     if (document.getElementById("textarea").style.textAlign == "right") {
//         document.getElementById("textarea").style.textAlign = "left";
//     }else {
//         document.getElementById("textarea").style.textAlign = "right";
//     }
// }

// left.onclick = function left() {
//     if (document.getElementById("textarea").style.textAlign == "left") {
//         document.getElementById("textarea").style.textAlign = "left";
//     }else {
//         document.getElementById("textarea").style.textAlign = "left";
//     }
// }


// if(textarea.style.fontWeight == "bold") {
    //     list.setAttribute("class", "bold"); 
    // } 
    
    // if (textarea.style.fontStyle == "italic") {
    //     list.setAttribute("class", "italic"); 
    // }
    
    // if (textarea.style.fontStyle == "italic" && textarea.style.fontWeight == "bold") {
    //     list.setAttribute("class", "italic bold" ); 
    // }

    // if (textarea.style.textAlign == "right") {
    //     list.setAttribute("class", "rightText"); 
    // }

    // if (textarea.style.textAlign == "right" && textarea.style.fontWeight == "bold") {
    //     list.setAttribute("class", "rightText bold"); 
    // }

    // if (textarea.style.textAlign == "right" && textarea.style.fontStyle == "italic") {
    //     list.setAttribute("class", "rightText italic"); 
    // }

    // if (textarea.style.textAlign == "right" && textarea.style.fontWeight == "bold" && textarea.style.fontStyle == "italic") {
    //     list.setAttribute("class", "rightText bold italic"); 
    // }

    // if (textarea.style.textAlign == "center") {
    //     list.setAttribute("class", "centerText"); 
    // }

    // if (textarea.style.textAlign == "center" && textarea.style.fontWeight == "bold") {
    //     list.setAttribute("class", "centerText bold"); 
    // }

    // if (textarea.style.textAlign == "center" && textarea.style.fontStyle == "italic") {
    //     list.setAttribute("class", "centerText italic"); 
    // }

    // if (textarea.style.textAlign == "center" && textarea.style.fontWeight == "bold" && textarea.style.fontStyle == "italic") {
    //     list.setAttribute("class", "centerText bold italic"); 
    // }