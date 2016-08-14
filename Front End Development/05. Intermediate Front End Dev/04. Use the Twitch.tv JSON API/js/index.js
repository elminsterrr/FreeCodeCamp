/* Created by: Elminster White - elminsterthewhite@gmail.com */

$(document).ready(function() {

  var twichApiContainer = [];

  function makeApiLinksReady() {
    var twichChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "RobotCaleb", "noobs2ninjas", "sanchowest", "comster404"];
    var twitchApiZ = "";
    for (var z = 0; z < twichChannels.length; z++) {
      twitchApiZ = 'https://api.twitch.tv/kraken/streams/' + twichChannels[z] + '?callback=?';
      twichApiContainer.push(twitchApiZ);
    }
  }

  function useAjaxWithTwich() {
    var twichRequestTimeout = setTimeout(function() {
      $(".container-fluid").html("An error occurred! Application couldn't get Twitch.tv resources!");
    }, 5000); //This is 5 seconds!

    for (var y = 0; y < twichApiContainer.length; y++) {
      $.ajax({
        url: twichApiContainer[y],
        dataType: 'jsonp',
        type: 'GET',
      }).done(function(result) {
        console.log(result);

        if (result.status === 422) {

          /* Elminster White - Maybe it isn't good idea to put HTML (with bootstrap) inside JavaScript code, but on my current level of knowledge it was the fastest way to complete this. I hope to find better solution in the future. */

          var smallHtml1 = '<div class="row"><div class="col-xs-4 col-xs-offset-4"><h4>';
          var smallHtml2 = '</h4><div class="well"><div class="row"><div class="row vertical-center"><div class="col-xs-12"><div class="logo">';
          var smallSupplement1 = '<img class="pic logo-border-red" src=';
          var smallSupplement2a = 'http://www.moimoistore.com/Content/images/error-icon.png';
          var smallSupplement2b = ' target="_blank">';
          var smallHtml3 = '</div></div></div></div><div class="row"><div class="col-xs-12"><div class="name">';
          var smallSupplement3d = 'Error';
          var smallHtml4 = '</div></div></div><hr><div class="row"><div class="col-xs-12"><div class="information">';
          var smallSupplement5 = 'Channel is closed or never existed!';
          var smallHtml5 = '</div></div></div></div></div></div>';

          var smallHtmlSum = smallHtml1 + smallHtml2 + smallSupplement1 + smallSupplement2a + smallSupplement2b + smallHtml3 + smallSupplement3d + smallHtml4 + smallSupplement5 + smallHtml5;
          $(".container-fluid").append(smallHtmlSum);

          clearTimeout(twichRequestTimeout); //This will prevent timeout from happening!

        } else if (result.stream !== null) {

          var cut = result.stream.channel.status.substring(0, 28) + ' [...]';
          var largeHtml1 = '<div class="row"><div class="col-xs-4 col-xs-offset-4"><h4>';
          var largeHtml2 = '</h4><div class="well"><div class="row"><div class="row vertical-center"><div class="col-xs-12"><div class="logo">';
          var supplement1 = '<img class="pic logo-border-green" src=';
          var supplement2a = result.stream.channel.logo;
          var supplement2b = ' target="_blank">';
          var largeHtml3 = '</div></div></div></div><div class="row"><div class="col-xs-12"><div class="name">';
          var supplement3a = '<a class="title" href=';
          var supplement3b = result.stream.channel.url;
          var supplement3c = ' target="_blank">';
          var supplement3d = result.stream.channel.display_name;
          var supplement4 = '</a>';
          var largeHtml4 = '</div></div></div><hr><div class="row"><div class="col-xs-12"><div class="information">';
          var supplement5 = result.stream.channel.game + ': ' + cut;
          var largeHtml5 = '</div></div></div></div></div></div>';

          var hugeHtmlSum = largeHtml1 + largeHtml2 + supplement1 + supplement2a + supplement2b + largeHtml3 + supplement3a + supplement3b + supplement3c + supplement3d + supplement4 + largeHtml4 + supplement5 + largeHtml5;
          $(".container-fluid").append(hugeHtmlSum);

          clearTimeout(twichRequestTimeout); //This will prevent timeout from happening!

        } else {

          $.ajax({
            url: result._links.channel,
            dataType: 'jsonp',
            type: 'GET',
          }).done(function(result2) {

            var anotherLargeHtml1 = '<div class="row"><div class="col-xs-4 col-xs-offset-4"><h4>';
            var anotherLargeHtml2 = '</h4><div class="well"><div class="row"><div class="row vertical-center"><div class="col-xs-12"><div class="logo">';
            var anotherSupplement1 = '<img class="pic logo-border-red" src=';
            var anotherSupplement2a = result2.logo;
            var anotherSupplement2b = ' target="_blank">';
            var anotherLargeHtml3 = '</div></div></div></div><div class="row"><div class="col-xs-12"><div class="name">';
            var anotherSupplement3a = '<a class="title" href=';
            var anotherSupplement3b = result2.url;
            var anotherSupplement3c = ' target="_blank">';
            var anotherSupplement3d = result2.display_name;
            var anotherSupplement4 = '</a>';
            var anotherLargeHtml4 = '</div></div></div><hr><div class="row"><div class="col-xs-12"><div class="information">';
            var anotherSupplement5 = 'Channel is offline...';
            var anotherLargeHtml5 = '</div></div></div></div></div></div>';

            var anotherHugeHtmlSum = anotherLargeHtml1 + anotherLargeHtml2 + anotherSupplement1 + anotherSupplement2a + anotherSupplement2b + anotherLargeHtml3 + anotherSupplement3a + anotherSupplement3b + anotherSupplement3c + anotherSupplement3d + anotherSupplement4 + anotherLargeHtml4 + anotherSupplement5 + anotherLargeHtml5;
            $(".container-fluid").append(anotherHugeHtmlSum);

            clearTimeout(twichRequestTimeout); //This will prevent timeout from happening!

          });
        }
      });
    }
    return false;
  }
  makeApiLinksReady();
  useAjaxWithTwich();
});