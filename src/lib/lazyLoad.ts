const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0 // Percentage of the target's visibility at which the observer's callback should be executed.
};

export const lazyLoad = (img: HTMLImageElement, src: string) => {
	// Function to make the image fully visible
	const loaded = () => {
		img.style.opacity = '1';
	};
	// Create an IntersectionObserver to check when the image becomes visible
	const observer = new IntersectionObserver((entries) => {
		// Check if the image is intersecting with the viewport
		if (entries[0].isIntersecting) {
			// Set the image source to start loading the image
			img.src = src;

			// If the image has already been loaded, make it fully visible
			if (img.complete) {
				loaded();
			} else {
				// Add an event listener to make the image fully visible once it has finished loading
				img.addEventListener('load', loaded);
			}
		}
	}, options);
	// Start observing the image
	observer.observe(img);

	// Return an object with a destroy method to remove the load event listener
	return {
		destroy() {
			img.removeEventListener('load', loaded);
		}
	};
};
