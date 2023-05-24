//js para menu box

let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");
let itensLista = document.getElementById('itensLista')

menuIcon.onclick = function() {
    menuBox.classList.toggle("open-menu");
    if(menuBox.classList.contains("open-menu")) {
        menuIcon.src = "./imagens/close.png";
    } else {
        menuIcon.src = "./imagens/menu.png";
    }   
};

itensLista.onclick = function() {
    menuBox.classList.toggle("open-menu");
    if(menuBox.classList.contains("open-menu")) {
        menuIcon.src = "./imagens/close.png";
    } else {
        menuIcon.src = "./imagens/menu.png";
    }
};