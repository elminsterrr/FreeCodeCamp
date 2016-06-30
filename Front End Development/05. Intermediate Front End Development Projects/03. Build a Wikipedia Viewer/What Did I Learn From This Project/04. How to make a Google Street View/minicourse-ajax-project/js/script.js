function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem = $('#nytimes-articles');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview

  // YOUR CODE GOES HERE!

  $(function whiteFirst() {

    var street_input = $('#enter-street').val();
    //console.log(street_input);
    var city_input = $('#enter-city').val();
    //console.log(city_input);
    console.log(street_input + ", " + city_input);
    
    var firstElement = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
    var secondElement = street_input + ', ' + city_input;
    var thirdElement = '&heading=151.78&pitch=-0.76&key=AIzaSyD6QmGWiFoeHsVdRG0rTfcB6bd_Miqm_x0">';
    var sumOfAllFears = firstElement + secondElement + thirdElement;
    console.log(sumOfAllFears);
    
    $greeting.text('So, you want to live at ' + street_input + ", " + city_input + '?');
    $body.append(sumOfAllFears);

  });

  return false;
};

$('#form-container').submit(loadData);