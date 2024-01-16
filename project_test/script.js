const images = document.querySelectorAll(".scrolling-image");

window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;
	const firstImage = images[0];
	const secondImage = images[1];

	const translateY = (scrollPosition - firstImage.offsetTop) * 0.01 + "px";
	const scale = 1 + (scrollPosition - firstImage.offsetTop) / 200;

	firstImage.style.transform = `translateY(${translateY}) scale(${scale})`;

	if (scrollPosition > firstImage.offsetTop + firstImage.offsetHeight) {
		const opacity =
			1 -
			(scrollPosition -
				(firstImage.offsetTop + firstImage.offsetHeight)) /
				500;

		firstImage.style.opacity = opacity < 0 ? 0 : opacity;
		secondImage.style.opacity =
			(scrollPosition -
				(firstImage.offsetTop + firstImage.offsetHeight)) /
			500;
	} else {
		firstImage.style.opacity = 1;
		secondImage.style.opacity = 0;
	}
});
