// hier komt je code
// console.log("Hallo wereld!");

let menuKnop = document.querySelector(".menu");
let menuKnopIMG = document.querySelector(".menu img");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
let titel = document.querySelector("header h1");
let logo = document.querySelector(".logo");

/*function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("click",verbergMenu);
titel.addEventListener("click",verbergMenu);
logo.addEventListener("click",verbergMenu);
navMenu.addEventListener("click",verbergMenu);

function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);*/


//dark mode
let darkLink = document.querySelectorAll("nav ul li a")[2];
let lightLink = document.querySelectorAll("nav ul li a")[3];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
	logo.setAttribute("src","img/logo.svg");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
	logo.setAttribute("src","img/logo_white.svg");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);




let button = document.querySelector("button");
let body = document.querySelector("body");


function test() {
	body.classList.toggle('open');
	button.classList.toggle('is-active');
}


button.addEventListener("click",test);
//Get the button:
mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
