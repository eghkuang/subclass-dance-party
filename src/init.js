$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var spacedWidth = Math.floor($("body").width() / window.dancers.length - 1);
    var pos = 0;
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition($("body").height() / 2, pos);
      pos += spacedWidth;
      window.dancers[i].isPaired = false;
    }
  });

  //randomizesPosition
  $('.randomizeButton').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
      window.dancers[i].isPaired = false;
    }
  });

  $('.partnerUpButton').on('click', function(event) {

    var distance = function(x1, x2, y1, y2) {
      return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };

    var availPartners = window.dancers.slice();

    for (let i = 0; i < window.dancers.length; i++) {

      if (availPartners.length > 0 && !window.dancers[i].isPaired) {

        availPartners.splice(0, 1);

        var distanceTracker = distance(window.dancers[i].top, window.dancers[i].left, availPartners[0].top, availPartners[0].top);

        var minIndex = 0;

        for (let j = 1; j < availPartners.length; j++) {
          var currentDist = distance(window.dancers[i].top, window.dancers[i].left, availPartners[j].top, availPartners[j].top);

          if (distanceTracker > currentDist) {
            minIndex = j;
            distanceTracker = currentDist;
          }
        }

        availPartners[minIndex].setPosition(window.dancers[i].top + 20, window.dancers[i].left + 20);

        window.dancers[i].isPaired = true;

        availPartners[minIndex].isPaired = true;

        availPartners.splice(minIndex, 1);

      }
    }
  });
  // look for flashy dancer
  // change their color once u find them
  $('.goCrazyButton').on('click', function(event) {
    const setBg = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.flashyDancer.styles.backgroundColor = "#" + randomColor;
      color.innerHTML = "#" + randomColor;
    };
    setBg();

  });

});

