$(document).ready(function(){
  $('#searched').hide();
  $('#result').hide();
  
  // add wikipedia search api below
  // remober to hide tmp and show searched 
  // and result
  
  $('#search-it').click(function(){
    var query = $('#search').val();
    $('#searched').show();
    $('#tmp').hide();
    $('#search-item').text(query);
    
    var url = 
    'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+query;
    var jcallback = '&callback=JSON_CALLBACK';
    
    var simple_url = 'https://en.wikipedia.org/wiki/'
    // use query to access wikipedia api  
    $.ajax( {
    url: url+jcallback,
    dataType: 'jsonp',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
      var info = data.query.pages;
       $('#result').show();

      $.each(info, function(k, v) {
        
          $('#item').append('<div id="result"><h3 class="search-term">'+v.title+'</h3><h4 class="" id=""><a id="url-link" target="_blank" href="'+simple_url+v.title+'">'+simple_url+v.title+'</a></h4><h4 id="bio">'+v.extract+'</h4></div>'); 
});
    }
    });
  });
  
  // handle the random click
  $('#random-it').click(function(){
   window.open("https://en.wikipedia.org/wiki/Special:Random");; 
  });
  
  
});