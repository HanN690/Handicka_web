function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0)";
    document.querySelector(".hamburg").style.display = "none";
    document.querySelector(".cancel").style.display = "block";
}

function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
    document.querySelector(".cancel").style.display = "none";
    document.querySelector(".hamburg").style.display = "block";
}

// Typewriter Effect
const texts = [
    "DESIGNER",
    "TRADER",
    "EDITOR",
]
let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter