jQuery(function(){
	$(window).scroll(function(){
		var position =  $(window).scrollTop();

		if ($(window).width() > 1024) {
			//WHEN SCROLL
		if(position > 0){ 

			$('.header').stop().animate({
				'height': '40',
				'duration': '1200'
			});

			$('a').stop().animate({
				'margin-top':'55'
			});

			$('h1').stop().css("display", "none");

			$('.firstsection').stop().animate({
				'height':'55'
			});

			
	}
			//NO SCROLL & START
		else{

			$('.header').stop().animate({
				'height': '310',
				'duration': '1200'
			});

			$('h1').stop().css("display", "block").animate({
				'font-size': '100pt',
				'display':'block'
			});

			$('a').stop().animate({
				'margin-top':'0'
			});

			$('.firstsection').stop().animate({
				'height':'310'
			});



		}
	}
	});


	$(window).trigger('scroll');
});