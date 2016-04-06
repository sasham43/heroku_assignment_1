$(function(){
  console.log("jquery loaded");

  var cityUrl = 'Minneapolis';
  var stateUrl = 'MN';

  showWeatherData();

  $("#newLocation").on('click', function(){
    cityUrl = $("#newCity").val();
    stateUrl = $("#newState").val();
    showWeatherData();
  });

  function showWeatherData(){
    var apiKey = '945023da3da01614';
    var urlBase = 'https://api.wunderground.com/api/';
    var urlAdditions = '/geolookup/conditions/q/'+ stateUrl + '/' + cityUrl + '.json'
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

      $("#city").html(city);
      $("#state").html(state);
      $("#temp").html(temp);
      $("#icon").html(iconElement);



      // $("body").append()
    });
  }
})
