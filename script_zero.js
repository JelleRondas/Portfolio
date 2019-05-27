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



/* ---- slideshow ---- */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4500);
}