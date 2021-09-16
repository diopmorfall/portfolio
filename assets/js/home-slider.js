let slider = document.querySelector(".home-slider");
let images = document.querySelectorAll(".item");
let imgIndex = 0;
let timing;
showImages();

function showImages(){
	for(let i = 0; i < images.length; i++){
		images[i].style.display = 'none';
	}

	imgIndex++;
	if(imgIndex > images.length){
		imgIndex = 1;
	}

	images[imgIndex - 1].style.display = 'block';
	//console.log(images[imgIndex - 1].children[0].src);
	timing = setTimeout(showImages, 2500);
	//todo: add some animation classes that'll be added/removed to show fadein/out effects
}
//? image fades-in, fades out and then repeat with the next