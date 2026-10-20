var lastScrollPosition = $(window).scrollTop();
$(window).on('load scroll', function(){
    	var windowScrollTop = $(window).scrollTop(),
    	 currScrollPosition = windowScrollTop;
    	// Determine Scrolling
    	if (windowScrollTop <= 0){
        	// At the top
          $('body').removeClass('scrolling scrolling-up scrolling-down');
    	} else if (currScrollPosition < lastScrollPosition) {
        	// Scrolling Up
        	$('body').addClass('scrolling scrolling-up').removeClass('scrolling-down');
    	} else {
        	// Scrolling Down
        	$('body').addClass('scrolling scrolling-down').removeClass('scrolling-up');
    	}
       	lastScrollPosition = currScrollPosition; 
    	return false;
});