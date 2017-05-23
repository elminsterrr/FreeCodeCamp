( function ( $ ) {
  "use strict";

  $(document).ready(function(){

    function loadData() {
        $(".information").text(""); // Reset data before new search.
        $(function whiteFirst() {
            const query = $(".wiki_query").val();
            const myFirstWikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
            const mySecondWikiUrl = "&format=json&callback=wikiCallback";
            const wikiUrl = myFirstWikiUrl + query + mySecondWikiUrl;
            // MY WIKIPEDIA AJAX GOES HERE - TOP
            const wikiRequestTimeout = setTimeout(function() {
                $(".small-information").html("An error occurred! Application couldn't get Wikipedia resources!");
            }, 5000); // This is 5 seconds!
            $.ajax({
                url: wikiUrl,
                dataType: "jsonp",
                type: "GET",
            }).done(function(result) {

                const itemsOne = [];
                const itemsTwo = [];
                const itemsThree = [];

                $(result[1]).each(function(index, value) {
                    itemsOne.push(value);
                });

                $(result[2]).each(function(index, value) {
                    itemsTwo.push(value);
                });

                $(result[3]).each(function(index, value) {
                    itemsThree.push(value);
                });

                $(".information").hide();
                $(".results").hide();

                for (let i = 0; i < itemsOne.length; i++) {
                    $(".information").append("<a class='title' href=" + itemsThree[i] + " target='_blank'><div class='result'><p class='title' id='boldTitle'>" + itemsOne[i] + "</p><p>" + itemsTwo[i] + "</p></div></a>");
                }
              
                if (itemsOne.length === 0) {
                  $(".information").html("Nothing found!");
                }
              
                $(".results").show();
                $("body,html").animate({
                    'scrollTop': $(".results").offset().top
                }, 2000);    

                $(".information").fadeIn("slow");
                clearTimeout(wikiRequestTimeout); // This will prevent timeout from happening!
              
            });
            // MY WIKIPEDIA AJAX GOES HERE - BOTTOM
        });
        return false;
    };

    $(".whiteButton").click(loadData);
    $(".results").hide();
    
    $(function() {
      const offset = -50; // Optional offset
      $(".back").click(function() {
        $("html, body").animate({
            scrollTop: $(".cover").offset().top + offset
        }, 750);
      });
    });

  });
  
} ( jQuery ) );