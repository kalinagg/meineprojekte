$( document ).ready( function () {
	
	$('.acc').click( function () {
		$(this).addClass('acc-open');
		$(this).siblings().removeClass('acc-open');			
	});
	
});