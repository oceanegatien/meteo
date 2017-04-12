$( document ).ready( function() {
	

	var ajax = $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?id=6448311&appid=5a932bb55109527ecdb2d9efa5eb07fd"
	
	})
	.done(function (data) {
		return data;
	})
	.fail(function () {
		console.log("error");
	})
	.always(function () {
		console.log("Complete");
	});












});