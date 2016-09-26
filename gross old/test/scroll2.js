jQuery(function(){
	$(window).scroll(function(){
		var position =  $(window).scrollTop();
			//WHEN SCROLL
		if(position > 15){ 

			$('nav').stop().animate({
				'height': '80'
			});

			$('.navlinks').stop().animate({
				'margin-right': 'auto',
				'margin-left': '140',
				'margin-top': '-176'
			});

			$('a').stop().animate({
				'font-size': '20pt'
			});

			$('.logosection').stop().animate({
				'display':'none',

			});

			$('.headertext').stop().animate({
				'display': 'none'
			});

			$('.logo').stop().animate({
				'width': '50',
				'vertical-align': 'left',
				'margin-right': 'auto',
				'margin-left': '50'
			});

			//NO SCROLL & START
		}else{

			$('nav').stop().animate({
				'height': '310'
			});

			$('.navlinks').stop().animate({
				'margin-right': '-25'
			});

			$('a').stop().animate({
				'font-size': '16pt'
			});

			$('.logosection').stop().animate({
				'text-align': 'center'
			});

			$('.headertext').stop().animate({
				'display': 'inline-block'
			});

			$('.logo').stop().animate({
				'width': '65',
				'vertical-align': 'middle',
				'margin-right': '-80'
			});

		}
	});

	$(window).trigger('scroll');
});