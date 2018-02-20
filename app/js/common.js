$(function(){
	
	$('.inputmask').inputmask('+7(999)-999-99-99');

	$('.header__seearch').click(function(){
		$(this).toggleClass('active');
		$('.header__search').toggle(300);
	});

	$('.slider__main__wrapper').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<span class="icon-arr-left"></span>','<span class="icon-arr-right"></span>']
	});

	$('.novelties__wrapper').owlCarousel({
		items: 4,
		loop: true,
		margin: 20
	});

});