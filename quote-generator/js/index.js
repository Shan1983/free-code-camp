$(document).ready(function() {
  if ($('#new-quote').is(':empty')){
    $('#new-quote').text('Click New Quote to begin');
}
  $('#next').click(function() {
    $.ajax({
      headers: {
        "X-Mashape-Key": "3C0BxofjgpmshmA3oEcb3cRtnPQXp1y9cK8jsnrdSuemD2rDnl"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: 'POST',
      dataType: 'json',
      success: function(api) {
        $('#new-quote').text('"' + api.quote + '"');
        $('#new-author').text('-   "' + api.author + '"');
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + api.quote + '-' + api.author);
      }
    });
  });
});