///////////////////// Фиксируем блок с социальнми кнопками на страницу одной новости /////////////////////

	if ($('.aside').length > 0) {
		$(window).scroll(function(){
			let aside = $('.aside');

			if ($(window).scrollTop() > 61 + $('.article__content').height()) {
				aside.removeClass('_sticky');
				aside.addClass('_bottom');
			} else if ($(window).scrollTop() > 470) {
				aside.addClass('_sticky');
				aside.removeClass('_bottom');
			} else {
				aside.removeClass('_sticky');
			}
		})
	}


///////////////////// Фиксируем боковую панель в корзине /////////////////////

	if ($('.cart').length > 0) {
		$(window).scroll(function(){
			let aside = $('.cart__aside');

			if ($(window).scrollTop() > 250 + $('.cart__content').height() - aside.height()) {
				aside.removeClass('_sticky');
				aside.addClass('_bottom');
			} else if ($(window).scrollTop() > 250) {
				aside.addClass('_sticky');
				aside.removeClass('_bottom');
			} else {
				aside.removeClass('_sticky');
			}
		})
	}