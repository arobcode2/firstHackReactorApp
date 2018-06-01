$(document).ready(function() {

	$('.setData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		//$('.debug').text(codeSnippetVal);
		let nameVal = $('.name').val();

		localStorage.setItem(nameVal, codeSnippetVal);
		// $('.textArea').val('write code snippet here');
		// $('.name').val('give your snippet a name');

	});

	$('.getData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();
		// let valuesStr = '';
		//var data = nameVal + ' ' + codeSnippetVal;
		for (var i = 0; i < localStorage.length; i++) {
  		$('.debug').append((localStorage.getItem(localStorage.key(i))) + "<br/>");
		}
		// let retrievedData = localStorage.getItem(nameVal);
		// $('.debug').text(retrievedData);
	});
// 
	// $('.textField').on('keyup', function() {
	// 	let textFieldValue = $('.textField').val();
	// 	$('.debug').text(textFieldValue);
	// });


});