// Script for transforming the navbar upon scroll.
(function ($) {
  $(window).load(function(){

    // The distance from top in pixels where the transform should start.
    // Adjust as needed.
    var transformThreshold = 200;

    window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;

      if (distanceY > transformThreshold) {
        $('body').addClass('navbar-transform');
      } else {
        $('body').removeClass('navbar-transform');
      }

    });

  });

})(jQuery);
