console.log("text2element");

const buttonReset = document.getElementById("buttonReset");

const div = document.getElementById("divElements");
const element = document.getElementById("htmlElement");
const text = document.getElementById("textElement");

function create() {
    console.log("element.value", element.value);
    console.log("text.value", text.value);

    try {
        var newElement = document.createElement(element.value);
        newElement.classList.add("anyElement");
        newElement.innerHTML = text.value;

        div.appendChild(newElement);
        div.style.display = "block";

        buttonReset.style.display = "inline-block";
    } catch (error) {
        console.log("error:" + error);
    }
}

function reset() {
    element.value = null;

    text.value = null;

    const div = document.getElementById("divElements");
    for (var child of div.children) {
        div.removeChild(child);
    }
    div.style.display = "none";

    buttonReset.style.display = "none";
}