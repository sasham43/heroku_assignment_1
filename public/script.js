$(function(){
  console.log("jquery loaded");

  var apiKey = '945023da3da01614';
  var urlBase = 'https://api.wunderground.com/api/';
  var urlAdditions = '/geolookup/conditions/q/IA/Cedar_Rapids.json'
  var fullUrl = urlBase + apiKey + urlAdditions;

  $.ajax({
    url: fullUrl,
    type: 'GET',
    data: 'json'
  }).done(function(response){
    console.log(response);
    // $("body").append()
  });
})
