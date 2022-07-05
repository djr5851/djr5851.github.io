let slideIndex = new Array(2);
slideIndex[0] = 1;
slideIndex[1] = 1;
slideIndex[2] = 1;
slideIndex[3] = 1;
slideIndex[4] = 1;
slideIndex[5] = 1;
slideIndex[6] = 1;
slideIndex[7] = 1;

window.onload = (e) => {
	showSlides(1, 0);
	showSlides(1, 1);
	showSlides(1, 2);
	showSlides(1, 3);
	showSlides(1, 4);
	showSlides(1, 5);
	showSlides(1, 6);
	showSlides(1, 7);
};

function plusSlides(n, slideShowNum) {
	slideIndex[slideShowNum] = slideIndex[slideShowNum] + n;
	showSlides(slideIndex[slideShowNum], slideShowNum);
	document.querySelector('video').play();
}

function currentSlide(n, slideShowNum) 
{
  slideIndex[slideShowNum] = n;
  showSlides(slideIndex[slideShowNum], slideShowNum);
}

function showSlides(n, slideShowNum) {
	let i;
	let name = "slideshow" + slideShowNum;
	let slides = document.querySelectorAll(`div[name='${name}']`)
	if (n > slides.length) {
		slideIndex[slideShowNum] = 1;
	}
	if (n < 1) {
		slideIndex[slideShowNum] = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex[slideShowNum] - 1].style.display = "block";
}