function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $nytHeaderElem = $('#nytimes-header');
  var $nytElem = $('#nytimes-articles');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  
  // YOUR CODE GOES HERE!

  $(function whiteFirst() {

    var street_input = $('#enter-street').val();
    var city_input = $('#enter-city').val();
    
    console.log(street_input + ", " + city_input);
    
    var firstElement = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    var secondElement = street_input + ', ' + city_input;
    var thirdElement = '&heading=151.78&pitch=-0.76&key=AIzaSyD6QmGWiFoeHsVdRG0rTfcB6bd_Miqm_x0">';
    var sumOfAllFears = firstElement + secondElement + thirdElement;
    console.log(sumOfAllFears);
    
    $greeting.text('So, you want to live at ' + street_input + ", " + city_input + '?');
    $body.append(sumOfAllFears);
    
    //MY NY TIMES AJAX GOES HERE - TOP
    
    $.getJSON( "https://api.nytimes.com/svc/search/v2/articlesearch.json", function( data ) {
        console.log( data );
    });
    
    /*

    var searchQuery = city_input;
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "47927427dd544bdb802593e5975d7867",
        'q': searchQuery
    });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
    console.log(result);

    console.log('Docs array length: ' + result.response.docs.length);
    console.log(result.response.docs[0].headline.main);
    console.log(result.response.docs[0].web_url);
    
    console.log(result.response.docs[0].lead_paragraph);
    
    //PART 2 - START -------------------------------------------------------

    var fruitsHeadline = [];
    var fruitsUrl = [];
    var fruitsleadParagraph = [];
    var html = [];

    for(var i=0; i<result.response.docs.length; i++){
        var headline = result.response.docs[i].headline.main;  //Tworzy zmienną "temp", która zbiera długości poszczególnych słów w każdej iteracji.
        fruitsHeadline.push(headline);                //Długości każdego słowa są magazynowane w array "fruits".

        var webUrl = result.response.docs[i].web_url;  //Tworzy zmienną "temp", która zbiera długości poszczególnych słów w każdej iteracji.
        fruitsUrl.push(webUrl);                //Długości każdego słowa są magazynowane w array "fruits".

        var leadParagraph = result.response.docs[i].lead_paragraph;  //Tworzy zmienną "temp", która zbiera długości poszczególnych słów w każdej iteracji.
        fruitsleadParagraph.push(leadParagraph);                //Długości każdego słowa są magazynowane w array "fruits".
    }

    console.log(fruitsHeadline);
    console.log(fruitsUrl);
    console.log(fruitsleadParagraph);

    for(var j=0; j<result.response.docs.length; j++){
        fruitsHeadline[j].push()
        console.log(j+ ': ' + fruitsHeadline[j] +' @@@@@ '+ fruitsUrl[j] +' @@@@@ '+ fruitsleadParagraph[j]);
    }

  













     }).fail(function(err) {
      throw err;
    });

    //MY NY TIMES AJAX GOES HERE - BOTTOM
*/
  });

  return false;
};

$('#form-container').submit(loadData);