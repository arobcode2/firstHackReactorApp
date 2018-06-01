$(document).ready(function() {

	$('.textField').on('click', function() {
		let textFieldValue = $('.textField').val();
		$('.debug').text(textFieldValue);
	});

});