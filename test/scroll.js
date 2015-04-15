jQuery(function(){
	$(window).scroll(function(){
		var position =  $(window).scrollTop();
			//WHEN SCROLL
		if(position > 25){ 
			$('#headlogo').stop().animate({
				'width': '100',
			});

			$('nav a').stop().animate({
				'font-size':'20px'
			});
			//NO SCROLL & START
		}else{
			$('#headlogo').stop().animate({
				width: 150,
			});

			$('nav a').stop().animate({
				'font-size':'35px'
			});
		}
	});

	$(window).trigger('scroll');
});