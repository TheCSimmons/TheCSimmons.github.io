jQuery(function(){
	$(window).scroll(function(){
		var position =  $(window).scrollTop();

		if ($(window).width() > 1000) {
			//WHEN SCROLL
		if(position > 1){ 

			$('.header').stop().animate({
				'height': '40'
			});

			$('a').stop().animate({
				'margin-top':'55'
			});

			$('h1').stop().css("display", "none");

			
	}
			//NO SCROLL & START
		else{

			$('.header').stop().animate({
				'height': '310'
			});

			$('h1').stop().css("display", "block").animate({
				'font-size': '100pt',
				'display':'block'
			});

			$('a').stop().animate({
				'margin-top':'0'
			});



		}
	}
	});


	$(window).trigger('scroll');
});