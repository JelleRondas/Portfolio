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

let nieuweCursor = document.getElementById('nieuweCursor');
document.addEventListener('mousemove', function(e){
	let x = e.clientX;
	let y = e.clientY + window.scrollY;
	nieuweCursor.style.left = x + "px";
	nieuweCursor.style.top = y + "px";
})

function verwijderen() {
	this.remove();
	nieuweCursor.style.display = "none";

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

	nieuweImg.addEventListener('mouseover', function(){
		nieuweCursor.style.display = "inline";
	})

	nieuweImg.addEventListener('mouseout', function(){
		nieuweCursor.style.display = "none";
	})
}

while (i<imgDivs.length) {
	imgDivs[i].addEventListener("click", vergroten);
	i++;
}
