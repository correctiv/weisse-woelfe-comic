(function(){
  /* globals $ */
  'use strict';

  var openClassName = '-open';
  var $navSecondary = $('#nav-secondary');

  // Open secondary navigation:
  $('#nav-on').on('click', function(event) {
    event.preventDefault();
    $navSecondary.addClass(openClassName);
  });

  // Close secondary navigation:
  $('#nav-off').on('click', function(event) {
    event.preventDefault();
    $navSecondary.removeClass(openClassName);
  });

  // Block scrolling of document while secondary nav is open:
  $($navSecondary).on('scroll touchmove mousewheel', function(e){
    return e.preventDefault();
  });

}());
