const scrollingImages = document.querySelectorAll(".scrolling-image");

window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	scrollingImages.forEach((image, index) => {
		const speed = 0.5 * (index + 1);
		const translateX = -scrollPosition * speed + "px";
		image.style.transform = `translateX(${translateX})`;
	});
});
