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
  		$('.snippetDisplay').append((localStorage.getItem(localStorage.key(i))) + "<br/>");
		}
	});

	$('.getDataByName').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		$('.snippetDisplay').html('');

		for (var i = 0; i < localStorage.length; i++) {
  		if (localStorage.key(i) === nameVal) {
  			$('.snippetDisplay').append((localStorage.getItem(localStorage.key(i))) + "<br/>");
  		}
		}
	});

	$('.removeData').on('click', function() {
		let codeSnippetVal = $('.textArea').val();
		let nameVal = $('.name').val();

		for (var i = 0; i < localStorage.length; i++) {
  		if (localStorage.key(i) === nameVal) {
  			localStorage.removeItem(localStorage.key(i));
  		}
		}
	});

});