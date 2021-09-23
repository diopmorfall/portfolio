var menu = document.querySelector(".menu");
var menuIcons = document.querySelector(".menu-icons").children;
var links = document.querySelectorAll(".menu-link");

function closeMenu(){
	menu.classList.add("menu-fade-out");
	menu.classList.remove("menu-fade-in");
	setTimeout(() => { menu.style.display = 'none'; }, 500);
	menuIcons[1].style.display = 'none';
	menuIcons[0].style.display = 'block';
}

menuIcons[0].addEventListener('click', function(){
	menu.classList.add("menu-fade-in");
	menu.classList.remove("menu-fade-out");
	menu.style.display = 'flex';
	menuIcons[0].style.display = 'none';
	menuIcons[1].style.display = 'block';
});

menuIcons[1].addEventListener('click', closeMenu);
for(let i = 0; i < links.length; i++){
	links[i].addEventListener('click', closeMenu);
}
