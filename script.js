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

//js para img slider
const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0]; 
icons = document.querySelectorAll(".wrapper i");

var isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
  var scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  icons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  icons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    var firstImgWidth = firstImg.clientWidth + 1;
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth ;
    setTimeout(() => showHideIcons(), 60);
  });
});


var dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  isDragStart = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

function goToProject0() {
    window.open("https://www.instagram.com/p/CnCxrgPDm5D/", "_blank");
  }
  
  function goToProject1() {
    window.open("https://www.instagram.com/p/CY2RQHLp-Dg/", "_blank");
  }
  
  function goToProject2() {
    window.open("https://www.instagram.com/p/CaGKuT6p9bw/", "_blank");
  }
  
  function goToProject3() {
    window.open("https://www.instagram.com/p/CaVdh8ppTe0/", "_blank");
  }

  function goToProject4() {
    window.open("https://www.instagram.com/p/CZII_rvJC9Q/", "_blank");
  }