/*!
 * Bootstrap 3 Navbar Transform Plugin v1.0
 * https://github.com/krystalcode/bootstrap3-navbar-transform
 * Copyright (c) 2015 Dimitris Bozelos
 * Licensed under MIT (https://github.com/krystalcode/bootstrap3-navbar-transform/blob/master/LICENSE)
 */
(function ($) {
  $(window).load(function(){

    // The distance from top in pixels where the transform should start.
    // Adjust as needed.
    var transformThreshold = 200;

    // Transform the navbar upon scroll by adding or removing the
    // navbar-transform class.
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
