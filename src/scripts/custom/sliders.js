$('.promo-slider__track').slick({
	infinite: true,
	slidesToShow: 1,
	fade: true,
	nextArrow: $('.promo-slider__next'),
	prevArrow: $('.promo-slider__prev')
}).on('beforeChange', function () {
	console.log('change slide');
});

$('.brands-slider__track').slick({
	infinite: true,
	slidesToShow: 5,
	nextArrow: $('.brands-slider__next'),
	prevArrow: $('.brands-slider__prev')
});

$('.feedback-slider__track').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: false,
	dots: true,
	appendDots: '.slider-wrap__dots',
	fade: true,
	slidesToShow: 1
});

$('.employee-stories__track').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
	nextArrow: $('.employee-stories__slider-next'),
	prevArrow: $('.employee-stories__slider-prev'),
	dots: true,
	appendDots: '.slider-wrap__dots',
	fade: true,
	slidesToShow: 1
});

$('.figurines__list').slick({
	infinite: true,
	autoplaySpeed: 6000,
	nextArrow: $('.figurines__next'),
	prevArrow: $('.figurines__prev'),
	dots: true,
	appendDots: '.figurines__dots',
	fade: true,
	slidesToShow: 1
});

$('.certificate__list').slick({
	infinite: true,
	autoplaySpeed: 6000,
	nextArrow: $('.certificate__next'),
	prevArrow: $('.certificate__prev'),
    dots: false,
	slidesToShow: 3
});

$('.electronic__list').slick({
	infinite: true,
	autoplaySpeed: 6000,
	nextArrow: $('.electronic__next'),
	prevArrow: $('.electronic__prev'),
    dots: false,
	slidesToShow: 3
});

$('.article__image-list').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: true,
    appendDots: '.article__dots',
    fade: true,
    slidesToShow: 1
});

$('.product__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-small'
});
$('.product__slider-small').slick({
    slidesToShow: 6,
    asNavFor: '.product__slider-big',
    dots: false,
    focusOnSelect: true
});