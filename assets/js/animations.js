let mediaQueries = ["(max-width: 550px) and (orientation: portrait)",
	"(min-width: 480px) and (max-width: 900px) and (orientation: landscape)",
	"(min-width: 551px) and (max-width: 1200px) and (orientation: portrait)"
];

// ------------------------- Menu handler ------------------------------

const menu = document.getElementById("navbarNav");
const menuIcon = document.getElementsByClassName("menu");
// let displayed;
function openMenu() {
	if((window.matchMedia(mediaQueries[0]).matches) || (window.matchMedia(mediaQueries[1]).matches)
		|| (window.matchMedia(mediaQueries[2]).matches)) {
		menu.classList.add("fade-in");
		menu.classList.remove("fade-out");
		// displayed = window.getComputedStyle(menuIcon[0]);
		// console.log(displayed.getPropertyValue('display'));
		menu.style.display = 'block';
		menuIcon[0].style.display = 'none';
		menuIcon[1].style.display = 'block';
	}
}
function closeMenu() {
	if((window.matchMedia(mediaQueries[0]).matches) || (window.matchMedia(mediaQueries[1]).matches)
		|| (window.matchMedia(mediaQueries[2]).matches)) {
		menu.classList.add("fade-out");
		menu.classList.remove("fade-in");
		// displayed = window.getComputedStyle(menuIcon[1]);
		// console.log(menu.classList);
		menuIcon[1].style.display = 'none';
		menuIcon[0].style.display = 'block';
	}
}

// ------------------------- Timeline handler ---------------------------------------

let textIndex = 0; // contenuto selezionato (indice)
const indicators = document.getElementsByClassName("bar-circle");
const texts = document.getElementsByClassName("timeline-text"); // collection elementi da mostrare
const textHere = document.getElementById("text-shower"); // "nuvoletta"
let leftPos = [1.4, 23, 47]; // spostamento "nuvoletta" base
let leftPosPortrait = 5; // spostamento nuvoletta e freccia per i responsive
let leftPosLandscape = [3,20,43];
let timelineTimeout;
showText();
function setPositions() { // sposta la nuvoletta in base a quale contenuto è selezionato
	if((window.matchMedia(mediaQueries[0]).matches) || (window.matchMedia(mediaQueries[2]).matches)) {
		setPortraitPositions();
	}
	else if(window.matchMedia(mediaQueries[1]).matches) {
		setLandscapePositions();
	}
	else {
		switch(textIndex) {
			case 1:
				textHere.style.left = leftPos[0] + '%';
				break;
			case 2:
				textHere.style.left = leftPos[1] + '%';
				break;
			case 3:
				textHere.style.left = leftPos[2] + '%';
				break;
		}
	}
}
function setPortraitPositions() {
	textHere.style.left = leftPosPortrait + '%';
}
function setLandscapePositions() {
	switch(textIndex) {
		case 1:
			textHere.style.left = leftPosLandscape[0] + '%';
			break;
		case 2:
			textHere.style.left = leftPosLandscape[1] + '%';
			break;
		case 3:
			textHere.style.left = leftPosLandscape[2] + '%';
			break;
	}
}
function showText() { // viene settato il testo che viene mostrato
	for(let i = 0; i < texts.length; i++) {
		indicators[i].classList.remove("selected");
		texts[i].classList.remove("shown");
	}
	textIndex++;
	if(textIndex > texts.length) {
		textIndex = 1;
	}
	indicators[textIndex-1].classList.add("selected");
	texts[textIndex-1].classList.add("shown");
	//console.log(contentIndex);
	setPositions();
	timelineTimeout = setTimeout(showText, 11000);
}
function contentClicked(clickedId) { // onclick
	//console.log(clickedId + "° element");
	for(let i = 0; i < texts.length; i++) {
		indicators[i].classList.remove("selected");
		texts[i].classList.remove("shown");
	}
	textIndex = clickedId;
	indicators[textIndex-1].classList.add("selected");
	texts[textIndex-1].classList.add("shown");
	if((window.matchMedia(mediaQueries[0]).matches) || (window.matchMedia(mediaQueries[2]).matches)) {
		textHere.style.left = leftPosPortrait[textIndex - 1] + '%';
	}
	else if(window.matchMedia(mediaQueries[1]).matches) {
		textHere.style.left = leftPosLandscape[textIndex - 1] + '%';
	}
	else {
		textHere.style.left = leftPos[textIndex-1] + '%';
	}
	//console.log(contentIndex);
	clearTimeout(timelineTimeout);
	timelineTimeout = setTimeout(showText, 11000);
}

// -------------------------- Slideshow handler ----------------------------------------

let imgIndex = 0;
let images = document.getElementsByClassName("item");
let skillTimeout;
showSkills();
function setLevel() {
	let lvl = document.getElementById("level");
	switch(imgIndex) {
		case 1:
			lvl.style.height = '45%'; // html
			break;
		case 2:
			lvl.style.height = '40%'; // css
			break;
		case 3:
			lvl.style.height = '35%'; // javascript
			break;
		case 4:
			lvl.style.height = '20%'; // bootstrap
			break;
		case 5:
			lvl.style.height = '40%'; // c++
			break;
		case 6:
			lvl.style.height = '25%'; // java
			break;
		case 7:
			lvl.style.height = '20%'; // php
			break;
		case 8:	
			lvl.style.height = '45%'; // MySql
			break;		
	}
}
function showSkills() {
  	for(let i = 0; i < images.length; i++) {
    	images[i].style.display = "none";
  	}
  	imgIndex++;
  	if(imgIndex > images.length) {
	  	imgIndex = 1; // se fosse minore continuerebbe (superfluo un controllo su questa ipotesi)
	}
  	images[imgIndex-1].style.display = "block";
	//console.log(imgIndex); 
	setLevel();
  	skillTimeout = setTimeout(showSkills, 4000);
}
function showPrevImage() {
	for(let i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}
	imgIndex --;
	if(imgIndex == 0) {
		imgIndex = 8;
	}
	images[imgIndex-1].style.display = "block";
	console.log(imgIndex);
	setLevel();
	clearTimeout(skillTimeout);
  	skillTimeout = setTimeout(showSkills, 4000);
}
function showNextImage() {
  	for(let i = 0; i < images.length; i++) {
    	images[i].style.display = "none";
	}
	imgIndex ++;
	if (imgIndex > images.length) { 
	  	imgIndex = 1;
	}
	images[imgIndex-1].style.display = "block";
	console.log(imgIndex);
	setLevel();
	clearTimeout(skillTimeout);
	skillTimeout = setTimeout(showSkills, 4000);
}