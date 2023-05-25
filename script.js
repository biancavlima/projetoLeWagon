//js para logo carregamento
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('contents').style.visibility="visible";
        },800);
    }
  };

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