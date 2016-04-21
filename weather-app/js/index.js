$( document ).ready(function() {
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var lat = crd.latitude;
  var long = crd.longitude;
  var url =
'https://api.apixu.com/v1/current.json?key=46037b6e019f4684bf5194728162104&q='+lat+','+long;
// put ajax call in here later..
  $.ajax({url: url, 
          success: function(result){
        $("#name").text(" " + result.location.name);
        $("#region").text(" " + result.location.region);
        $("#country").text(" " + result.location.country);
        $("#time").text(" " + result.location.localtime);
            $("#temp").text(" " + result.current.temp_c +" ℃");
            $('#switch').click(function(){
              $("#temp").text(" " + result.current.temp_f + " ℉");
            });
            $('#reload').click(function(){
              $("#temp").text(" " + result.current.temp_c  +" ℃");
            });
        
        $("#condition").text(" " + result.current.condition.text);
        $('#title').prepend('<img src="' + result.current.condition.icon + '" />')
    }});
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


navigator.geolocation.getCurrentPosition(success, error, options)
 
});