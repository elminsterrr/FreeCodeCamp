/*    

      function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    $wikiElem.text('');
    $nytElem.text('');
    $(function () {
        $('#news_post_button').on('click', function () {
            ;
            var n_input = $('#enter-message').val();
        });
    });
}
;
$('#form-container').submit(loadData);

*/

$(function () {
    $('#whiteButtonAdress').on('click', function () {
        var street_input = $('#enter-street').val();
        var city_input = $('#enter-city').val();
        console.log(street_input + ', ' + city_input);  //White - it is only working in console.log. For presentation purpose only.
        
    });
});


    

 
