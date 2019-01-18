// customize attach file
function formatFileSize(bytes, decimalPoint) {
	if (bytes == 0) return '0 Bytes';
	let k = 1000,
		dm = decimalPoint || 2,
		sizes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'],
		i = Math.floor(Math.log(bytes) / Math.log(k));
	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

var textAttach = $('.attach__text').html();

$('.attach__field').on('change', function() {
	let file = $(this)[0].files[0];

	if (file) {
		$('.attach__file-name').text(file.name + ' ' + formatFileSize(file.size));
		$('.attach__file').addClass('_show');
		$('.attach__text').remove();
	}
});

$('.attach__file-remove').on('click', function() {
	// let text = $(this).closest('.attach__text').html();
	$(this).closest('.attach__file').removeClass('_show');
	$('.attach .respond-form__field').prepend(textAttach);
});

// customize attach file