$(function(){
  console.log("jquery loaded");

  var apiKey = '945023da3da01614';
  var urlBase = 'https://api.wunderground.com/api/';
  var urlAdditions = '/geolookup/conditions/q/MN/Minneapolis.json'
  var fullUrl = urlBase + apiKey + urlAdditions;

  $.ajax({
    url: fullUrl,
    type: 'GET',
    data: 'json'
  }).done(function(response){
    console.log(response);
    var city = response.location.city;
    var state = response.location.state;
    var temp = response.current_observation.temp_f;

    var iconUrl = response.current_observation.icon_url;
    var iconElement = '<img src=\"' + iconUrl + '\"/>';

    $("#city").append(city);
    $("#state").append(state);
    $("#temp").append(temp);
    $("#icon").append(iconElement);

    // $("body").append()
  });
})
