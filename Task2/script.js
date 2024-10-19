// const label = document.getElementById("text");
const txtip = document.getElementById("txtip");
const bgip = document.getElementById("bgip");
const textcolorip = document.getElementById("textcolorip");

const form = document.querySelector("form");
const div = document.createElement("div");
document.body.appendChild(div);
form.addEventListener("submit",e =>{
    e.preventDefault();
    const newelement = document.createElement("p");
    const newtext = document.createTextNode(txtip.value);
    newelement.appendChild(newtext);
    newelement.style.backgroundColor = bgip.value;
    newelement.style.color = textcolorip.value;
    div.appendChild(newelement);
});


