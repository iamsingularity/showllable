const setIntersectionObserver = (elements) => {
  
  const intersectionConfig = {
		root: null,
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1.0]
  };

  const myObserver = new IntersectionObserver((entries, observer) => {
		
		if (entries.length === 0) {
			observer.disconnect();
		}

		entries.forEach(entry => {
      const target = entry.target.classList;
      
      if (entry.intersectionRatio > 0) {
				target.add('animate');
			} else {
				target.remove('animate');
			}

		});

	}, intersectionConfig);

	elements.forEach(element => {
		myObserver.observe(element);
  });
  
}

const showllable = () => {
	const elements = document.querySelectorAll('[data-anime]');
  
  if (('IntersectionObserver' in window)) {
    setIntersectionObserver(elements);
	} else {
    elements.forEach(element => {
      element.classList.add('animate')
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