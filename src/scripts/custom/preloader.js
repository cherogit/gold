$(window).on('load', function() {
	setTimeout(function(){
		$('.preloader').fadeOut('slow', function() {
			$(this).remove();
		});
	}, 0);
});