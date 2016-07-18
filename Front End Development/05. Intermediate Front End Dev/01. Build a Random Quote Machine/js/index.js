$(document).ready(function() {
  var losowyCytat = "";
  var nieLosowyAutor = "";

  function wezCytat() {

    function randomRange(myMin, myMax) {

      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

    }

    var cytaty = [{
      "autor": "–Napoleon Hill",
      "q": "Whatever the mind of man can conceive and believe, it can achieve."
    }, {
      "autor": "–Florence Nightingale",
      "q": "I attribute my success to this: I never gave or took any excuse."
    }, {
      "autor": "–Friedrich Nietzsche",
      "q": "There are no facts, only interpretations."
    }, {
      "autor": "–Mark Twain",
      "q": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."
    }, {
      "autor": "–Buddha",
      "q": "The mind is everything. What you think you become."
    }, {
      "autor": "–Aristotle",
      "q": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing."
    }, {
      "autor": "–George Addair",
      "q": "Everything you’ve ever wanted is on the other side of fear."
    }, {
      "autor": "–Japanese Proverb",
      "q": "Fall seven times and stand up eight."
    }, {
      "autor": "–Jamie Paolinetti",
      "q": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless."
    }, {
      "autor": "–Confucius",
      "q": "It does not matter how slowly you go as long as you do not stop."
    }];

    var losowaLiczba = randomRange(0, cytaty.length - 1);
    losowyCytat = cytaty[losowaLiczba].q;
    nieLosowyAutor = cytaty[losowaLiczba].autor;

    $(".quoteConnectingElement").text(losowyCytat);
    $(".authorConnectingElement").text(nieLosowyAutor);
  }

  $("#target1").on("click", function() {
    wezCytat();
  });

  $("#target2").on("click", function() {
    if (losowyCytat === "") {
      alert("Please use \"New Quote\" button first!");
    } else {
      console.log("B");
      //Deleting commas because they are changed to #  ( ',' => '#') on twitter page!
      var regex = new RegExp(',', 'g');
      var losowyCytatWithoutCommas = losowyCytat.replace(regex, '');

      window.open("https://twitter.com/intent/tweet?hashtags=quotes" + " " + losowyCytatWithoutCommas + " " + nieLosowyAutor);
    }
  });

});