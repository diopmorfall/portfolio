//todo: let/const elements that I need
//todo: menu handler
//todo: home slideshow
//todo: project and details slideshow
	//todo: make a basic slideshow function

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

// -------------------------- Slideshow handler ----------------------------------------

let imgIndex = 0;
let images = document.getElementsByClassName("item");
let skillTimeout;
showSkills();

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