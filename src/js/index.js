const setPropForElementDelay = (elementsWithDelay) => {
	console.log('elementsWithDelay', elementsWithDelay)
	if (setPropForElementDelay.length === 0) {
		return;
	} else {
		elementsWithDelay.forEach((elements) => {
			if (elements.length === 0) {
				return;
			} else {
				elements.forEach((element, index) => {
					element.style.transitionDelay = `${index * 0.15}s`;
				});
			}
		});

	}
}

const dynamicQuery = () => {
	const positions = ['top', 'right', 'bottom', 'left'];
	return positions.map(position => 
		document.querySelectorAll(`[data-anime="${position}-delay"]`))
}

const setIntersectionObserver = (elements, intersectionConfig) => {

  const myObserver = new IntersectionObserver((entries, observer) => {
		
		if (entries.length === 0) {
			observer.disconnect();
		}

		entries.forEach(entry => {
      const target = entry.target.classList;
      
      if (entry.intersectionRatio > 0) {
				target.add('-animator');
			} else {
				target.remove('-animator');
			}

		});

	}, intersectionConfig);

	elements.forEach(element => {
		myObserver.observe(element);
  });
}

const showllable = (intersectionConfig = { root: null, threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1.0] }) => {
	
	const elements = document.querySelectorAll('[data-anime]');


	let elementsWithDelay = dynamicQuery();

  if (('IntersectionObserver' in window)) {
		setPropForElementDelay(elementsWithDelay);
    setIntersectionObserver(elements, intersectionConfig);
	} else {
    elements.forEach(element => {
      element.classList.add('-animator')
    });
  }
	
}

if (typeof window !== 'undefined' && window) {
  if (typeof module === 'object' && module.exports) {
	  module.exports = showllable;
	} else {
	  window.showlllable = showllable;
  }
}