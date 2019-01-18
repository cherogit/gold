// Попап для просмотра сертификата на странице "Награды", по клику на сертификат в слайдере
	$('.certificate__image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

    $('.popup-ask').magnificPopup({
        type: 'inline',
        focus: '.focus',
        callbacks: {
            close: function () {
                setTimeout(function(){
                    $.magnificPopup.open({
                        items: {
                            src: $('#askAQuestionThank'),
                            type: 'inline'
                        }
                    });
                }, 10);
            }
        }
    });

    $('.popup-write').magnificPopup({
        type: 'inline',
        focus: '.focus',
        callbacks: {
            close: function () {
                setTimeout(function(){
                    $.magnificPopup.open({
                        items: {
                            src: $('#writeToUsThank'),
                            type: 'inline'
                        }
                    });
                }, 10);
            }
        }
    });

    $('.popup-call').magnificPopup({
        type: 'inline',
        focus: '.focus',
        callbacks: {
            close: function () {
                setTimeout(function(){
                    $.magnificPopup.open({
                        items: {
                            src: $('#backCallThank'),
                            type: 'inline'
                        }
                    });
                }, 10);
            }
        }
    });

    $('.popup-city').magnificPopup({
        type: 'inline'
    });

    $('.product__size-fit').magnificPopup({
        type: 'inline'
    });
