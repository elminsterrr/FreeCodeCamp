/* Created by: Elminster White - elminsterthewhite@gmail.com */
function loadData() {
    $("#information").text("");       //Elminster - Reset data before new search.
    $(function whiteFirst() {
      
        var query = $('#wiki_query').val();
        console.log('Searching for: ' + query);
        var myFirstWikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
        var mySecondWikiUrl = "&format=json&callback=wikiCallback";
        var wikiUrl = myFirstWikiUrl + query + mySecondWikiUrl;
        //MY WIKIPEDIA AJAX GOES HERE - TOP
        console.log(wikiUrl);
        var wikiRequestTimeout = setTimeout(function() {
            $("#information").html("An error occurred! Application couldn't get Wikipedia resources!");
        }, 5000); //Elminster - This is 5 seconds!
        $.ajax({
            url: wikiUrl,
            dataType: 'jsonp',
            type: 'GET',
        }).done(function(result) {
            
            var itemsOne = [];
            var itemsTwo = [];
            var itemsThree = [];
            
            $(result[1]).each(function(index, value) {
                itemsOne.push(value);
            });

            $(result[2]).each(function(index, value) {
                itemsTwo.push(value);
            });

            $(result[3]).each(function(index, value) {
                itemsThree.push(value);
            });
            
            $("#information").hide();
            $("#results").hide();
            
            for (var i = 0; i < itemsOne.length; i++) {
                $("#information").append("<a class='title' href=" + itemsThree[i] + " target='_blank'><div class='result'><p class='title' id='boldTitle'>" + itemsOne[i] + "</p><p>" + itemsTwo[i] + "</p></div></a>");
            }
            $("#results").show();
            $('body,html').animate({
                'scrollTop':   $('#results').offset().top
            }, 2000);    
                             
            $("#information").fadeIn("slow");
            clearTimeout(wikiRequestTimeout); //Elminster - This will prevent timeout from happening!
                      
        });
        //MY WIKIPEDIA AJAX GOES HERE - BOTTOM
    });
    return false;
};

$('#whiteButton').click(loadData);
$("#results").hide();