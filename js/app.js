$( document ).ready( function() {
	

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?id=6448311&appid=5a932bb55109527ecdb2d9efa5eb07fd&mode=html&lang=fr"
		
	})
	.done(function (data) {
		$('#affich').append(data);
	})
	.fail(function () {
		console.log("error");
	})
	.always(function () {
		console.log("Complete");
	});








});