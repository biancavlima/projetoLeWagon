console.log("hello world")
let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");

console.log(menuBox)

menuIcon.onclick = function() {
    menuBox.classList.toggle("open-menu");
    if(menuBox.classList.contains("open-menu")) {
        menuIcon.src = "./imagens/close.png";
    } else {
        menuIcon.src = "./imagens/menu.png";
    }
}

/* também poderia fazer dessa forma:

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle("open-menu");
});
*/
