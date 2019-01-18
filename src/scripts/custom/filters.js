$('.dropdown-filter').on('click', '.dropdown-filter__btn', function(evt) {

	let $allFilters = $('.dropdown-filter'),
		$currentFilter = $(evt.currentTarget).closest('.dropdown-filter');

	if (!$currentFilter.is('._js-active')) {
		$allFilters.removeClass('_js-active');
		$currentFilter.addClass('_js-active');
	} else {
		$currentFilter.removeClass('_js-active');
	}
});

$(document).on('click touchstart', function(evt) {
	if (!$(evt.target).closest('.dropdown-filter').length) {
		$('.dropdown-filter').removeClass('_js-active');
	}

	if (!$(evt.target).closest('.sorting-select').length) {
		$('.sorting-select__selected').removeClass('_js-active');
		$('.sorting-select__list').removeClass('_js-open');
	}
});

$('.dropdown-list__item input[type="radio"]').on('change', function() {
	let text = $(this).closest('.dropdown-list__item').find('span').text(),
		btnName = $(this).closest('.dropdown-filter').find('.dropdown-filter__btn-name');

	btnName.fadeOut(100, function() {
		$(this).text(text);
	}).fadeIn(200);
});

$('.sorting-select__selected').on('click', function() {
	$(this).toggleClass('_js-active');
	$(this).closest('.sorting-select').find('.sorting-select__list').toggleClass('_js-open');
});