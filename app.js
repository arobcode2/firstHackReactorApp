$(document).ready(function() {

	$('.setData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		localStorage.setItem(nameVal, codeSnippetVal);
		$('.textArea').val('');
		$('.name').val('');
	});

	$('.getData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		$('.snippetDisplay').html('');

		for (var i = 0; i < localStorage.length; i++) {
  		$('.snippetDisplay').append('<li>' + '<span>' + (localStorage.getItem(localStorage.key(i))) + '</span>' + '</li>');
		}
	});

	$('.getDataByName').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		$('.snippetDisplay').html('');

		for (var i = 0; i < localStorage.length; i++) {
  		if (localStorage.key(i) === nameVal) {
  			$('.snippetDisplay').append('<li>' + '<span>' + (localStorage.getItem(localStorage.key(i))) + '</span>' + '</li>');
  		}
		}
		$('.textArea').val('');
		$('.name').val('');
	});

	$('.removeData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		for (var i = 0; i < localStorage.length; i++) {
  		if (localStorage.key(i) === nameVal) {
  			localStorage.removeItem(localStorage.key(i));
  		}
		}
		$('.textArea').val('');
		$('.name').val('');
	});

});