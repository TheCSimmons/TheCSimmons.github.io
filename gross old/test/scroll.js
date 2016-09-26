jQuery(function(){
	$(window).scroll(function(){
		var position =  $(window).scrollTop();
			//WHEN SCROLL
		if(position > 15){ 

				$('nav').stop().animate({
				'height': '80px'
			});

			$('#navlinks').stop().animate({
				'margin-right': 'auto',
				'margin-left': '140px'
				'margin-top': '-176px'
			});

			//NO SCROLL & START
		}else{

				$('nav').stop().animate({
				'height': '310px'
			});

			$('#navlinks').stop().animate({
				'margin-right': '-25px'
			});

		}
	});

	$(window).trigger('scroll');
});