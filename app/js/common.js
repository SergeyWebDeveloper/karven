$(function(){
	
	$('.inputmask').inputmask('+7(999)-999-99-99');

	$('.header__seearch').click(function(){
		$(this).toggleClass('active');
		$('.header__search').stop().toggle(300);
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
		margin: 20,
		mouseDrag: false,
		responsiveClass: true,
		responsive:{
			0: {
				items: 1,
				mouseDrag: true,
				stagePadding: 30,
				margin: 50
			},
			490: {
				items: 2,
				mouseDrag: true
			},
			720: {
				items: 3,
				mouseDrag: true
			},
			1000: {
				items: 4
			}
		}
	});

	$('.anchor').click(function(){
		$('body,html').animate({
			scrollTop: 0
		},500);
	});


	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$('.anchor').fadeIn();
		}
		else{
			$('.anchor').fadeOut();
		}
	});

	$('.close__menu').click(function(){
		$(this).closest('.header__mobile__menu').stop().slideToggle();
	});

	$('.mobile__burger__menu').click(function(e){
		e.preventDefault();
		$(this).closest('.header__menu__list').siblings('.header__mobile__menu').stop().slideToggle();
	});

	$('.see__more a').click(function(e){
		e.preventDefault();
		$(this).hide().parent().siblings('.hidden__text').fadeIn();
	});


});