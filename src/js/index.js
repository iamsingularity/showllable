function showllable() {
  var debounce = function(func, wait, immediate) {
    var timeout
    
    return function(arguments) {
      var context = this
      
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, arguments)
      }
      
      var callNow = immediate && !timeout
      
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      
      if (callNow) func.apply(context, arguments)
    }
  }
   
  var target = document.querySelectorAll('[data-anime]');
  var animationClass = 'animate';
   
  function animeScroll() {
    var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    
    target.forEach(function() {
      if(windowTop > element.offsetTop) {
        element.classList.add(animationClass, element)
      } else {
        element.classList.remove(animationClass, element)
      }
    });
  }
   
  animeScroll();
   
  var handleScroll = debounce(animeScroll, 50);
   
  if(target.length) {
    window.addEventListener('scroll', handleScroll);
  }
}

if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  	module.exports = showllable;
	} else {
	    window.showllable = showllable;
	}
}