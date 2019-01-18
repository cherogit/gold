$('.range-slider__line').each(function() {
	var parent = $(this).closest('.range-slider');

	$(this).slider({
		range: true,
		min: parent.find(".range-slider__field._min").data('min'),
		max: parent.find(".range-slider__field._max").data('max'),
		values: [ parent.find(".range-slider__field._min").val(), parent.find(".range-slider__field._max").val() ],
		slide: function( event, ui ) {
			parent.find(".range-slider__field._min").val( ui.values[ 0 ] );
			parent.find(".range-slider__field._max").val( ui.values[ 1 ] );
		}
	});

	parent.find(".range-slider__field._min").on('keyup change', function() {
		parent.find('.range-slider__line').slider('values', 0, $(this).val());
	});
	parent.find(".range-slider__field._max").on('keyup change', function() {
		parent.find('.range-slider__line').slider('values', 1 ,$(this).val());
	});
});

