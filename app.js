$(document).ready(function(){
	$('a[href*="#"]').not('a[href="#"]').click(function(event){
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			if(hash == "#header"){
				window.location.hash = window.location.href.split('#')[0];
			}
			else{
				window.location.hash = hash;
			}
		});
	});

	$('a.nav-link').click(function(){
		$('.navbar-collapse').collapse('hide');
	});

	$('body').scrollspy({target: '.navbar'});

	$(window).on('activate.bs.scrollspy', function(){
		$('p.navbar-corrent').text($('li.nav-item a.active').text());
	})

	$('div#services-row').on('swipeleft', function(){
		$('div.services-col.left.not-active').addClass('right').removeClass('left not-active');
		$('div.services-col.right.not-active').addClass('center').removeClass('right not-active');
		$('div.services-col.center.not-active').addClass('left').removeClass('center not-active');
		$('div.services-col').addClass('not-active');
	});

	$('div#services-row').on('swiperight', function(){
		$('div.services-col.left.not-active').addClass('center').removeClass('left not-active');
		$('div.services-col.right.not-active').addClass('left').removeClass('right not-active');
		$('div.services-col.center.not-active').addClass('right').removeClass('center not-active');
		$('div.services-col').addClass('not-active');
	});

	$('div#why-row').on('swipeleft', function(){
		$('div.why-col.left.not-active').addClass('right').removeClass('left not-active');
		$('div.why-col.right.not-active').addClass('center').removeClass('right not-active');
		$('div.why-col.center.not-active').addClass('left').removeClass('center not-active');
		$('div.why-col').addClass('not-active');
	});

	$('div#why-row').on('swiperight', function(){
		$('div.why-col.left.not-active').addClass('center').removeClass('left not-active');
		$('div.why-col.right.not-active').addClass('left').removeClass('right not-active');
		$('div.why-col.center.not-active').addClass('right').removeClass('center not-active');
		$('div.why-col').addClass('not-active');
	});


	$('[data-toggle="tooltip"]').tooltip();

	$('button[type=submit]').click(function(){
		$('form').addClass('was-validated');
	});
});