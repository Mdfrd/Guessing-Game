const images = document.querySelectorAll(".scrolling-image");

window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	images.forEach((image, index) => {
		const translateY = (scrollPosition - image.offsetTop) * 0.1 + "px";
		const scale = 1 + (scrollPosition - image.offsetTop) / 300;

		image.style.transform = `translateY(${translateY}) scale(${scale})`;

		if (scrollPosition > image.offsetTop + image.offsetHeight) {
			const opacity =
				1 -
				(scrollPosition - (image.offsetTop + image.offsetHeight)) / 500;

			image.style.opacity = opacity < 0 ? 0 : opacity;
		} else {
			image.style.opacity = 1;
		}
	});
});
