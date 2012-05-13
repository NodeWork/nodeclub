$(document).ready(function() {
	$('#search_form').submit(function(e) {
		e.preventDefault();
		search();	
	});
	function search() {
		var q = document.getElementById('q');
		if (q.value != '') {
			var hostname = window.location.hostname;
			var url = 'http://www.google.com/search?q=site:' + hostname + '%20';
			window.open(url + q.value, '_blank');
			return false;
		} else {
			return false;
		}		
	}	
	var $wrapper = $('#wrapper');
	$('.topic_content a,.reply_content a').attr('target', '_blank');
});
