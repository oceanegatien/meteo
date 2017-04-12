$( document ).ready( function() {
	

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?id=6448311&appid=5a932bb55109527ecdb2d9efa5eb07fd&mode=html&lang=fr"
	})
	.done(function (data) {
		$('#affichJour').append(data);
	})
	.fail(function () {
		$('#affichJour').append('<img class="img-responsive " src="http://68.media.tumblr.com/91748c0d0b4489e05a4864e0c583c473/tumblr_mzqakbdhnx1su5t9oo1_400.gif" alt="Loading">').css('font-weight: 200px;')
	})
	.always(function () {
		console.log("Complete");
	});








});