$(document).ready(function() {

	$('.setData').on('click', function() {
		let textAreaValue = $('.textArea').val();
		$('.debug').text(textAreaValue);

		localStorage.setItem('myFormTextData', textAreaValue);
		$('.textField').val('');

	});

	$('.getData').on('click', function() {
		let retrievedData = localStorage.getItem('myFormTextData');
		$('.debug').text(retrievedData);
	});

	// $('.textField').on('keyup', function() {
	// 	let textFieldValue = $('.textField').val();
	// 	$('.debug').text(textFieldValue);
	// });


});