const projectDetails = document.querySelector(".project-infos");
let projects = document.querySelectorAll(".project");
const targetElements = [
	projectDetails.firstElementChild,
	projectDetails.children[1]
];
const targetLinks = [
	projectDetails.querySelector(".links").firstElementChild,
	projectDetails.querySelector(".links").lastElementChild
];

let projectsArrays = [
	[
		"Sunnyside agency landing page",
		"A perfect test about responsive layouts and images, with a bit of JavaScript for the mobile menu.<br>This was the most challenging project from Frontend Mentor I did so far, because I didn't knew how to handle responsive images with the srcset and sizes attributes of the img tag",
		"https://diopmorfall.github.io/sunnyside-agency-landing-page-main",
		"https://github.com/diopmorfall/sunnyside-agency-landing-page-main"
	],
	[
		"Four card feature section master", 
		"A layout-based project from Frontend Mentor that'll challenge everyone who isn't familiar with responsive and multi-column layouts, just like me when I did it",
		"https://diopmorfall.github.io/four-card-feature-section-master",
		"https://github.com/diopmorfall/four-card-feature-section-master"
	],
	[
		"Order Summary component",
		"A small project for people who are getting started with basic layouts",
		"https://diopmorfall.github.io/order-summary-component",
		"https://github.com/diopmorfall/order-summary-component"
	]
];

let index = 0;
let timeout;
showProjects();

function showProjects(){
	for(let i = 0; i < projects.length; i++){
		projects[i].style.display = 'none';
	}

	index++;
	if(index > projects.length){
		index = 1;
	}

	projects[index - 1].style.display = 'block';
	//console.log(projects[j - 1].children[0].src);
	setDetails(index -1);
	timeout = setTimeout(showProjects, 15000);
	//todo: fadein, show, fadeout, repeat with the next
}

function setDetails(projectIndex){
	for(let i = 0; i < 2; i++){
		targetElements[i].innerHTML = projectsArrays[projectIndex][i];
		targetLinks[i].href = projectsArrays[projectIndex][i+2];
	}
}