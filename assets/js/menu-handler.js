var menu = document.querySelector(".mobile-menu");
var openMenuIcon = document.querySelector(".menu-icons").children[0];
var closeMenuIcon = document.querySelector(".menu-icons").children[1];
var links = document.querySelectorAll(".menu-link");

function closeMenu(){
	menu.classList.add("menu-fade-out");
	menu.classList.remove("menu-fade-in");
	setTimeout(() => { menu.style.display = 'none'; }, 500);
	closeMenuIcon.style.display = 'none';
	openMenuIcon.style.display = 'block';
}

openMenuIcon.addEventListener('click', function(){
	menu.classList.add("menu-fade-in");
	menu.classList.remove("menu-fade-out");
	menu.style.display = 'flex';
	openMenuIcon.style.display = 'none';
	closeMenuIcon.style.display = 'block';
});

closeMenuIcon.addEventListener('click', closeMenu);
for(let i = 0; i < links.length; i++){
	links[i].addEventListener('click', closeMenu);
}