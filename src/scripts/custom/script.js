//=include preloader.js

$(function() {

	//=include sliders.js
	//=include popups.js
	//=include aside.js
	//=include filters.js
	//=include rangeSlider.js
	//=include shops.js
	//=include attach-file.js

	$('.phone-mask').mask('8 (999) 999 99 99');

	let vid = document.getElementById('video');

	if (vid) {
		vid.playbackRate = .8;
	}

	let stickyHeader;

	(stickyHeader = function() {
		let $header = $('.header'),
			scroll = $(window).scrollTop();

		if ( scroll > $header.height() + 155 ) {
			$header.addClass('_small _sticky');
		} else {
			$header.removeClass('_small _sticky');
		}
	})();

	$(window).on('scroll', stickyHeader);

	$(function() {
		var header = $(".clearHeader");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 500) {
				header.removeClass('clearHeader').addClass("darkHeader");
			} else {
				header.removeClass("darkHeader").addClass('clearHeader');
			}
		});
	});

	$('.agreement .checkbox__check').on('click', function() {
		let submitBtn = $(this).closest('form').find('button[type="submit"]');

		($(this).prop('checked')) ? submitBtn.prop('disabled', false) : submitBtn.prop('disabled', true);
	});

	$('.custom-scrollbar').customScrollbar({
		skin: 'default-skin'
	});

	// Аккордеон, когда у первого элемента в разметке указан класс '._open', чтобы не триггерить событие на первом элементе
	$('.accordion-list').on('click', '.accordion-list__item-toggle', function(evt) {
		if ($(this).hasClass('_js-open')){
			$(this).toggleClass('_js-open').siblings('.accordion-list__item-dropdown').stop().slideUp(400);
		} else {
			$(evt.delegateTarget).find('.accordion-list__item-toggle').removeClass('_js-open').siblings('.accordion-list__item-dropdown').stop().slideUp(400);
			$(this).addClass('_js-open').siblings('.accordion-list__item-dropdown').stop().slideDown(400);
		}
	});

	// header search form

	(function () {
		var search = $('.header__search'),
			searchBtn = $('.users-menu__search-btn'),
			field = search.find('.search-form__field');
		
		searchBtn.on('click', function() {
			if ($(this).hasClass('_open')) {
				$(this).removeClass('_open');
				search.fadeToggle();
			} else {
				$(this).toggleClass('_js-active');
				search.fadeToggle();
				field.focus();
			}
		});

		$(document).on('click touchstart', function(evt) {
			if (searchBtn.is('._js-active') && !$(evt.target).closest(search).length && !$(evt.target).closest(searchBtn).length) {
				search.fadeOut();
				searchBtn.removeClass('_js-active');
				field.blur();
			}
		});
	})();

///////////////////// Функция анимации письма на странице "jobopening" /////////////////////

	var openPopup = function () {
		$.magnificPopup.open({
			items: {
				src: $('#respondThank'),
				type: 'inline'
			}
		});
	};

	$('.respond-form__submit').on('click', function(evt) {
		evt.preventDefault();

		let respondForm = $(this).closest('.respond-form');

		respondForm.closest('.respond__wrapper').addClass('_sent');
		// setTimeout(openPopup, 3000);
		
		setTimeout(function() {
			console.log(respondForm);
			alert('Отправляю Ваше письмо');

			respondForm.submit();
		}, 2000);
	});


///////////////////// Конец функции анимации письма на странице "jobopening" /////////////////////

	$('.test').on('click', function() {
		$('.test__wrapper').css('background-color', 'red');
	});

///////////////////// Переключение цвета или формы товара в корзине /////////////////////

	$('.goods__tuning').on('click', 'li', function () {
		var currentItem = $(this),
			parentBlock = currentItem.closest('ul'),
			allItems = parentBlock.find('li');

		if(!currentItem.is('._js-active')) {
			allItems.removeClass('_js-active');
			currentItem.addClass('_js-active');
		}
	});

///////////////////// Переключение размера товара в корзине /////////////////////

	$('.goods__size').on('click', '.good__size-text', function () {
		$(this).next('.goods__popup').addClass('_js-open');
	});

	if ($('.cart').length > 0) {
		$(document).on('click touchstart', function (evt) {
			var $popup = $('.goods__popup'),
				$thisPopup = $(evt.target).closest('.goods__popup');

			if($(evt.target).closest($popup).length > 0) {
				if($(evt.target).is('span') && !$(evt.target).is('._disabled') && !$(evt.target).is('._selected')) {
					$thisPopup.siblings('.good__size-text').text(' ' + $(evt.target).text());
					$popup.removeClass('_js-open');
					$thisPopup.find('span').removeClass('_selected');
					$(evt.target).addClass('_selected');
				}
			} else {
				if($popup.is('._js-open') && !$(evt.target).is('.good__size-text')) {
					$popup.removeClass('_js-open');
				}
			}
		});
	}

///////////////////// Переключение табов на странице "Вопросы и ответы" /////////////////////
	$('.faq__wrapper').on('click', '.faq__tab', function (evt) {
		var $container = $(evt.delegateTarget),
			allTabs = $container.find('.faq__tab'),
			allContents = $container.find('.faq__content'),
			$currentTab = $(evt.currentTarget),
			indexCurrentTab = $currentTab.index();

		if (!$currentTab.is('._js-active')) {
			allTabs.removeClass('_js-active');
			$currentTab.addClass('_js-active');
			allContents.removeClass('_js-active');
			allContents.eq(indexCurrentTab).addClass('_js-active');
		}
	});

///////////////////// Подбор размера кольца /////////////////////
    $('.fir-size').keyup(function () {
        const pi = 3.14;
        let number = ($(this).val() / pi).toFixed(1);
        let size = Math.ceil(number*2)/2;

        if(!size == 0) {
            $('.popup__size-result').text(size);
        }
    });

///////////////////// Переключение размера товара в карточке товара /////////////////////
	$('.product__size-list').on('click', 'li', function (evt) {
		if (!$(evt.currentTarget).is('._selected') && !$(evt.currentTarget).is('._disabled')) {
		    $(evt.delegateTarget).find('li').removeClass('_selected');
            $(evt.currentTarget).addClass('_selected');
        }
    });
});