const showllable = () => {
	const elements = document.querySelectorAll('[data-anime]');

	const intersectionConfig = {
		root: null,
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1.0]
	};

	const myObserver = new IntersectionObserver((entries, observer) => {
		
		if (entries.length === 0) {
			observer.disconnect();
		}

		entries.forEach(entry => {
			if (entry.intersectionRatio > 0) {
				entry.target.classList.add('animate');
			} else {
				entry.target.classList.remove('animate');
			}

		});

	}, intersectionConfig);


	elements.forEach(element => {
		myObserver.observe(element);
	});
	
}

export default showllable;