/* Created by: Elminster White - elminsterthewhite@gmail.com */
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    
    $(function whiteFirst() {

        var street_input = $('#enter-street').val();
        var city_input = $('#enter-city').val();

        console.log(street_input + ", " + city_input);
        console.log('                              ');

        var firstElement = '<img class="bgimg" src="https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
        var secondElement = street_input + ', ' + city_input;
        var thirdElement = '&heading=151.78&pitch=-0.76&key=AIzaSyD6QmGWiFoeHsVdRG0rTfcB6bd_Miqm_x0">';
        var sumOfAllFears = firstElement + secondElement + thirdElement;

        $greeting.text('So, you want to live at ' + street_input + ", " + city_input + '?');
        $body.append(sumOfAllFears);

        //MY NY TIMES AJAX GOES HERE - TOP
        var searchQuery = city_input;
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "47927427dd544bdb802593e5975d7867",
            'q': searchQuery
        });
        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
        }).done(function(result) {
            var items = [];
            $(result.response.docs).each(function(index, value) {
                console.log(value.headline.main);
                console.log(value.web_url);
                console.log(value.lead_paragraph); //<ul id="nytimes-articles"
                console.log('---------------------');
                items.push("<li class ='article' id='" + index + "'>" + "<a href='" + value.web_url + "'>" + value.headline.main + "</a>" + "<p id='mojparagraf'>" + value.lead_paragraph + "</p>" + "</li>");
            });
            $("#nytimes-articles").html(items); //White - HERE TEXT IS APPEARING ON SITE. IT IS CONNECTED TO <ul id="nytimes-articles">.
        }).fail(function(err) {
            $("#nytimes-header").html("An error occurred! New York Times Articles Could Not Be Loaded!");
        });
        //MY NY TIMES AJAX GOES HERE - BOTTOM
        var myFirstWikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
        var mySecondWikiUrl = "&format=json&callback=wikiCallback";
        var wikiUrl = myFirstWikiUrl + city_input + mySecondWikiUrl;
        //MY WIKIPEDIA AJAX GOES HERE - TOP
        var wikiRequestTimeout = setTimeout(function() {
            $("#wikipedia-links").html("An error occurred! Application couldn't get Wikipedia resources!");
        }, 10000); //White - This is 10 seconds!
        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            type: 'GET',
        }).done(function(result) {
            var items = [];
            var itemsOne = [];
            var itemsThree = [];

            $(result[1]).each(function(index, value) {
                itemsOne.push(value);
            });

            $(result[3]).each(function(index, value) {
                itemsThree.push(value);
            });

            for (var i = 0; i < itemsOne.length; i++) {
                items.push("<li class ='wiki_articles' id='" + i + "'>" + "<a href='" + itemsThree[i] + "'>" + itemsOne[i] + "</a>" + "</li>");
            }

            clearTimeout(wikiRequestTimeout); //White - This will prevent timeout from happening!

            $("#wikipedia-links").html(items);
        });
        /* THIS IS REDUNDANT beacuse I used wikiRequestTimeout
        .fail(function(err) {
            $("#wikipedia-links").html("An error occurred! Wikipedia Articles Could Not Be Loaded!");
        });
        */
        //MY WIKIPEDIA AJAX GOES HERE - BOTTOM
    });
    return false;
};

$('#form-container').submit(loadData);