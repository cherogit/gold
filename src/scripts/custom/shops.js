var generatorShopsList = function(name, time, address, phone, lat, lng) {
	var shopHtml =
		'<li class="shop" data-lat="' + lat + '" data-lng="' + lng + '">' +
		'<p class="shop__name">' + name + '</p>' +
		'<p class="shop__time">' + time + '</p>' +
		'<p class="shop__address">' + address + '</p>' +
		'<a class="shop__tel" href="tel:+78908898776">' + phone +
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.9 28.9"><path d="M5.9 1H6a4.4 4.4 0 0 1 3.1 2c3 3.8 1.7 5.2 0 6.8L9 10c-.3.3-.8 1.5 3.9 6a25.6 25.6 0 0 0 3.8 3.3 4.1 4.1 0 0 0 1.8.8.6.6 0 0 0 .4-.2l.3-.3c1-.9 1.7-1.7 3-1.7 1 0 2.1.5 3.8 1.8a4.4 4.4 0 0 1 2 3.1c0 1.5-1.2 2.7-2.2 3.7l-.6.5a3.5 3.5 0 0 1-2.5.8 11.5 11.5 0 0 1-4-.8 29.7 29.7 0 0 1-10-6.8 29.8 29.8 0 0 1-6.8-10c-1.1-3-1.1-5.4 0-6.5l.5-.5c1-1 2.1-2.2 3.6-2.2m0-1C4 0 2.7 1.4 1.6 2.5l-.5.5C-.3 4.4-.4 7.2 1 10.6A30.7 30.7 0 0 0 8 20.9 30.7 30.7 0 0 0 18.3 28a12.4 12.4 0 0 0 4.3.9 4.5 4.5 0 0 0 3.2-1.1l.5-.4c1.2-1.2 2.6-2.6 2.6-4.5a5.3 5.3 0 0 0-2.4-3.9c-1.8-1.4-3.2-2-4.4-2-1.7 0-2.8 1-3.7 2l-.1.1a3.9 3.9 0 0 1-1.2-.5 24.5 24.5 0 0 1-3.6-3.2c-3.2-3.1-3.7-4.4-3.7-4.8v-.1c2-2 3.4-4 0-8.1A5.3 5.3 0 0 0 6 0z"/></svg>' +
		'</a>' +
		'</li>';

	$('.shops__list').append(shopHtml);
	// return console.log(name, time, address, phone);
}

$.getJSON('./assets/source/shops.json')
	.done(function(data) {
		var cityCentre = data.cityCentre,
			shops = data.shops;

		// console.log(cityCentre);

		for (var i in shops) {
			var shop = shops[i],
				name = shop.name,
				time = shop.operatingMode,
				address = shop.address,
				phone = shop.phone,
				lat = shop.lat,
				lng = shop.lng;

			generatorShopsList(name, time, address, phone, lat, lng);
		}
	});



// Переключение вида список/карта

// Футкция меняет активное состояние кнопок и контента. В index передаем 1 - список, 2 - карта
// Создал отдельную функцию чтоб можно было ее вызывать не полько понажатию на кнопки, но может по клику на другие объекты
var changeView = function (index) {
	var allButtons = $('.shops__buttons button');
	var allContentItems = $('.shops__content .shops__content-item');

	allButtons.removeClass('_js-active');
	allContentItems.removeClass('_js-active');

	$(allButtons[index]).addClass('_js-active');
	$(allContentItems[index]).addClass('_js-active');
};

// Кликаем по кнопкам "Списком" ~ "На карте"
$('.shops__buttons').on('click', 'button', function (evt) {
	var indexCurrentButton = $(evt.currentTarget).index();

	if(!$(evt.currentTarget).is('._js-active')) {
		changeView(indexCurrentButton);
	}
});

// Подключение карты
if ($('.shops__map').length > 0) {

	ymaps.ready(mapInit);

	function mapInit() {
		var mapDom = $('#map');
		var zoomControl = new ymaps.control.ZoomControl({
			options: {
				size: "small",
				position: {
					right: 15,
					top: 50
				}
			}
		});
		var myMap = new ymaps.Map('map', {
			// Географические координаты центра отображаемой карты.
			center: [mapDom.data('lat'), mapDom.data('lng')],
			// Масштаб.
			zoom: 11,
			controls: []
		});

		myMap.behaviors.disable('scrollZoom');

		// Создание метки
		$.getJSON('./assets/source/shops.json')
			.done(function(data) {
				var cityCentre = data.cityCentre,
					shops = data.shops;

				for (var i in shops) {
					var elem = shops[i],
						address = elem.address,
						name = elem.name,
						time = elem.operatingMode,
						telHref = elem.phone,
						tel = elem.phone,
						html  = '<div class="shops__popup">' +
							'<p class="shops__popup-name">' + name + '</p>' +
							'<p class="shops__popup-line"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.2 20.6"><path d="M6.9 9h.5v11.6h-.5z"/><path d="M14.2 3.8A4 4 0 0 0 10.3 0a3.8 3.8 0 0 0-3.2 1.8A3.7 3.7 0 0 0 3.9 0 4 4 0 0 0 0 3.8a4 4 0 0 0 .1 1.4 6.1 6.1 0 0 0 2 3.1l5 4.3 5-4.3a6.1 6.1 0 0 0 2-3.1 4 4 0 0 0 0-1.4z"/></svg> <span>' + address + '</span> </p>' +
							'<p class="shops__popup-line"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm0 19.3a9.3 9.3 0 1 1 9.3-9.3 9.3 9.3 0 0 1-9.3 9.3z"/><path d="M9.8 3h.8v8h-.8z"/><path d="M10.6 10v.9h-8V10z"/></svg> <span>' + time + '</span> </p>'+
							'<p class="shops__popup-line"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.9 28.9"><path d="M5.9 1H6a4.4 4.4 0 0 1 3.1 2c3 3.8 1.7 5.2 0 6.8L9 10c-.3.3-.8 1.5 3.9 6a25.6 25.6 0 0 0 3.8 3.3 4.1 4.1 0 0 0 1.8.8.6.6 0 0 0 .4-.2l.3-.3c1-.9 1.7-1.7 3-1.7 1 0 2.1.5 3.8 1.8a4.4 4.4 0 0 1 2 3.1c0 1.5-1.2 2.7-2.2 3.7l-.6.5a3.5 3.5 0 0 1-2.5.8 11.5 11.5 0 0 1-4-.8 29.7 29.7 0 0 1-10-6.8 29.8 29.8 0 0 1-6.8-10c-1.1-3-1.1-5.4 0-6.5l.5-.5c1-1 2.1-2.2 3.6-2.2m0-1C4 0 2.7 1.4 1.6 2.5l-.5.5C-.3 4.4-.4 7.2 1 10.6A30.7 30.7 0 0 0 8 20.9 30.7 30.7 0 0 0 18.3 28a12.4 12.4 0 0 0 4.3.9 4.5 4.5 0 0 0 3.2-1.1l.5-.4c1.2-1.2 2.6-2.6 2.6-4.5a5.3 5.3 0 0 0-2.4-3.9c-1.8-1.4-3.2-2-4.4-2-1.7 0-2.8 1-3.7 2l-.1.1a3.9 3.9 0 0 1-1.2-.5 24.5 24.5 0 0 1-3.6-3.2c-3.2-3.1-3.7-4.4-3.7-4.8v-.1c2-2 3.4-4 0-8.1A5.3 5.3 0 0 0 6 0z"/></svg> <a href="tel:' + telHref + '">' + tel + '</a> </p>'+
							'</div>';

					var myPlacemark = new ymaps.Placemark(
						[
							elem.lat,
							elem.lng
						], {
							balloonContent: html,
							hintContent: ''
						}, {
							iconLayout: 'default#image',
							shopTime: 'sdf',
							iconImageHref: './assets/icon/mark.svg',
							iconImageSize: [36, 36],
							iconImageOffset: [-18, -36]
						});
					myMap.geoObjects.add(myPlacemark);
				}
				myMap.setCenter(cityCentre);
			});

		myMap.controls.add(zoomControl);
	}
}
