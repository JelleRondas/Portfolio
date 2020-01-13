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



let imgDivs = document.querySelectorAll("section div");
let i = 0;
let attribuut;

function verwijderen() {
	this.remove();
	nieuweCursor.style.display = "none";
	mainGedeelte.style.cursor = "default";
}


function vergroten() {
	attribuut = this.getAttribute("data-img");
	let nieuweImg = document.createElement("img");
	let nieuweDiv = document.createElement("div");
	nieuweImg.setAttribute("src",attribuut);
	nieuweDiv.classList.add("divnieuweimg");
	nieuweImg.classList.add("nieuweimg");
	mainGedeelte.appendChild(nieuweDiv);
	nieuweDiv.appendChild(nieuweImg);
	nieuweDiv.addEventListener("click",verwijderen);
	nieuweCursor.style.display = "inline";
	mainGedeelte.style.cursor = "none";
}

while (i<imgDivs.length) {
	imgDivs[i].addEventListener("click", vergroten);
	i++;
}

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
