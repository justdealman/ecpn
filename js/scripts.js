function slider(t) {
	t.find('.container').empty();
	t.find('.prev, .next, .pagination').remove();
	t.find('.container').html(t.find('.temp').html());
	t.find('.container, .container > div').width($('.wrapper').width());
	t.slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 500,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500,
	});
	t.bind('swipeleft', function() {
		t.find('.next').trigger('click');
	});
	t.bind('swiperight', function() {
		t.find('.prev').trigger('click');
	});
}
$(function() {
	slider($('.slider-b'));
	$('.img-bg').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	$('.banner-l li h5').each(function() {
		$(this).css({
			'margin-top': -$(this).outerHeight()/2+'px'
		});
	});
	$('.carousel').each(function() {
		$(this).find('ul').jcarousel({
			scroll: 3,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$(this).find('.jcarousel-container').on('swipeleft', function() {
			$(this).find('.jcarousel-next').trigger('click');
		});
		$(this).find('.jcarousel-container').on('swiperight', function() {
			$(this).find('.jcarousel-prev').trigger('click');
		});
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(500);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < $(window).scrollTop()+40 ) {
			h = $(window).scrollTop()+20;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(500);
	});
	$('.fade, .modal .close').on('click', function(e) {
		e.preventDefault();
		$('.fade, .modal').stop(true,true).fadeOut(250);
	});
	$('a.zoom').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});