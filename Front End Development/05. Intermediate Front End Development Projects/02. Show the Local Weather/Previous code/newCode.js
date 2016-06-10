

var identApi = 'dj0yJmk9WVN4bUNNSkhrZHJnJmQ9WVdrOVluQTRXRlJ2TjJrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1iZg--';	// Your Yahoo Application ID
var stopnie = 'c';	// c for celsius, f for fahrenheit

function locationSuccess(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	// Yahoo's PlaceFinder API http://developer.yahoo.com/geo/placefinder/
	// We are passing the R gflag for reverse geocoding (coordinates to place name)

	var geoAPI = 'http://where.yahooapis.com/geocode?location='+lat+','+lon+'&flags=J&gflags=R&appid='+identApi;

	// Forming the query for Yahoo's weather forecasting API with YQL
	// http://developer.yahoo.com/weather/

	var wsql = 'select * from weather.forecast where woeid=WID and u="'+stopnie+'"',
		weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(wsql)+'&format=json&callback=?',
		code, city, results, woeid;

	// Issue a cross-domain AJAX request (CORS) to the GEO service.
	// Not supported in Opera and IE.

	$.getJSON(geoAPI, function(r){

		if(r.ResultSet.Found == 1){

			results = r.ResultSet.Results;
			city = results[0].city;
			code = results[0].statecode || results[0].countrycode;

			// This is the city identifier for the weather API
			woeid = results[0].woeid;

			// Make a weather API request (it is JSONP, so CORS is not an issue):
			$.getJSON(weatherYQL.replace('WID',woeid), function(r){

				if(r.query.count == 1){

					// Create the weather items in the #scroller UL

					var item = r.query.results.channel.item.condition;
					addWeather(item.code, "Now", item.text + ' <b>'+item.temp+'°'+stopnie+'</b>');

					for (var i=0;i<2;i++){
						item = r.query.results.channel.item.forecast[i];
						addWeather(
							item.code,
							item.day +' <b>'+item.date.replace('\d+$','')+'</b>',
							item.text + ' <b>'+item.low+'°'+stopnie+' / '+item.high+'°'+stopnie+'</b>'
						);
					}

					// Add the location to the page
					location.html(city+', <b>'+code+'</b>');

					weatherDiv.addClass('loaded');

					// Set the slider to the first slide
					showSlide(0);

				}
				else {
					showError("Error retrieving weather data!");
				}
			});

		}

	}).error(function(){
		showError("Your browser does not support CORS requests!");
	});

}