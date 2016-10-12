var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=London&format=json&callback=wikiCallback";

$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    type: 'GET',
}).done(function(result) {
    var items = [];
    var itemsOne = [];
    var itemsThree = [];

    //console.log(result);
    //console.log(result.length)

    for (var i = 3; i < result.length; i++) {
        //console.log(result[i]);

        for (var j = 0; j < result[i].length; j++) {

            console.log(result[i][j]);
            itemsThree.push(result[i][j]);
        }
    }

    for (var i = 1; i < 2; i++) {
        //console.log(result[i]);

        for (var j = 0; j < result[i].length; j++) {

            console.log(result[i][j]);
            itemsOne.push(result[i][j]);
        }
    }

    console.log('1: ' + itemsOne);
    console.log('2: ' + itemsThree);

    for (var x = 0; x < itemsOne.length; x++) {
        console.log(x + ": " + itemsOne[x] + " " + itemsThree[x])
        items.push("<li class ='wiki_article' id='" + x + "'>" + "<a href='" + itemsThree[x] + "'>" + itemsOne[x] + "</a>" + "</li>");
    }

    $("#output").html(items);

});