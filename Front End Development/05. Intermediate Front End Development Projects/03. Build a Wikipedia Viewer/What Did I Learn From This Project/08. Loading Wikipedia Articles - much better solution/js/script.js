var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=London&format=json&callback=wikiCallback";
$.ajax({
    url: wikiUrl,
    dataType: "jsonp",
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

    $("#output").html(items);
}).fail(function(err) {
    $("#output").html("An error occurred! Wikipedia Articles Could Not Be Loaded!");
});